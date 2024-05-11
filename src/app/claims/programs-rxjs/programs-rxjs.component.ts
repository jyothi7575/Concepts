import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { LoaderService } from 'src/services/loader.service';
import { claims } from '../../../assets/jsons/claims';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-programs-rxjs',
  templateUrl: './programs-rxjs.component.html',
  styleUrls: ['./programs-rxjs.component.css']
})
export class ProgramsRxjsComponent {
  languageID: any;
  labels: any;
  data: Observable<string[]> | undefined;
  constructor(public apiService: ApiService, public loaderService: LoaderService, public router: Router) { }

  ngOnInit() {
    debugger
    this.languageID = this.apiService.languageID;
    this.labels = this.languageID == '1' ? claims.english : claims.french;
   this.data= this.apiService.getData();
  }
 


}
