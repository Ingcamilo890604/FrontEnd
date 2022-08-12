import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/shared/models/Employee';
import { EmployeeFilter } from 'src/app/shared/models/EmployeeFilter';
import { EmployeeService } from '../../services/employee.service';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees : Employee[] = []
  filterEmployee :EmployeeFilter={}
  
  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.employeeService.GetAll(this.filterEmployee).subscribe(data => {
      this.employees = data;
      console.log(this.employees, 'Respuesta Empleados');
    })
  }

}

