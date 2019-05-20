import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployesPage } from './employes';

@NgModule({
  declarations: [
    EmployesPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployesPage),
  ],
})
export class EmployesPageModule {}
