import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  //Decorador input
  @Input('data') usuario: any

  //Decorador output
  @Output() borrar = new EventEmitter<number>()

  constructor() { }

  BorrarUsuario(id: number){
    this.borrar.emit()
  }
}
