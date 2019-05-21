import { Employes} from "../models/Employes";


export class EmployesService {
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

  addEmploye(employe:Employes) {
    this.employesList.push(employe);
  }

}
