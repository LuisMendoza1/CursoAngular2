import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/others/interface';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.sass']
})
export class InputoutputComponent implements OnInit {

  usuarios = []

  constructor(
    private _http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos: any[]) => this.usuarios = datos)
  }

  borrarUsuario(id: number){
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  }

}
