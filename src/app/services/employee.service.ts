import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Employee } from '../shared/models/Employee';
import { EmployeeFilter } from '../shared/models/EmployeeFilter';
import { EmployeeCreate } from '../shared/models/EmployeeCreate';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _proxy: BaseService;

  public get proxy(): BaseService{
    return this._proxy
  }

  constructor(http: HttpClient, protected router: Router) {
    this._proxy = new BaseService(http, router);
  }

  GetAll(employeeFilter: EmployeeFilter): Observable<Employee[]>{
    return this._proxy.executePost('/Employee/GetAll', employeeFilter );
  };

  AddEmployee(employeeCreate: EmployeeCreate): Observable<Employee> {
    return this._proxy.executePost('/Employee/Add', employeeCreate);
  };

  UpdateActivities(employee : Employee): Observable<Employee> {
    return this._proxy.executePost('/Employee/Update', employee);
  };
}