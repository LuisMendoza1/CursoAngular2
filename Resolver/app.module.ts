import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { SongComponent } from './components/song/song.component';
import { SongResolver } from './resolvers/song.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explorer'
  },
  {
    path: 'explorer',
    component: ExplorerComponent
  },
  {
    path: 'song/:id',
    component: SongComponent,
    resolve: {
      song: SongResolver
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    SongComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
