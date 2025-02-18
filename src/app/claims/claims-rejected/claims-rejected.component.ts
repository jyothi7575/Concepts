import { Component } from '@angular/core';
import { claims } from '../../../assets/jsons/claims';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-claims-rejected',
  templateUrl: './claims-rejected.component.html',
  styleUrls: ['./claims-rejected.component.css']
})
export class ClaimsRejectedComponent {
  labels: any;
  languageID: any;

  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
    //this.revert('Hello');
  }
  data = [
    {
      "voiladocPID": "123",
      "name": "EBM",
      "phoneNumber": "98754321",
      "emailID": "ebi@gmail.com",
      'insuranceCompany': "EBI",
      "policyNumber": "123",
      'subscriptionNumber': "321",
      "claimAmount": "20000",
      "status": "Rejected",
      "reason":"Document verification failed",
      "attachments": "https://maroc.voiladoc.org//VoiladocTestAPI/PatientDocuments/21278/SoapNotes/20230710120845images.jpg"
    }
  ]
  showcet(data:any){
    window.open(data);
  }

}




