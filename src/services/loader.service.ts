import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showSpinner: any = false;

  isLogin: any = sessionStorage.getItem("isLogin") || 'no';

  userName: any = sessionStorage.getItem("userName") || 'EBM';

  menu: any = sessionStorage.getItem("menu") || 'Dashboard';


}
