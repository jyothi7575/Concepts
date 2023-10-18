import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { login } from '../../assets/jsons/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  labels: any;
  languageID: any;
  pin: any;
  username: any;
  password: any;
  result: any;
  showPopup:any;
  messageID:any;
  typeofPopUp:any;
  typeOfPopup:any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    this.labels = this.apiService.languageID == '1' ? login.english : login.french;
    this.languageID = this.apiService.languageID;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaderService.showSpinner = false;
    }, 500);
  }

  async login() {
    debugger;
 //   this.loaderService.showSpinner = true;
    if (this.pin == null ||this.pin== undefined) {
      this.typeOfPopup = 2;
      this.messageID = 2;
      this.showPopup = true;

    }
    if (this.username == null || this.password == undefined) {
      this.typeOfPopup = 2;
      this.messageID = 3;
      this.showPopup = true;
    }
    if (this.username && this.password && this.pin) {

      const res = await this.apiService.commonGetCall(`EBM/GetInsuranceCompanyLogin?UserName=${this.username}&Password=${this.password}&LanguageID=${this.languageID}&Pinno=${this.pin}`);
      this.result = res;
      debugger;
      console.log('res' + this.result)
      if (this.result.data.length != '0') {
        this.loaderService.isLogin = 'yes';
        sessionStorage.setItem("isLogin", "yes");
        sessionStorage.setItem('temp', '1');
        sessionStorage.setItem('user', this.result.data[0].companyName)
        sessionStorage.setItem('roleid', '10');
        sessionStorage.setItem('Pinno', this.pin);
        sessionStorage.setItem('pincode', this.result.data[0].pincode);
        sessionStorage.setItem('Password', this.password);
        sessionStorage.setItem('temp', '1');
        sessionStorage.setItem('downloadMasterID', this.result.data[0].downloadMasterID)
        this.router.navigate(['/Dashboard']);

      }
      else{
        this.typeOfPopup = 2;
        this.messageID = 4;
        this.showPopup = true;
        this.pin = "";
        this.password = ""; 
        this.username ="";
      }
    }
  }

  languageChange(event: any) {
    if (event.target.value == '6') {
      this.apiService.languageID = '6';
      sessionStorage.setItem("languageID", "6");
      this.labels = login.french;
    }
    else {
      this.apiService.languageID = '1';
      sessionStorage.setItem("languageID", "1");
      this.labels = login.english;
    }
    this.languageID = this.apiService.languageID;
  }

}
