import { Component } from '@angular/core';
import {IncidentsPage} from "../incidents/incidents";
import {EmployesPage} from "../employes/employes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employesPage = EmployesPage;
  incidentspage = IncidentsPage;

}
