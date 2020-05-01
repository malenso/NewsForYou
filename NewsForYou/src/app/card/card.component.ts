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

  }
}
