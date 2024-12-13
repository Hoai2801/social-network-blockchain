import { Schema, Document } from 'mongoose';
import {
  Prop,
  Schema as MongooseSchema,
  SchemaFactory,
} from '@nestjs/mongoose';
@MongooseSchema()
export class Conversation extends Document {
  @Prop({ required: true })
  type: string; // "direct" for 1-on-1 or "group" for group chats

  @Prop([{ userId: { type: String }, joinedAt: Date }])
  participants: { userId: string; joinedAt: Date }[];

  @Prop({ required: false, default: '' })
  name: string; // Only for group chats

  @Prop([{ type: String }])
  adminIds: string[]; // Admins (only for group chats)

  @Prop({})
  thumbnail: string;

  @Prop({
    type: {
      text: String,
      sentAt: Date,
      userId: String,
    },
    required: false,
  })
  lastMessage: {
    text: string;
    sentAt: Date;
    userId: string;
    isRead: boolean;
  };

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
