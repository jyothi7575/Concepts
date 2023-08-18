import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hostURL: string;
  controller: string = sessionStorage.getItem('controller') || "EBM";

  constructor() {
    this.hostURL = environment.host;
  }

  public async commonPostCall(endPoint: string, data: any) {
    return await axios.post(this.hostURL + this.controller + endPoint, data);
  }

  public async commonGetCall(endPoint: string) {
    return await axios.get(this.hostURL + this.controller + endPoint);
  }

  public async commonGetMasters(endPoint: string) {
    return await axios.get(this.hostURL + this.controller + endPoint);
  }
}
