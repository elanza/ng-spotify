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
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit{
  id: string;
  artist: Artist[];
  albums: Album[];

  //We need 2. 1- Spotify service 2-Activated Route
  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute) {
  }
  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        //Get Artist
        this._spotifyService.getArtist(id)
          .subscribe( artist=> {
            this.artist = artist;
          })
      //  Get Albums
        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          })
      })
  }
}
