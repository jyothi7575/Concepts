import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hostURL: string;

  controller: string = sessionStorage.getItem('controller') || "EBM"; 
  controller1: string = sessionStorage.getItem('controller1') || "Claims"; 

  languageID: string = sessionStorage.getItem('languageID') || "1";

  constructor() {
    this.hostURL = environment.host;
  }

  public async commonPostCall(endPoint: string, data: any) {
    return await axios.post(this.hostURL  + endPoint, data);
  }

  public async commonGetCall(endPoint: string) {
    return await axios.get(this.hostURL + endPoint);
  }

  public async commonGetMasters(endPoint: string) {
    return await axios.get(this.hostURL + this.controller + endPoint);
  }
}
