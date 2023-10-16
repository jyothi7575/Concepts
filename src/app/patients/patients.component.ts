import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { patient } from '../../assets/jsons/patient';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {
  labels: any;
  languageID: any;
  dataList: any;
  data: any;
  constructor(
    public apiService: ApiService,
    public loaderService: LoaderService,
    public router: Router
  ) {}

  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? patient.english : patient.french;
    this.getpatientData();
  }

  async getpatientData() {
    const res = await this.apiService.commonGetCall(
      'EBM/GetPatientRegistrationDetails'
    );
  
    this.data = res.data.filter(
      (x: { downloadType: any }) => x.downloadType == 5
    );
    console.log(this.data);
  }

  routerlink() {
    this.router.navigate(['/PatientRegistartion']);
  }
}
