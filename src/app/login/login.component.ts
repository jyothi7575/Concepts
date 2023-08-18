import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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

}
