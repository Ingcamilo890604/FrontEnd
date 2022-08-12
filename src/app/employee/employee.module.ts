import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    HttpClientModule,     
    
  ]
})
export class EmployeeModule { }
