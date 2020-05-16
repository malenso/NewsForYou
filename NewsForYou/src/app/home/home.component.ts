import { Component, OnInit } from '@angular/core';

import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  articles: any[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.GetArticles('happy')
      .subscribe((response: any) => {
        this.articles = response;
      }, error => console.log(error));
  }

}
