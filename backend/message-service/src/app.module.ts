import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { CategoryModule } from './modules/category/category.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { BannerModule } from './modules/banner/banner.module';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MessagesModule } from './messages/messages.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesGateway } from './messages/messages.gateway';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    CloudinaryModule,
    MessagesModule,
    ConversationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, MessagesGateway],
})
export class AppModule {}
