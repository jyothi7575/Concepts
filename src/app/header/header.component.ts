import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public loaderService: LoaderService, public router: Router) { }

  logout() {
    this.loaderService.showSpinner = true;
    sessionStorage.clear();
    this.loaderService.isLogin = 'no';
    sessionStorage.setItem("isLogin", "no");
    this.router.navigate(['/Login']);
  }

}
