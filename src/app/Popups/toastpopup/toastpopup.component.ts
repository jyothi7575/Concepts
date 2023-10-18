import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '../../../assets/jsons/Messages';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-toastpopup',
  templateUrl: './toastpopup.component.html',
  styleUrls: ['./toastpopup.component.css'] 
})
export class ToastpopupComponent implements OnChanges {

  constructor(private toast: NgToastService,private toastrService: ToastrService,private apiService:ApiService) { }


  @Input() messageID: any;
  @Input() typeofPopUp: any;
  messageList: any;
  languageID: any;

  message: any;
  header: any;
  ngOnChanges(): void {
    debugger;
    this.languageID = this.apiService.languageID

    // this.LanguageService.getMessages().subscribe(data => {
      debugger
      var list = Messages.filter((x: { id: any; }) => x.id == this.messageID);

      if (this.languageID == 1) {
        this.header = list[0].headingEn
        this.message = list[0].MessageEn
      }
      else {
        this.header = list[0].headingFr
        this.message = list[0].MessageFr
      }


      if (this.typeofPopUp == 1) {
        console.log("Success");
        this.showSuccess()
      }
      else if (this.typeofPopUp == 2) {
        console.log("error");
        this.showError()
      }
      debugger
    // })
  }

  showSuccess() {
    // this.toast.success({ detail: this.header, summary: this.message });
    this.toastrService.success(
      this.message,
      this.header
    );

  }

  showError() {
    this.toastrService.error(this.message, this.header);
    // this.toast.error({ detail: this.header, summary: this.message });

  }

  showInfo() {
    this.toast.info({ detail: this.header, summary: this.message, sticky: true });
  }

  // showWarn() {
  //   this.toast.warn({detail:"WARN",summary:'Your Warn Message',duration:'5000'});
  // }

}
