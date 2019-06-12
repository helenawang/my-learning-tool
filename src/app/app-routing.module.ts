import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {VirtualTableComponent} from './virtual-table/virtual-table.component';
import {KnowledgeListComponent} from './knowledge-list/knowledge-list.component';
import {KnowledgeEditorComponent} from './knowledge-editor/knowledge-editor.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'knowledgeForm-editor', pathMatch: 'full'},
  {path: 'virtual-table', component: VirtualTableComponent},
  {path: 'knowledgeForm-list', component: KnowledgeListComponent},
  {path: 'knowledgeForm-editor', component: KnowledgeEditorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
