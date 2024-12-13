import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './schema/article.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

import { Category, CategorySchema } from '../category/schema/category.schema';
import { User, UserSchema } from '../users/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    CloudinaryModule,
    NestjsFormDataModule,
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
