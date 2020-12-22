import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    SortPipe,
    SortbyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
