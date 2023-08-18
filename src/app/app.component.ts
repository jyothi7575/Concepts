import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reloadRouterOutlet: any = false;

  constructor(public apiService: ApiService, public loaderService: LoaderService) { }

  changeLanguage() {
    this.loaderService.showSpinner = true;
    this.reloadRouterOutlet = true;
    setTimeout(() => {
      this.loaderService.showSpinner = false;
      this.reloadRouterOutlet = false;
    }, 500);
  }

}
