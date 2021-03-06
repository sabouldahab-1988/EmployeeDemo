import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmModal, ConfirmModalOptions } from 'src/app/CommonModals/confirm-dialog/confirm-modal';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  isLoading:boolean=false;
  employeeModalOption: NgbModalOptions = { size: 'xl', backdrop: 'static' };
  modalReference: NgbModalRef;
  public employeeModalForm:{
    employee: Employee;
  }
  constructor(public employeeService: EmployeeService,private toastr: ToastrService,public modalService: NgbModal) {
    this.employeeModalForm = {
      employee: {id:null,firstName:null,lastName:null,address:null,email:null}
    };
  }

  ngOnInit() {
    this.toastr.success("Welcome to the Employee Demo");
     this.getEmployees();
  }

  getEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employees = response;
        this.isLoading=false;
      },
      (err) => {
         this.toastr.error('An error occurred while getting Employees', 'Error');
      })
  }

  //on delete employee button
  onDeleteEmployee(employeeId:number){
    const modal: NgbModalRef = this.modalService.open(ConfirmModal);
    (<ConfirmModal>modal.componentInstance).setModalProperties("Delete", "Are you sure you want to remove this image?", ConfirmModalOptions.YesNo);
    modal.result.then((result) => {
      if (result == "Yes") {
        if (employeeId != 0) {
          this.deleteEmployee(employeeId);
      }
      }
    });
  }

  //delete employee
  deleteEmployee(employeeId:number){
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response) => {
          if(response){
            this.toastr.success("Employee deleted successfully");
            this.getEmployees();
          }
      },
      (err) => {
         this.toastr.error('An error occurred while getting Employees', 'Error');
      })
  }


  saveEmployee(modalForm:any):void{
    if(modalForm.valid){
    }
    else{
      this.toastr.warning("Please fill required fields");
    }
  }

  showEmployeeModal(employeeForm, event) {
    event.srcElement.blur();
    event.preventDefault();
    this.modalReference = this.modalService.open(employeeForm, this.employeeModalOption);
  }


}



