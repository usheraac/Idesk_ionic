import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IncidentsService} from "../../services/incidents.service";
import {NavController} from "ionic-angular";
import {Incidents} from "../../models/Incidents";


@Component({
  selector:'page-incident-form',
  templateUrl:'./incident-form.html'
})

export class IncidentFormPage implements OnInit{
  incidentForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private incidentService: IncidentsService,
              private navCtrl: NavController) {}


  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.incidentForm = this.formBuilder.group({
      ID: ['', Validators.required],
      Objet: ['', Validators.required],
      Description:['',Validators.required],
      Service:['',Validators.required],
      Date:['',Validators.required],
      Date_target:['',Validators.required],
      Status:['',Validators.required],
      Discussion:['',Validators.required],
      Employe:['',Validators.required]
    });
  }

  //soumission du formulaire
  onSubmitForm(){
    let newIncident = new Incidents(this.incidentForm.get('ID').value,
      this.incidentForm.get('Objet').value,
      this.incidentForm.get('Description').value,
      this.incidentForm.get('Service').value,
      this.incidentForm.get('Date').value,
      this.incidentForm.get('Date_target').value,
      this.incidentForm.get('Status').value,
      this.incidentForm.get('Discussion').value,
      this.incidentForm.get('Employe').value);

    this.incidentService.addIncident(newIncident);
    this.navCtrl.pop();
  }
}
