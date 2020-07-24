import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../models/article';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() article: Article;
}
