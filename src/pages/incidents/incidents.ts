import {Component} from '@angular/core';
import {MenuController} from "ionic-angular";

@Component({
  selector:'page-incidents',
  templateUrl: 'incidents.html'
})

export class  IncidentsPage{

  constructor(private menuCtrl : MenuController ) {}

  onToggleMenu() {

    this.menuCtrl.open();

  }
}
