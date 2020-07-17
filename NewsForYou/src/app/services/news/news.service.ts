import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { map, share } from 'rxjs/operators';
import { apiKeys } from 'src/apiKeys';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  activeArticle: Article;

  constructor(
    private http: HttpClient
  ) { }

  setActiveArticle(article: Article) {
    this.activeArticle = article;
  }

  getArticlesByTopic(topic: string) {
    const url = `/api/everything?q=${topic}&language=en`;
    const headers = new HttpHeaders(
      { 'x-api-key': apiKeys.newsApiKey }
    );

    return this.http.get<any>(url, { headers })
      .pipe(
        map(data => {
          return data.articles.map(article => {
            return {
              author: article.author,
              title: article.title,
              description: article.description,
              url: article.url,
              urlToImage: article.urlToImage,
              publishedAt: article.publishedAt,
              content: article.content,
            };
          });
        }),
        share()
      );
  }
}
