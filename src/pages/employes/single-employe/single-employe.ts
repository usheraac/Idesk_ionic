import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Employes} from "../../../models/Employes";
import {EmployesService} from "../../../services/employes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'page-single-employe',
  templateUrl: 'single-employe.html'
})
export class SingleEmployePage implements OnInit{
  index : number;
  employes: Employes;
  employeForm:FormGroup;


  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private employesService: EmployesService,
              private navCtrl: NavController,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.employes = this.employesService.employesList[this.index];
    this.initForm();
  }

  initForm(){
    this.employeForm = this.formBuilder.group({
      ID: ['', Validators.required],
      Nom: ['', Validators.required],
      Prenom:['',Validators.required],
      Age:['',Validators.required],
      Departement:['',Validators.required],
      Fonction:['',Validators.required],
      Telephone:['',Validators.required],
      Email:['',Validators.required]

    });
  }

  onSubmitForm(){
    let newEmploye = new Employes(this.employeForm.get('ID').value,
      this.employeForm.get('Nom').value,
      this.employeForm.get('Prenom').value,
      this.employeForm.get('Age').value,
      this.employeForm.get('Departement').value,
      this.employeForm.get('Fonction').value,
      this.employeForm.get('Telephone').value,
      this.employeForm.get('Email').value
    );
    this.employesService.addEmploye(newEmploye);
    this.navCtrl.pop();
  }

  onCancelEmployes(){
    // @ts-ignore
    this.navCtrl.pop(SingleEmployePage );

  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
