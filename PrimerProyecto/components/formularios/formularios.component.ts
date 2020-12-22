import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.sass']
})
export class FormulariosComponent {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder
  ) { 
    this.signupForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    })
  }

  enviar(values){
    console.log(values)
  }

}
