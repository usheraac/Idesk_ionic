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

  employesList : Employes[];

  constructor(private modalCtrl : ModalController,
              private employesService: EmployesService,
              private menuCtrl: MenuController,
              private navCtrl:NavController) {
  }

  ionViewWillEnter(){
    this.employesList = this.employesService.employesList.slice();
  }

  // onLoadSingleEmploye (name: string){
  //   this.navCtrl.push(SingleEmployePage,{singleEmployeName: name});
  // }

  onLoadEmployes(index: number) {
    let modal = this.modalCtrl.create(SingleEmployePage, {index : index});
    modal.present();
  }

  onModifyEmployes() {

  }

  onDeleteEmployes() {

  }

  onCreateEmploye(){
    this.navCtrl.push(EmployeFormPage);

  }

  onToggleMenu() {

    this.menuCtrl.open();

  }
}
