import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  currentArticleIndex: string;

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentArticleIndex = params.get('index');
    });
    const articles: Article[] = JSON.parse(sessionStorage.getItem('articles'));

    this.article = articles.find(
      article => article.index.toString() === this.currentArticleIndex,
    );
  }
}
