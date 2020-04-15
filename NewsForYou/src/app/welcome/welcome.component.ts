import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import { NewsService } from '../services/news/news.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ],
})
export class WelcomeComponent implements OnInit {
  count = 0;
  narrative: string[] = [
    'I know things have been...strange.',
    'And we haven\'t seen each other in awhile',
    'But I\'ve been thinking about you',
    'And I wanted to make you smile',
    'So I put this together for you'
  ];

  constructor(
    protected newsService: NewsService
  ) { }

  ngOnInit() {
    console.log(1);
    this.newsService.GetArticles('cats');
  }

  Increment() {
    if (this.count < 4) {
      this.count++;
      console.log(this.count);
    }
  }
}
