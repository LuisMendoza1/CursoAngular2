import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atributosyeventos',
  templateUrl: './atributosyeventos.component.html',
  styleUrls: ['./atributosyeventos.component.sass']
})
export class AtributosyeventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desactivado = false

  tipo = 'submit'

  titulo: string = "Luis"

  log(titulo) {
    console.log(titulo)
  }

  seleccion: string = ""

}
