import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
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
              public incidentsService: IncidentsService,
              public navCtrl: NavController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.incidents = this.incidentsService.incidentList[this.index];
  }

  onDeleteIncidents(){
    // @ts-ignore
    this.navCtrl.pop(SingleIncidentPage);

  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }


}
