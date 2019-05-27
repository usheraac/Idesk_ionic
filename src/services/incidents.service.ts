import {Incidents} from "../models/Incidents";
import {Subject} from "rxjs";
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';


export class IncidentsService{

  // creation du  Subject qui émettra la liste des  incidents
  incidents$ = new Subject <Incidents[]>();

  incidentList: Incidents[] =[
    {
      Identifiant: 1,
      Objet:"probleme d'impression",
      Description:"l'imprimante ne fonctionne pas",
      Service:'ressource humaine',
      Date:'',
      Date_target:'',
      Status:'',
      Discussion:'pas en resolue',
      Employe:'',
    },
    {
      Identifiant: 2,
      Objet:"probleme de reseau",
      Description:"pas de connexion internet depuis ce matin",
      Service:"toute l'entreprise",
      Date:'',
      Date_target:'',
      Status:'en attente',
      Discussion:'il est possible que la fibre optique soit cassé',
      Employe:''
    }

    ];

  addIncident(incident:Incidents){
    this.incidentList.push(incident);
    this.emitIncidents();
  }

  removeIncidents(index: number){
    this.incidentList.splice(index,1)
  }

  //Emettre le subject
  emitIncidents(){
    this.incidents$.next(this.incidentList.slice());
  }

  saveData(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('incidents').set(this.incidentList).then(
        (data:DataSnapshot) =>{
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('incidents').once('value').then(
        (data:DataSnapshot) =>{
          this.incidentList = data.val();
          this.emitIncidents();
          resolve('Données récupérées avec succès !');
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


}
