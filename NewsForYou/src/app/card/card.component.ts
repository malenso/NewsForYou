import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() article: Article;

  constructor(
  ) { }

  ngOnInit() {
    this.article.id = Math.floor(Math.random() * 100000);
  }

  getArticleById(id: number): Article {
    return null;
  }
}
