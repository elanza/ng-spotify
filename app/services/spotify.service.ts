import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {
  //Declaring variables
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

  constructor (private _http:Http){

  }
  //Implementing GetMusic
  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
  //Implementing GetArtist
  getArtist(id:string){
    this.artistUrl = 'http://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }
  //Implementing GetAlbums
  getAlbums(artistId: string){
    this.albumsUrl = 'http://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._http.get(this.albumsUrl)
      .map(res => res.json());
  }
  //Implementing GetAlbum
  getAlbum(id: string){
    this.albumUrl = 'http://api.spotify.com/v1/albums/'+id;
    return this._http.get(this.albumUrl)
      .map(res => res.json());
  }

}
