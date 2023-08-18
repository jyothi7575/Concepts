import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { login } from '../../assets/jsons/login';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() ChangeLanguage = new EventEmitter();

  constructor(public loaderService: LoaderService, public apiService: ApiService, public router: Router) { }

  labels: any;

  ngOnInit() {
    this.labels = this.apiService.languageID == '1' ? login.english : login.french;
  }

  logout() {
    this.loaderService.showSpinner = true;
    sessionStorage.clear();
    this.loaderService.isLogin = 'no';
    sessionStorage.setItem("isLogin", "no");
    this.router.navigate(['/Login']);
  }

  languageChange(event: any) {
    if (event.target.checked) {
      this.apiService.languageID = '6';
      sessionStorage.setItem("languageID", "6");
      this.labels = login.french;
    }
    else {
      this.apiService.languageID = '1';
      sessionStorage.setItem("languageID", "1");
      this.labels = login.english;
    }
    this.ChangeLanguage.emit();
  }
}
