import { Component , OnInit} from '@angular/core';

@Component({ //Decorador
  selector: 'tut-header', // Como llamarlo al componente
  templateUrl: './header.component.html', // Importar el html al componente
  styleUrls: ['./header.component.sass'] // Importar estillos al componente
})
export class HeaderComponent implements OnInit{ //Importante exportarlo al app.modules.ts

  constructor() {
    console.log("Componente creado")
  }

  ngOnInit(){ //Para que se ejecute algo después de haber creado el componente
    console.log("Componente Header ya creado");
  }

  nombre = "Luis"

  contador = 0

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  suma(){
  this.contador++
  }

  add(){
    this.arr.push(Math.random()) //Añadir aleatorios
  }
}
