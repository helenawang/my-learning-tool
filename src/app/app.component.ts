import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-widgets';
  firstNavs = [
    {name: 'knowledge-list', routerLink: '/knowledge-list'},
    {name: 'knowledge-editor', routerLink: '/knowledge-editor'}
    ];
  secondNavs = [
    {parent: 'learning to learn', data: ['knowledge-list', 'knowledge-editor']},
    {parent: 'widgets', data: ['virtual-table']}
  ];
}
