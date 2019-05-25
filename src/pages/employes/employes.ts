import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, MenuController, NavController, LoadingController, ToastController} from 'ionic-angular';
import {SingleEmployePage} from "./single-employe/single-employe";
import {EmployesService} from "../../services/employes.service";
import {Employes} from "../../models/Employes";
import {EmployeFormPage} from "../employe-form/employe-form";
import {Subscription} from "rxjs";


@Component({
  selector: 'page-employes',
  templateUrl: 'employes.html'
})
export class EmployesPage implements OnInit, OnDestroy {

  employesList : Employes[];  // creation  d'une lise d'employe
  employesSubscription: Subscription;

  constructor(private modalCtrl : ModalController,
              private employesService: EmployesService,
              private menuCtrl: MenuController,
              private navCtrl:NavController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {
  }


  // récuperation de la liste des employés dans le service quand la page employé devient active
  ngOnInit(){
    this.employesSubscription = this.employesService.employes$.subscribe(
      (employes: Employes[])=>{
        this.employesList = employes.slice();
      }
    );
    this.employesService.emitEmployes();
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

  //sauvergade des données sur firebase
  onSaveList(){
    let loader = this.loadingCtrl.create({
      content:'Sauvergade en cours'
    });
    loader.present();  //affichage du loader
    this.employesService.saveData().then(  //appel du service et de la sauvegarde
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
          position:'bottom'
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
    this.employesService.retrieveData().then(  //appel du service et de la sauvegarde
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
          position:'bottom'
        }).present();  //affichage du message d'erreur
      }
    );
  }
  ngOnDestroy(){
    this.employesSubscription.unsubscribe();
  }

}
