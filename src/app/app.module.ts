import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IncidentsPage} from "../pages/incidents/incidents";
import {EmployesPage} from "../pages/employes/employes";
import {SingleEmployePage} from "../pages/employes/single-employe/single-employe";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {EmployesService} from "../services/employes.service";
import {OptionsPage} from "../pages/options/options";
import {EmployeFormPage} from "../pages/employe-form/employe-form";
import {IncidentFormPage} from "../pages/incident-form/incident-form";
import {SingleIncidentPage} from "../pages/incidents/single-incident/single-incident";
import {IncidentsService} from "../services/incidents.service";
import {AuthPage} from "../pages/auth/auth";
import {AuthService} from "../services/auth.service";

@NgModule({

  declarations: [
    MyApp,
    HomePage,
    IncidentsPage,
    EmployesPage,
    SingleEmployePage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    EmployeFormPage,
    SingleIncidentPage,
    IncidentFormPage,
    AuthPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IncidentsPage,
    EmployesPage,
    SingleEmployePage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    EmployeFormPage,
    SingleIncidentPage,
    IncidentFormPage,
    AuthPage

  ],
  providers: [
    AuthService,
    IncidentsService,
    EmployesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
