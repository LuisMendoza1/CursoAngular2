import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as faker from 'faker';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private _http: HttpClient
  ) { }

  noticias: Noticia[] = []

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data: Noticia[]) => data.slice(0, 10))
      )
      .subscribe((noticias: Noticia[]) => {
        noticias.forEach(noticia => {
          this.noticias.push({
            ...noticia,
            author: faker.name.findName(),
            url: `https://noticiero.com/${noticia.title.replace(/\ /g, '-')}`
          })
        })
        console.log(this.noticias)
      })
  }
}

export interface Noticia {
  userId: number
  id: number
  title: string
  body: string
  author: string
  url: string
}
