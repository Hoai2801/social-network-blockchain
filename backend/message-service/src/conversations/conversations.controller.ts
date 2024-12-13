import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail'))
  @ApiConsumes('multipart/form-data')
  create(
    @Body() createConversationDto: CreateConversationDto,
    @UploadedFile() thumbnail: Express.Multer.File,
  ) {
    return this.conversationsService.create(createConversationDto, thumbnail);
  }

  @Get()
  findAll() {
    return this.conversationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationsService.findOne(+id);
  }

  @Get('user/:userId')
  async getConversationsByUserId(@Param('userId') userId: string) {
    return await this.conversationsService.getConversationsByUserId(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ) {
    return this.conversationsService.update(+id, updateConversationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversationsService.remove(+id);
  }
}
