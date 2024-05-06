import { Component, EventEmitter, Input, Output } from '@angular/core';
import { claims } from '../../../assets/jsons/claims';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-claims-processed',
  templateUrl: './claims-processed.component.html',
  styleUrls: ['./claims-processed.component.css']
})
export class ClaimsProcessedComponent {
  labels: any;
  languageID: any;
  sum1:any;
@Input() parentDef:any | undefined;
@Output() senddata=new EventEmitter<Number>();
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    debugger
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
    this.senddata.emit(345);
  }
   sumArray() {
    // Use reduce to add all elements of the array together
    const sum = this.parentDef.reduce((total:any, current:any) => total + current, 0);
    this.sum1=sum;
    //this.senddata.emit(this.sum1);
    return sum;
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
      "status": "completed",
      "attachments": "https://maroc.voiladoc.org//VoiladocTestAPI/PatientDocuments/21278/SoapNotes/20230710120845images.jpg"
    }
  ]
  showcet(data: any) {
    window.open(data);
  }
}
