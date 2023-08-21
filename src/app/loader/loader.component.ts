import { Component } from '@angular/core';
import { login } from '../../assets/jsons/login';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  labels: any;

  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    this.labels = this.apiService.languageID == '1' ? login.english : login.french;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaderService.showSpinner = false;
    }, 500);
  }

}
