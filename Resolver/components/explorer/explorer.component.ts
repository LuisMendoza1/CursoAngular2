import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  songs = []

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._api.searchSongs('Alan Walker').subscribe(response =>
      this.songs = response.tracks.items
    )}

  goSong(song) {
    this._router.navigate(['song', song.id])
  }

}
