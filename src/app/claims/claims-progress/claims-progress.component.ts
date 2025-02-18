import { Component, Input } from '@angular/core';
import { claims } from '../../../assets/jsons/claims';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-claims-progress',
  templateUrl: './claims-progress.component.html',
  styleUrls: ['./claims-progress.component.css']
})
export class ClaimsProgressComponent {
  labels: any;
  languageID: any;
  datas=[1,2,3]
  parentDef="ParentName";
  @Input() senddata:any | undefined;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    debugger
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
    //window.alert(this.senddata);
  }
  data = [
    // {
    //   "voiladocPID": "123",
    //   "name": "EBM",
    //   "phoneNumber": "98754321",
    //   "emailID": "ebi@gmail.com",
    //   'insuranceCompany': "EBI",
    //   "policyNumber": "123",
    //   'subscriptionNumber': "321",
    //   "claimAmount": "20000",
    //   "status": "Pending",
    //   "attachments": "https://maroc.voiladoc.org//VoiladocTestAPI/PatientDocuments/21278/SoapNotes/20230710120845images.jpg"
    // }
  ]
  showcet(data:any){
    window.open(data);
  }
  emitdata(event:any){
    
    window.alert(event);
  }
}
