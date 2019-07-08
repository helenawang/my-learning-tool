import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNavs = [
    {name: '已有的knowledge', routerLink: '/knowledge-list'},
    {name: '创建一个新的knowledge', routerLink: '/knowledge-editor'}
    ];
}
