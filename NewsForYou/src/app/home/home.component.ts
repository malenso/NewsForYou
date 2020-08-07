import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NewsService } from '../services/news/news.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  filters: string[] = ['Relevance', 'Title', 'Date'];
  selectedFilter = new FormControl();
  articleTopic = new FormControl();
  articles: Article[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
      this.articleTopic.setValue(sessionStorage.getItem('topic'));
      this.articles = JSON.parse(sessionStorage.getItem('articles'));
      this.selectedFilter.setValue(sessionStorage.getItem('filter'));
  }

  getArticlesByTopic() {
    sessionStorage.setItem('topic', this.articleTopic.value);

    this.newsService.getArticlesByTopic(this.articleTopic.value).subscribe(response => {
      this.articles = response;
    });
  }

  setSelectedFilter() {
    sessionStorage.setItem('filter', this.selectedFilter.value);
  }
}
