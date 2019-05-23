import {Incidents} from "../models/Incidents";


export class IncidentsService{
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
  }
}
