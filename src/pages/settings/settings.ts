import {Component} from '@angular/core';
import {AlertController, MenuController} from "ionic-angular";

@Component({
  selector: 'page-settings',
  templateUrl:'settings.html'
})

export class SettingsPage {

  constructor (private alertCtrl: AlertController,
               private menuCtrl: MenuController ) {

  }

  onToggleEmployes(){
  let alert = this.alertCtrl.create({
    title: 'Êtes-vous certain de vouloir continuer?',
    subTitle: 'Cette action supprimera  cette employé!',
    buttons: [
      {
      text:'Annuler',
      role:'cancel'
      },
      {
        text: 'Confimer',
        handler: () => console.log('Confirmé!')
      }
    ]
  });

  alert.present();
  }

  onCreateEmploye(){

  }

  onCreateIncident(){

  }



  onToggleMenu() {

    this.menuCtrl.open();

  }

}
