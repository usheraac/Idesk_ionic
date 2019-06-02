import {Component,OnInit}from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployesService} from "../../services/employes.service";
import {Employes} from "../../models/Employes";
import {NavController} from "ionic-angular";

@Component({
  selector:'page-employe-form',
  templateUrl:'./employe-form.html'
})

export class EmployeFormPage implements OnInit{
  employeForm:FormGroup;

  constructor( private formBuilder: FormBuilder,
               private employeService: EmployesService,
               private navCtrl:NavController) {}

  ngOnInit(){
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

  // soumission du formulaire
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
    this.employeService.addEmploye(newEmploye);
    this.navCtrl.pop();
  }

}
