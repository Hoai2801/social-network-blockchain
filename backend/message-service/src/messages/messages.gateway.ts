import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } }) // Allow all origins for testing
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  // Map to store the client socket IDs and their corresponding user ID
  private connectedClients: Map<string, { socketId: string; userId: string }> =
    new Map();

  // Handle client connection
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);

    // Ensure userId is a string, even if it's passed as a string array
    const userId = Array.isArray(client.handshake.query.userId)
      ? client.handshake.query.userId[0] // Use the first value if it's an array
      : client.handshake.query.userId; // Otherwise, use the string directly

    if (userId) {
      this.connectedClients.set(client.id, { socketId: client.id, userId });
    } else {
      console.error('No userId provided in handshake query');
    }
  }

  // Handle client disconnection
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.connectedClients.delete(client.id);
  }

  // Handle new messages
  @SubscribeMessage('newMessage')
  sendMessageToClient(
    @ConnectedSocket() client: Socket, // The connected client socket
    @MessageBody() message: any, // Message body from the client
  ) {
    console.log('Message from:', message.participants);

    // Filter out the sender and get the receivers (exclude senderId)
    const receivers = message.participants.filter(
      (par) => par.userId !== message.text.senderId,
    );

    console.log('Receivers:', receivers);

    // Send the message to each receiver
    // receivers.forEach((receiver) => {
    //   // Find the connected client using the userId
    //   const recipient = [...this.connectedClients.values()].find(
    //     (clientData) => clientData.userId === receiver.userId,
    //   );

    //   if (recipient) {
    //     // Emit the message to the recipient's socket
    //     this.server.to(recipient.socketId).emit('message', message);
    //     console.log('nguoi nhan', recipient);
    //   }
    // });

    this.server.emit('message', message);
  }
}
