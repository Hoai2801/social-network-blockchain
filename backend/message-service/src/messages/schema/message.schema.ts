import { Schema, Document } from 'mongoose';
import {
  Prop,
  Schema as MongooseSchema,
  SchemaFactory,
} from '@nestjs/mongoose';
@MongooseSchema()
class Transaction {
  @Prop({ required: true, type: String })
  assetType: string; // Type of asset: 'ETH', 'BTC', 'NFT', etc.

  @Prop({ required: true, type: Number })
  amount: number; // Amount of the asset transferred

  @Prop({ required: true, type: String })
  transactionHash: string; // Blockchain transaction hash

  @Prop({ required: true, type: String })
  receiverAddress: string; // Receiver's wallet address
}
@MongooseSchema()
export class Message extends Document {
  @Prop({ required: true, type: Schema.Types.ObjectId, ref: 'Conversation' })
  conversationId: string;

  @Prop({ required: true, type: String })
  senderId: string;
  @Prop({
    required: true,
    type: String,
    enum: ['text', 'transaction', 'media'],
  })
  messageType: string;
  @Prop({ required: false })
  text: string;

  @Prop({ required: true, default: Date.now })
  sentAt: Date;

  @Prop({ default: false })
  isRead: boolean;

  @Prop([{ userId: { type: String }, isRead: Boolean }])
  readBy: { userId: string; isRead: boolean }[];

  // TRANSACTION Details
  @Prop({ type: Transaction, required: false })
  transaction?: Transaction;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
