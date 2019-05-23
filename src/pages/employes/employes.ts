import { Component } from '@angular/core';
import { ModalController, MenuController, NavController} from 'ionic-angular';
import {SingleEmployePage} from "./single-employe/single-employe";
import {EmployesService} from "../../services/employes.service";
import {Employes} from "../../models/Employes";
import {EmployeFormPage} from "../employe-form/employe-form";

/**
 * Generated class for the EmployesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employes',
  templateUrl: 'employes.html'
})
export class EmployesPage {

  employesList : Employes[];  // creation  d'une lise d'employe

  constructor(private modalCtrl : ModalController,
              private employesService: EmployesService,
              private menuCtrl: MenuController,
              private navCtrl:NavController) {
  }


  // récuperation de la liste des employés dans le service quand la page employé devient active
  ionViewWillEnter(){
    this.employesList = this.employesService.employesList.slice();
  }


  //afficher un employe sous forme de modal
  onLoadEmployes(index: number) {
    let modal = this.modalCtrl.create(SingleEmployePage, {index : index});
    modal.present();
  }

  //modifier l'état un employe
  onModifyEmployes() {

  }

  //supprimer un employe
  onDeleteEmployes() {

  }

  //creer un nouvel Employe
  onCreateEmploye(){
    this.navCtrl.push(EmployeFormPage);

  }

  onToggleMenu() {

    this.menuCtrl.open();

  }
}
