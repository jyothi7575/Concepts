import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { patient } from '../../assets/jsons/patient';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  languageID: any;
  labels: any;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }
  ngOnInit(): void {
    this.loaderService.showSpinner = true;
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? patient.english : patient.french;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaderService.showSpinner = false;
    }, 500);
  }

}
