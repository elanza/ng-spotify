import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import Forms Module
import {FormsModule} from '@angular/forms';
//Import Http Module
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

//Import Components
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

//Import Routing
import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
