import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  LanguageID: any;
  constructor(public loaderService: LoaderService, public router: Router) { }
  ngOnInit(): void {
    this.LanguageID = 1;//sessionStorage.getItem('LanguageID');
  }
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
