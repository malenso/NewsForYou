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

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getArticlesByTopic();
  }

  getArticlesByTopic() {
    const topic = 'space';

    this.newsService.getArticlesByTopic(topic)
      .subscribe(response => {
        this.articles = response;
      }, error => console.log(error));
  }
}
