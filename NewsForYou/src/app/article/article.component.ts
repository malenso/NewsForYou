import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.article = this.newsService.activeArticle;
  }

}
