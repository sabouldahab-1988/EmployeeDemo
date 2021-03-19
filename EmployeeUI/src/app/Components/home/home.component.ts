import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public employeeService: EmployeeService,private toastr: ToastrService) {
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

}



