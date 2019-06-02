import { Employes} from "../models/Employes";
import {Subject} from "rxjs";
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';

export class EmployesService {

  // creation du  Subject qui émettra la liste des employes
  employes$ = new Subject <Employes[]>();

  employesList : Employes[] = [
    {
      Identifiant: 14299,
      Nom: 'isaac',
      Prenom:'isaac',
      Age:18,
      Departement:'info',
      Fonction:'support',
      Telephone:560044,
      Email:'djokoisaac@gmai.com',


    },
    {
      Identifiant: 14200,
      Nom: 'usher',
      Prenom:'isaac',
      Age:30,
      Departement:'comptable',
      Fonction:'economique',
      Telephone:4005,
      Email:'usher@gmai.com',


    }
  ];

  //ajouter un employe à la liste
  addEmploye(employe:Employes) {
    this.employesList.push(employe);
    this.emitEmployes();
  }

  removeEmploye(index: number){
    this.employesList.splice(index, 1);
  }

  //Emettre le subject
  emitEmployes(){
    this.employes$.next(this.employesList.slice()); //la methode slice permet de passer une copie de employelist
  }

  //sauverge de données employé dans le service
  saveData(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('employes').set(this.employesList).then(
        (data:DataSnapshot) =>{
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  //récuperation de la données employé dans le service
  retrieveData(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('employes').once('value').then(
        (data:DataSnapshot) =>{
          this.employesList = data.val();
          this.emitEmployes();
          resolve('Données récupérées avec succès !');
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
