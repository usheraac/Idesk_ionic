import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {Incidents} from "../../../models/Incidents";
import {IncidentsService} from "../../../services/incidents.service";


@Component({
  selector: 'page-single-incident',
  templateUrl: 'single-incident.html',
})
export class SingleIncidentPage implements OnInit{
  index : number;
  incidents : Incidents;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public incidentsService: IncidentsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.incidents = this.incidentsService.incidentList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }


}
