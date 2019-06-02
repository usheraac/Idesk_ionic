import {Component} from '@angular/core';
import {MenuController, NavController} from "ionic-angular";
import {EmployeFormPage} from "../employe-form/employe-form";
import {IncidentFormPage} from "../incident-form/incident-form";

@Component({
  selector: 'page-settings',
  templateUrl:'settings.html'
})

export class SettingsPage {

  constructor (private menuCtrl: MenuController,
               private navCtrl: NavController) {

  }

  // placer la page EmployeFormPage dans le stack de page
  onCreateEmploye(){
    this.navCtrl.push(EmployeFormPage);
  }

  onCreateIncident(){
    this.navCtrl.push(IncidentFormPage);
  }



  onToggleMenu() {

    this.menuCtrl.open();

  }

}
