import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
/* import { LogService } from '../../log.service'; */

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

/*   constructor(private _log: LogService) {
    this.numeroSubject.subscribe(numero => this.numero = numero)
  } */

  ngOnInit(): void {
  }

  private numeroSubject: Subject<number> = new Subject<number>()

  numero: number
  siguiente(): void {
    //Siguiente número aleatorio
    const valor = Math.floor((Math.random() * 100) + 1)
    /* this._log.log('Subject', 'Siguiente valor:', valor) */
    this.numeroSubject.next(valor)
  }

  completar(): void {
    /* this._log.complete('Subject') */
    this.numeroSubject.complete()
  }
  

}

