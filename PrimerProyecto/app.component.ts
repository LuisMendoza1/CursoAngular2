import { Component } from '@angular/core';
import { Usuario, UserType } from './others/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'primerproyecto';

  /*   user1: Usuario = { //Declaramos el objeto del tipo usuario
      ID: 24,
      Nombre:"Luis",
      Apellidos: "Mendoza Montero",
      Email: "luis@hotmail.com",
      Nick: "Taertius",
      Contraseña: "1234",
      Tipo: UserType.Administrador
    } */

  users: Usuario[] = [ //Declaramos un array de usuarios
    {
      ID: 24,
      Nombre: "Luis",
      Apellidos: "Mendoza Montero",
      Email: "luis@hotmail.com",
      Nick: "Taertius",
      Contraseña: "1234",
      Tipo: UserType.Administrador
    },
    {
      ID: 23,
      Nombre: "Maria",
      Apellidos: "Tutu TUTu",
      Email: "maria@hotmail.com",
      Nick: "Maria34",
      Contraseña: "123",
      Tipo: UserType.Cliente
    }
  ]

  // Casting: transformar un objeto de un tipo a otro tipo de dato
  user: Usuario = <Usuario>{ //Declaramos el objeto PERO sin tipo usuario
    ID: 24,
    Nombre: "Luis",
    Apellidos: "Mendoza Montero",
    Email: "luis@hotmail.com",
    Nick: "Taertius",
    Contraseña: "1234",
    Tipo: UserType.Administrador
  }

  // Es importante castear objketos para que al llegar desde una
  // petición de una API Rest, sepa qué datos llegan
  mostrar():void { 
    console.log(this.user.Email, ", ", this.user.Nombre)
  }
  constructor() {
    console.log(this.mostrar())
  }
}

