
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { delay } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SongResolver implements Resolve<Observable<any>> {
    
    constructor(private _api: ApiService) {
        
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this._api.getSong(route.paramMap.get('id')).pipe(
            catchError(error => {
                alert('Algo ha fallado')
                console.log(error)
                return of()
            })
        )
    }
}