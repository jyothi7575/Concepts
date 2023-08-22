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

  login() {
    this.loaderService.showSpinner = true;
    this.loaderService.isLogin = 'yes';
    sessionStorage.setItem("isLogin", "yes");
    this.router.navigate(['/EBM/Dashboard']);
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
