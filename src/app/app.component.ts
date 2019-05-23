import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {IncidentsPage} from "../pages/incidents/incidents";
import {EmployesPage} from "../pages/employes/employes";
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild('content') content: NavController;
  tabsPage: any = TabsPage;
  incidentsPage: any = IncidentsPage;
  employesPage: any = EmployesPage;
  settingsPage: any = SettingsPage;




  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // Your web app's Firebase configuration
      let firebaseConfig = {
        apiKey: "AIzaSyCKInUWVX1LpyDR5mU7SRL4NbEJAXWD_eE",
        authDomain: "idesk-ionic.firebaseapp.com",
        databaseURL: "https://idesk-ionic.firebaseio.com",
        projectId: "idesk-ionic",
        storageBucket: "idesk-ionic.appspot.com",
        messagingSenderId: "933027568325",
        appId: "1:933027568325:web:aa2492b347bccc3a"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any){
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

