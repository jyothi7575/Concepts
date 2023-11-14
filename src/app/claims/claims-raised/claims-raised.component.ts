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
  data1:any=[];
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
    this.getpatientData();
    // this.islciams();
    // this.reqClaim();
  }

  async getpatientData() {
    debugger;
    const res = await this.apiService.commonGetCall(
      'EBM/GetInsuranceClaimsDetails'
    );
    this.data=res.data
    for(let i=0;i<=this.data.length; i++){
     var entity={
       'voilaDocId': this.data[i].patientID,
        "classeurId": this.data[i].workbookID,//workbooKIds
        "dossierId": this.data[i].folderID//folderID
      }
      const res1 = await this.apiService.commonPostCall1(
        'RequestClaim',entity
      );
      const res = await this.apiService.commonPostCall1(
        'IsClaimAvailable',entity
      );
     
      let entity1={
        'patientID': this.data[i].patientID,
        "workbookID": this.data[i].workbookID,//workbooKIds
        "folderID": this.data[i].folderID,//folderID
        "emailID":this.data[i].emailID,
        "mobileNumber":this.data[i].mobileNumber,
        "policyNumber":this.data[i].policyNumber,
        "amount":res1.data.amountRefund,
        "status":res.data?'Claim':'Processing'
      }
            console.log("print",entity1)
            this.data1.push(entity1)
            console.log("printdata",  this.data1)
    }
  }

  async islciams(id:any, folderID:any,workbookID:any){
   var d= {
      "voilaDocId": id,
    "classeurId": folderID,
    "dossierId": workbookID
    }
    const res = await this.apiService.commonPostCall1(
      'IsClaimAvailable',d
    );
   
    this.data=res.data
  }
 

  async reqClaim(){
    debugger;
    var d= {
       "voilaDocId": "21484",
     "classeurId": 294046,
     "dossierId": 305624
     }
     const res1 = await this.apiService.commonPostCall1(
       'RequestClaim',d
     );
     console.log("data"+res1)
     this.data1=res1.data
     console.log("data"+this.data1.amountRefund)
   }
  
  showcet(data:any){
    window.open(data);
  }


}
