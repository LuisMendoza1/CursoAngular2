import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from './pipes/uppercase.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UppercasePipe]
})
export class AppComponent implements OnInit {

  constructor (
    private _upper: UppercasePipe
  ){

  }
  lista = [
    { id: 1, nombre:'Pacific Rim: Insurreción', precio: 6.80 },
    { id: 2, nombre:'Black panther', precio: 5.95 },
    { id: 3, nombre:'El corredor del laberinto: La cura mortal', precio: 7.9 },
    { id: 4, nombre:'Ready Player One', precio: 3.9 },
    { id: 5, nombre:'Vengadores: Infinity War', precio: 4.3 },
    { id: 6, nombre:'Deadpool 2', precio: 5.1 },
    { id: 7, nombre:'Los increibles 2', precio: 7.6 },
    { id: 8, nombre:'Hotel Transilvania', precio: 4.4 },
  ]

  ngOnInit(){
    alert(this._upper.transform(this.lista[0].nombre))
  }
}
