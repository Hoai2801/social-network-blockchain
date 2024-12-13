import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './schema/message.schema';
import { Model } from 'mongoose';
import { Conversation } from 'src/conversations/schema/conversation.schema';
import { error } from 'console';
import { MessagesGateway } from './messages.gateway';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<Conversation>,
    private readonly messagesGateway: MessagesGateway, // Inject the gateway
  ) {}
  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const existingConversation = await this.conversationModel
      .findById(createMessageDto.conversationId)
      .catch((err) => {
        throw new Error('Category does not exist');
      });
    const { messageType, transaction } = createMessageDto;

    if (messageType === 'transaction' && !transaction) {
      throw new BadRequestException(
        'Transaction details are required when messageType is "transaction".',
      );
    } // Update the lastMessage field in the conversation
    existingConversation.lastMessage = {
      text: createMessageDto.text,
      sentAt: new Date(),
      userId: createMessageDto.senderId,
      isRead: false, // You can set this based on your application's logic
    };

    // Save the updated conversation
    await existingConversation.save();
    const newMessage = new this.messageModel(createMessageDto);

    const savedMessage = await newMessage.save();
    const receicers = existingConversation.participants.filter(
      (participant) => participant.userId != createMessageDto.conversationId,
    );
    // Emit the message to all connected clients
    // this.messagesGateway.sendMessageToClient(receicers[0].userId, savedMessage);

    return savedMessage;
  }

  async getHistory(conversationId: string): Promise<Message[]> {
    const messages = await this.messageModel
      .find({ conversationId })
      .sort({ sentAt: 1 });
    return messages;
  }

  async findAll(): Promise<Message[]> {
    return await this.messageModel.find();
  }

  async findOne(id: string): Promise<Message> {
    const message = await this.messageModel.findById(id).catch((error) => {
      throw new BadRequestException(`Get messgase error: ${error}`);
    });
    return message;
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: string) {
    return `This action removes a #${id} message`;
  }
}
