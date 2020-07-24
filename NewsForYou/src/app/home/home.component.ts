import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  articles: Article[];
  articleTopic = new FormControl(sessionStorage.getItem('topic'));

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.articles = JSON.parse(sessionStorage.getItem('articles'));
    }
  }

  getArticlesByTopic() {
    sessionStorage.setItem('topic', this.articleTopic.value);

    this.newsService.getArticlesByTopic(this.articleTopic.value).subscribe(response => {
      this.articles = response;
    });
  }
}
