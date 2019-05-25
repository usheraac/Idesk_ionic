import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Employes} from "../../../models/Employes";
import {EmployesService} from "../../../services/employes.service";



@Component({
  selector: 'page-single-employe',
  templateUrl: 'single-employe.html'
})
export class SingleEmployePage implements OnInit{
  index : number;
  employes: Employes;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private employesService: EmployesService,
              private navCtrl: NavController) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.employes = this.employesService.employesList[this.index];
  }

  onDeleteEmployes(){
    // @ts-ignore
    this.navCtrl.pop(SingleEmployePage );

  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
