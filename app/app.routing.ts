import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

//Importing Components for create routes
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

//Routes
const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'artist/:id',
    component: ArtistComponent
  },
  {
    path:'album/:id',
    component: AlbumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
