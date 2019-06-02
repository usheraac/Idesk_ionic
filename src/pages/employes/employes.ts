import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  ModalController,
  MenuController,
  NavController,
  LoadingController,
  ToastController,
  AlertController
} from 'ionic-angular';
import {SingleEmployePage} from "./single-employe/single-employe";
import {EmployesService} from "../../services/employes.service";
import {Employes} from "../../models/Employes";
import {EmployeFormPage} from "../employe-form/employe-form";
import {Subscription} from "rxjs/Subscription";


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
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
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


  //afficher et  modifier un employé sous forme de modal
  onModifyEmployes(index: number) {
    let modal = this.modalCtrl.create(SingleEmployePage, {index : index});
    modal.present();
  }

  //supprimer un employe
  alertDeleteEmployes(index:number) {
    let alert = this.alertCtrl.create({
      title:'Ëtes-vous certain de vouloir continuer?',
      subTitle:"Cette action supprimera l'employé !",
      buttons: [
        {
          text:'Annuler',
          role:'Cancel'
        },
        {
          text:'Confirmer',
          handler: () => this.onDeleteEmployes(index)
        }
      ]
    });
    alert.present();



  }

  onDeleteEmployes(index:number){
    this.employesService.removeEmploye(index);
    this.navCtrl.push(EmployesPage);
  }

  //creer un nouvel Employe
  onCreateEmploye(){
    this.navCtrl.push(EmployeFormPage);

  }

  onToggleMenu() {

    this.menuCtrl.open();

  }



  //sauvegarde des données sur firebase
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
