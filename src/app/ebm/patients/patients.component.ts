import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { patient } from '../../../assets/jsons/patient';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  labels: any;
  languageID: any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }
  ngOnInit() {
    this.languageID = sessionStorage.getItem('languageID');
    this.labels = this.languageID == '1' ? patient.english : patient.french;
  }

  data = [{
    "name": "hari",
    "phone": "987543321",
    "email": "hari@gamil.com",
    "gender": "female",
    "address": "moracco"

  }]
}
