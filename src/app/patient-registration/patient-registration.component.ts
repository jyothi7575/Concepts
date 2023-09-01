import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patient } from '../../assets/jsons/patient';
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
  selfpay: any;
  noPay: any
  downloadMasterID: any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }
  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? patient.english : patient.french;
    this.clearForm();
    this.downloadMasterID = sessionStorage.getItem('downloadMasterID')
  }
  async clearForm() {
    this.patientForms = new FormGroup({
      PatientName: new FormControl("", Validators.required),
      LastName: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("",),
      gender: new FormControl("", Validators.required),
      MobileNumber: new FormControl("", Validators.required),
      EmailID: new FormControl("", Validators.required),
      subscriptionNumber: new FormControl("", Validators.required),
      policyNumber: new FormControl("", Validators.required),
      policyExpiryDate: new FormControl("", Validators.required),
      insuranceCompanyName: new FormControl(""),
      identityNumber:new FormControl(""),
      Password: new FormControl(""),
      OTP: new FormControl(""),
      AdultBit: new FormControl(""),
      PatientID: new FormControl(""),
      DownloadType: new FormControl(""),
      CountryCodeNew: new FormControl(""),
      CountryID: new FormControl(""),
      PromoCodeID: new FormControl(""),
      PromoCode: new FormControl("")
    });
  }

  insertPatient() {
    /* PatientName = PatientRegistrationEntity.PatientName,
                    MobileNumber = PatientRegistrationEntity.MobileNumber,
                    EmailID = PatientRegistrationEntity.EmailID,
                    Password = PatientRegistrationEntity.Password,
                    OTP = PatientRegistrationEntity.OTP,
                    AdultBit = PatientRegistrationEntity.AdultBit,
                    RelationshipTypeID = PatientRegistrationEntity.RelationshipTypeID,
                    PatientID = PatientRegistrationEntity.PatientID,
                    LastName = PatientRegistrationEntity.LastName,
                    DownloadType = PatientRegistrationEntity.DownloadType,
                    CountryCodeNew = PatientRegistrationEntity.CountryCodeNew,
                    CountryID = PatientRegistrationEntity.CountryID,
                    PromoCodeID = PatientRegistrationEntity.PromoCodeID,
                    PromoCode = PatientRegistrationEntity.PromoCode */
  }
  routerLink() {
    this.router.navigate(['/Patients']);
  }
}
