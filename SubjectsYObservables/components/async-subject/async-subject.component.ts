import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

/*   constructor(private _log: LogService) {
    this.numeroSubject.subscribe(numero => this.numero = numero)
  } */

  ngOnInit(): void {
  }

  private numeroSubject: AsyncSubject<number> = new AsyncSubject<number>()

  numero: number
  siguiente(): void {
    //Siguiente número aleatorio
    const valor = Math.floor((Math.random() * 100) + 1)
    /* this._log.log('AsyncSubject', 'Siguiente valor:', valor) */
    this.numeroSubject.next(valor)
  }

  completar(): void {
    /* this._log.complete('AsyncSubject') */
    this.numeroSubject.complete()
  }

}
