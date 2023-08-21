import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patient } from '../../../assets/jsons/patient';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  patientForms: FormGroup | any
  labels: any;
  languageID: any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }
  ngOnInit() {
    this.languageID = sessionStorage.getItem('languageID');
    this.labels = this.languageID == '1' ? patient.english : patient.french;
    this.clearForm();
  }
  async clearForm() {
    this.patientForms = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("",),
      gender: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      identityNumber: new FormControl("",),
      insuranceCompanyName: new FormControl("",),
      subscriptionNumber: new FormControl("", Validators.required),
      policyNumber: new FormControl("", Validators.required),
      policyExpiryDate: new FormControl("", Validators.required)

    });
  }

}
