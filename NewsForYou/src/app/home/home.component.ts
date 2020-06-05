import { Component, OnInit } from '@angular/core';

import { NewsService } from '../services/news/news.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  articles: Article[];
  filters: string[] = ['relevance', 'title', 'date'];
  selectedFilter: string;
  articleTopic: string;
  originalArticles: Article[];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

  getArticlesByTopic() {
    this.newsService.getArticlesByTopic(this.articleTopic)
      .subscribe(response => {
        this.articles = response;
        this.originalArticles = [...response];
      }, error => console.log(error));
  }

  sort() {
    switch (this.selectedFilter) {
      case 'date':
        this.articles = this.articles.sort((a: Article, b: Article) => {
          return a.publishedAt < b.publishedAt ? -1 : 1;
        });
        break;
      case 'title':
        this.articles = this.articles.sort((a: Article, b: Article) => {
          return a.title < b.title ? -1 : 1;
        });
        break;
      default:
        this.articles = this.originalArticles;
    }
  }
}
