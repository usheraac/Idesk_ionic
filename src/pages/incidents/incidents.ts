import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  ToastController
} from "ionic-angular";
import {Incidents} from "../../models/Incidents";
import {IncidentsService} from "../../services/incidents.service";
import {IncidentFormPage} from "../incident-form/incident-form";
import {SingleIncidentPage} from "./single-incident/single-incident";
import {Subscription} from "rxjs";




@Component({
  selector:'page-incidents',
  templateUrl: 'incidents.html'
})

export class  IncidentsPage implements OnInit, OnDestroy{

   incidentList : Incidents[];  // creation  d'une lise d'incidents
   incidentsSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private incidentsService: IncidentsService,
              private menuCtrl: MenuController,
              private navCtrl: NavController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

  }

  // récuperation de la liste des incidents dans le service quand la page incident devient active
  ngOnInit(){
    this.incidentsSubscription = this.incidentsService.incidents$.subscribe(
      (incidents: Incidents[])=>{
        this.incidentList = incidents.slice();
      }
    );
    this.incidentsService.emitIncidents();
  }

  //afficher et  modifier un incident sous forme de modal
  onModifyIncidents(index: number) {
    let modal = this.modalCtrl.create(SingleIncidentPage, {index : index});
    modal.present();
  }




  //supprimer un incident

  alertDeleteIncidents(index:number) {
    let alert = this.alertCtrl.create({
      title:'Ëtes-vous certain de vouloir continuer?',
      subTitle:"Cette action supprimera l'incident",
      buttons: [
        {
          text:'Annuler',
          role:'Cancel'
        },
        {
          text:'Confirmer',
          handler: () => this.onDeleteIncidents(index)
        }
      ]
    });
    alert.present();

  }

  onDeleteIncidents(index:number) {
    this.incidentsService.removeIncidents(index);
    this.navCtrl.push(IncidentsPage);

  }

  //creer un nouvel incident
  onCreateIncident(){
    this.navCtrl.push(IncidentFormPage);

  }


  //methode pour la navigation par le menu
  onToggleMenu() {

    this.menuCtrl.open();

  }

  //sauvergade des données sur firebase
  onSaveList(){
    let loader = this.loadingCtrl.create({
      content:'Sauvergade en cours'
    });
    loader.present();  //affichage du loader
    this.incidentsService.saveData().then(  //appel du service et de la sauvegarde
      ()=>{
        loader.dismiss(); // retire le loader si la sauvegarde s'effectué
        this.toastCtrl.create({   //message toast pour confirmée la sauvegarde
          message:'Données Sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(       //si on a une erreur
      (error)=>{
        loader.dismiss() //retire le lodader
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();  //affichage du message d'erreur
      }
    );
  }


  //recuperer des données sur firebase
  onFetchList(){
    let loader = this.loadingCtrl.create({
      content:'Recupération en cours'
    });
    loader.present();  //affichage du loader
    this.incidentsService.retrieveData().then(  //appel du service et de la sauvegarde
      ()=>{
        loader.dismiss(); // retire le loader si la sauvegarde s'effectué
        this.toastCtrl.create({   //message toast pour confirmée la sauvegarde
          message:'Données Recupérées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(       //si on a une erreur
      (error)=>{
        loader.dismiss() //retire le lodader
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();  //affichage du message d'erreur
      }
    );
  }

  ngOnDestroy(){
    this.incidentsSubscription.unsubscribe();
  }
}
