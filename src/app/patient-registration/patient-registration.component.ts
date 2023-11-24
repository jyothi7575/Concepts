import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patient } from '../../assets/jsons/patient';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent {
  patientForms: FormGroup | any;
  labels: any;
  languageID: any;
  selfpay: any;
  noPay: any;
  downloadMasterID: any;
  formSubmitted = false;
  constructor(
    public apiService: ApiService,
    public loaderService: LoaderService,
    public router: Router
  ) {
   this.patientForms = new FormGroup({
      firstName: new FormControl('',  [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      dateOfBirth: new FormControl('',[Validators.required]),
      gender: new FormControl('',Validators.required),
      mobileNumber: new FormControl('',  [Validators.required, Validators.minLength(1), Validators.maxLength(9)]),
      email: new FormControl('', [Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      subscriptionNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
      policyNumber: new FormControl('',  [Validators.required, Validators.minLength(3)]),
      policyExpiryDate: new FormControl(''),
      insuranceCompanyName: new FormControl(''),
      identityNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
      InsuranceID:new FormControl(sessionStorage.getItem('InsuranceID'), )
    });
  }
  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? patient.english : patient.french;
  //  this.clearForm();
    this.downloadMasterID = sessionStorage.getItem('downloadMasterID');
  }
  async clearForm() {
    this.patientForms = new FormGroup({
      firstName: new FormControl('',  [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('',Validators.required),
      gender: new FormControl(''),
      mobileNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subscriptionNumber: new FormControl('', Validators.required),
      policyNumber: new FormControl('', Validators.required),
      policyExpiryDate: new FormControl(''),
      insuranceCompanyName: new FormControl(''),
      identityNumber: new FormControl('', Validators.required),
      InsuranceID:new FormControl(sessionStorage.getItem('InsuranceID'), )///api pending 
    });
  }

  insertPatient() {
    debugger;
    this.formSubmitted = true;
    console.log("details"+this.patientForms.value)
    this.apiService.commonPostCall("EBM/CreateAccountIndividual", this.patientForms.value);
  }
  routerLink() {
    this.router.navigate(['/Patients']);
  }


  
}
