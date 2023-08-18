import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public loaderService: LoaderService, public apiService: ApiService, public router: Router) { }

  navigate(url: any) {
    this.router.navigate([`/${this.apiService.controller}/${url}`]);
  }

}
