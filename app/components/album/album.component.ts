import { Component, OnInit } from '@angular/core';
//Import Route
import {Route, ActivatedRoute} from '@angular/router';
//Import Artist & Album class
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
//Import Spotify Service
import {SpotifyService} from '../../services/spotify.service'

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit{
  id: string;
  album: Album[];

  //We need 2. 1- Spotify service 2-Activated Route
  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute) {
  }
  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        //Get Album
        this._spotifyService.getAlbum(id)
          .subscribe( album=> {
            this.album = album;
          })
      })
  }
}
