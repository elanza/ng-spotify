import { Component } from '@angular/core';
//Importing service
import {SpotifyService} from './services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [SpotifyService]
})
export class AppComponent { }
