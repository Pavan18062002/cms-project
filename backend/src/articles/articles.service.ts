import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async create(article: any): Promise<Article> {
    const newArticle = new this.articleModel(article);
    return newArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async update(id: string, article: any): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(id, article, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.articleModel.findByIdAndRemove(id).exec();
  }
}
