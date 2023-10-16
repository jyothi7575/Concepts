import { Component } from '@angular/core';
import { claims } from '../../../assets/jsons/claims';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-claims-raised',
  templateUrl: './claims-raised.component.html',
  styleUrls: ['./claims-raised.component.css']
})
export class ClaimsRaisedComponent {
  labels: any;
  languageID: any;
  data:any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
    this.getpatientData();
  }

  async getpatientData() {
    const res = await this.apiService.commonGetCall(
      'EBM/GetInsuranceClaimsDetails'
    );
    this.data=res.data
  }
 
  showcet(data:any){
    window.open(data);
  }
}
