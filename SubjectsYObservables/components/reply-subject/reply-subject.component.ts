import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
/* import { LogService } from '../../log.service'; */

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.css']
})
export class ReplySubjectComponent implements OnInit {

/*   constructor(private _log: LogService) {
    this.numeroSubject.subscribe(numero => this.numero = numero)
   } */

  ngOnInit(): void {
  }

  private numeroSubject: ReplaySubject<number> = new ReplaySubject(3)

  numero: number

  siguiente() : void {
    const valor = Math.floor((Math.random() * 100) + 1)
    /* this._log.log('ReplaySubject', 'Siguiente valor:', valor) */
    this.numeroSubject.next(valor)
  }

}
