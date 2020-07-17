import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: Article[], filter: string): Article[] {
    switch (filter) {
      case 'Date':
        articles = articles.sort((a: Article, b: Article) => {
          return a.publishedAt < b.publishedAt ? -1 : 1;
        });
        break;
      case 'Title':
        articles = articles.sort((a: Article, b: Article) => {
          return a.title < b.title ? -1 : 1;
        });
        break;
      case 'Relevance':
        articles = articles.sort((a: Article, b: Article) => {
          return a.index < b.index ? -1 : 1;
        });
        break;
      default:
        break;
    }
    return articles;
  }
}
