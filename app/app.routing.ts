import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

//Importing Components for create routes
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
