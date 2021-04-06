import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keyboard:Keyboard
  ) {

    let config = {
      apiKey: "AIzaSyAw71eYZTzmdYpYiUd2jqwy_PwHC99d45E",
      authDomain: "mychat-7b554.firebaseapp.com",
      databaseURL: "https://mychat-7b554.firebaseio.com",
      projectId: "mychat-7b554",
      storageBucket: "mychat-7b554.appspot.com",
      messagingSenderId: "824868960041",
      appId: "1:824868960041:web:09c3cbbfaba691f2aea938",
      measurementId: "G-VQ31LVBMY6"
    };
    firebase.initializeApp(config);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.keyboard.disableScroll(false);
    
      this.splashScreen.hide();
    });
  }
}
