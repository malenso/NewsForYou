import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../models/article';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  articleId: string;

  constructor(
    private readonly newsService: NewsService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSelectedArticle();
    this.articleId = this.route.snapshot.paramMap.get('id');
  }

  getSelectedArticle() {
    this.article = this.newsService.articles.find(article => article.id == this.articleId);
  }
}
