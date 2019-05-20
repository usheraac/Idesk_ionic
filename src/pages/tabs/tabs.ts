import { Component } from '@angular/core';
import {EmployesPage} from "../employes/employes";
import {IncidentsPage} from "../incidents/incidents";
import {SettingsPage} from "../settings/settings";

@Component({
  selector:'page-tabs',
  templateUrl:'tabs.html'
})

export class TabsPage{
  employesPage = EmployesPage;
  incidentsPage = IncidentsPage;
  settingsPage = SettingsPage;
}

