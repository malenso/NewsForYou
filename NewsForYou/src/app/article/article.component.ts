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
  currentArticleIndex: string;

  constructor(
    private readonly newsService: NewsService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentArticleIndex = params.get('index');
    });

    console.log(this.currentArticleIndex);
    console.log(this.newsService.articles);

    this.article = this.newsService.articles.find(article =>
      !!article.index.toString === !!this.currentArticleIndex.toString);
  }
}
