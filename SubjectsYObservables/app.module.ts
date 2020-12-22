import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ReplySubjectComponent } from './components/reply-subject/reply-subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { LogService } from 'ng2-log-service';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ReplySubjectComponent,
    BehaviorSubjectComponent,
    AsyncSubjectComponent,
    LogService
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
