import { Component, OnInit, Input } from '@angular/core';
import {Knowledge} from '../model/Knowledge';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.css']
})
export class KnowledgeCardComponent implements OnInit {
  @Input()knowledge: Knowledge;
  constructor() { }

  ngOnInit() {
  }

}
