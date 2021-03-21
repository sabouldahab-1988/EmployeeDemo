import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

export enum ConfirmModalOptions{
  YesNo=0,
  OkCancel=1
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.html',
  styleUrls: ['./confirm-modal.css']
})

export class ConfirmModal implements OnInit {

  public title:string;
  public messageContent:string;
  public confirmModalOptions:ConfirmModalOptions;
  public messageDescription:string;
  public messageWarning:string;
  public reasonRepsone:any={answer:'Yes',reason:null};
 
  constructor(public modal: NgbActiveModal,public toastr: ToastrService) { 

  }
  
  ngOnInit() {
  }
  
  setModalProperties(title:string,messageContent:string,confirmModalOptions:ConfirmModalOptions,includeReason:boolean=false,reasonRequired:boolean=false){
    this.title=title;
    this.messageContent=messageContent;
    this.confirmModalOptions=confirmModalOptions;
  }
  setModalPropertiesWithMessageDescription(title:string,messageContent:string,messageDescription:string,confirmModalOptions:ConfirmModalOptions,includeReason:boolean=false,reasonRequired:boolean=false){
    this.title=title;
    this.messageContent=messageContent;
    this.confirmModalOptions=confirmModalOptions;
    this.messageDescription=messageDescription;
  }

  setModalPropertiesWithMessageWarning(title:string,messageContent:string,messageDescription:string,messageWarning:string,confirmModalOptions:ConfirmModalOptions,includeReason:boolean=false,reasonRequired:boolean=false){
    this.title=title;
    this.messageContent=messageContent;
    this.confirmModalOptions=confirmModalOptions;
    this.messageDescription=messageDescription;
    this.messageWarning=messageWarning;
  }

  submitForm(confirmModalForm:any){
    if(confirmModalForm.valid){
      this.modal.close(this.reasonRepsone);
    }else{
      this.toastr.error("Please enter a reason");
    }
  }
  
}
