import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './schema/conversation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryThumbNailService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<Conversation>,
    private readonly cloudinaryService: CloudinaryThumbNailService,
  ) {}
  async create(
    createConversationDto: CreateConversationDto,
    thumbnail: Express.Multer.File,
  ): Promise<Conversation> {
    const participants = createConversationDto.participants.map((userId) => ({
      userId,
      joinedAt: new Date(),
    }));
    const urlThumbnail = (await this.cloudinaryService.uploadFile(thumbnail))
      .secure_url;
    createConversationDto.thumbnail = urlThumbnail;
    const newConversation = new this.conversationModel({
      ...createConversationDto,
      participants,
    });
    return newConversation.save();
  }

  findAll() {
    return `This action returns all conversations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  async getConversationsByUserId(userId: string): Promise<Conversation[]> {
    return await this.conversationModel.find({
      participants: { $elemMatch: { userId } }, // Match conversations where userId exists in participants
    });
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
