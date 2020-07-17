import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NewsService } from '../services/news/news.service';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  filters: string[] = ['Relevance', 'Title', 'Date'];
  selectedFilter = new FormControl('');
  articleTopic = new FormControl('');
  articles$: Observable<Article[]>;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }

  getArticlesByTopic() {
    this.articles$ = this.newsService.getArticlesByTopic(this.articleTopic.value);
  }
}
