import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hostURL: string;
  hostURL1:string;
  controller: string = sessionStorage.getItem('controller') || "EBM"; 
  controller1: string = sessionStorage.getItem('controller1') || "Claims"; 

  languageID: string = sessionStorage.getItem('languageID') || "1";
  private data: string[] = ['Apple', 'Banana', 'Orange'];

  getData(): Observable<string[]> {
    return of(this.data); // Simulating an asynchronous operation
  }
  constructor() {
    this.hostURL = environment.host;
    this.hostURL1="https://test.epega-sante.com/v1/VoilaDoc/"
  }

  public async commonPostCall(endPoint: string, data: any) {
    return await axios.post(this.hostURL  + endPoint, data);
  }

  public async commonPostCall1(endPoint: string, data: any) {
    return await axios.post(this.hostURL1  + endPoint, data);
  }

  public async commonGetCall(endPoint: string) {
    return await axios.get(this.hostURL + endPoint); 
   }

  public async commonGetMasters(endPoint: string) {
    return await axios.get(this.hostURL + endPoint);
  }
}
