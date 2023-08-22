import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { sidebar } from '../../assets/jsons/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  labels: any;

  constructor(public loaderService: LoaderService, public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.labels = this.apiService.languageID == '1' ? sidebar.english : sidebar.french;
  }

  navigate(url: any) {
    this.router.navigate([`/${url}`]);
  }

}
