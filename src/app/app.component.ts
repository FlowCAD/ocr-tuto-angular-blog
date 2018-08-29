import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyBFnj42hLHGxPL6nP3vIUaDDLx-SL9RYu8',
      authDomain: 'my-blog-6c309.firebaseapp.com',
      databaseURL: 'https://my-blog-6c309.firebaseio.com',
      projectId: 'my-blog-6c309',
      storageBucket: 'my-blog-6c309.appspot.com',
      messagingSenderId: '1088284118976'
    };
    firebase.initializeApp(config);
  }
}
