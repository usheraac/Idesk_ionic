import {Component} from '@angular/core';
import {MenuController, ModalController, NavController} from "ionic-angular";
import {Incidents} from "../../models/Incidents";
import {IncidentsService} from "../../services/incidents.service";
import {IncidentFormPage} from "../incident-form/incident-form";
import {SingleIncidentPage} from "./single-incident/single-incident";



@Component({
  selector:'page-incidents',
  templateUrl: 'incidents.html'
})

export class  IncidentsPage{

   incidentList : Incidents[];  // creation  d'une lise d'incidents

  constructor(private modalCtrl: ModalController,
              private incidentsService: IncidentsService,
              private menuCtrl: MenuController,
              private navCtrl: NavController) {

  }

  // récuperation de la liste des incidents dans le service quand la page incident devient active
  ionViewWillEnter(){
    this.incidentList = this.incidentsService.incidentList.slice();
  }

  //afficher un incident sous forme de modal
  onLoadIncidents(index: number) {
    let modal = this.modalCtrl.create(SingleIncidentPage, {index : index});
    modal.present();
  }

  //modifier l'état un incident
  onModifyIncidents() {

  }

  //supprimer un incident
  onDeleteIncidents() {

  }

  //creer un nouvel incident
  onCreateIncident(){
    this.navCtrl.push(IncidentFormPage);

  }


  //methode pour la navigation par le menu
  onToggleMenu() {

    this.menuCtrl.open();

  }
}
