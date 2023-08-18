import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(public router: Router, public loaderService: LoaderService) { }

  backToHome() {
    this.loaderService.showSpinner = true;
    sessionStorage.clear();
    this.loaderService.isLogin = 'no';
    sessionStorage.setItem("isLogin", "no");
    this.router.navigate(['/Login']);
  }
}
