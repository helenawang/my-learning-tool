import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { VirtualTableComponent } from './virtual-table/virtual-table.component';
import { KnowledgeCardComponent } from './knowledge-card/knowledge-card.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { KnowledgeEditorComponent } from './knowledge-editor/knowledge-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualTableComponent,
    KnowledgeCardComponent,
    KnowledgeListComponent,
    KnowledgeEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
