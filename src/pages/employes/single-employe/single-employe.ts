import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {Employes} from "../../../models/Employes";
import {EmployesService} from "../../../services/employes.service";



@Component({
  selector: 'page-single-employe',
  templateUrl: 'single-employe.html'
})
export class SingleEmployePage implements OnInit{
  index : number;
  employes: Employes;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public employesService: EmployesService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.employes = this.employesService.employesList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
