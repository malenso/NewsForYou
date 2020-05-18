import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../models/article';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.article.id = Math.floor(Math.random() * 100000);
  }

  getArticleById(id: number): Article {
    return null;
  }

  setActivePage() {
    this.newsService.setActivePage(this.article);
  }
}
