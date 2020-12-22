import { Component, OnInit } from '@angular/core';
/* import { LogService } from 'src/app/app.module.ts'; */
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

/*   constructor(private _log: LogService) {
    this.numeroSubject.subscribe(numero => {
      if (numero == null) {
        this._log.log('BehaviorSubject', 'Valor inicial:', numero)
      } else {
        this.numero = numero
      }
    })
   } */

  ngOnInit(): void {
  }

  private numeroSubject: BehaviorSubject<number> = new BehaviorSubject(null)

  numero: number

  siguiente() : void {
    const valor = Math.floor((Math.random() * 100) + 1)
    /* this._log.log('Subject', 'Siguiente valor:', valor) */
    this.numeroSubject.next(valor)
  }

  completar() : void {
    /* this._log.complete('Subject') */
    this.numeroSubject.complete()
  }

}
