import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public loaderService: LoaderService, public apiService: ApiService, public router: Router) { }

  logout() {
    this.loaderService.showSpinner = true;
    sessionStorage.clear();
    this.loaderService.isLogin = 'no';
    sessionStorage.setItem("isLogin", "no");
    this.router.navigate(['/Login']);
  }
  changeLanguageID(even: any) {
    this.loaderService.showSpinner = true;
    this.LanguageID = even.target.value;
    sessionStorage.setItem('LanguageID', this.LanguageID);
    location.reload();
    this.loaderService.showSpinner = false;
  }

}
