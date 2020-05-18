import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.article = this.newsService.getArticleById(this.articleId);
  }
}
