import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/operators';
import { token } from '../token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  spotifyHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  
  searchSongs(name): Observable<any> {
    return this._http.get(`https://api.spotify.com/v1search?q=${name}/type=track`, {
      headers: this.spotifyHeaders()
    })
  }
  getSong(id: string): Observable<any> {
    return this._http.get(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: this.spotifyHeaders()
    }).pipe(
      delay(3000) // Para animaciones
      )
  }
}

