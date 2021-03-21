import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {timeout} from 'rxjs/operators';
import { Employee } from '../Models/Employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public httpTimeOut:number=environment.httpTimeOut;
  public baseUrl: string;
  public webSiteUrl:string;
  private Token:string=environment.Token;
  
  public httpOptions = { 
    withCredentials: environment.useCredentials,
    headers:{
      'Content-Type': environment.httpHeader
    } 
  };

  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.webSiteUrl = environment.webSiteUrl;
  }
  
  //get all employees
  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + "/EmployeeController/getEmployees", this.httpOptions).pipe(
      timeout(this.httpTimeOut)
    )
  } 
  
  deleteEmployee(employeeId:number){
    return this.http.get<boolean>(this.baseUrl + "/EmployeeController/deleteEmployee?employeeId="+employeeId, this.httpOptions).pipe(
      timeout(this.httpTimeOut)
    )
  }
}
