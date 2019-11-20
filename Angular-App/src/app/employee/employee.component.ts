import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 name = 'Angular';
  public date = new Date();

  public myNewArry:any = [];

  constructor(){
    setTimeout(() => {
      this.date.toLocaleTimeString
    },1000)
  }

  public myName = 'Aman Sultan Baig'

  public EmployeeList:any = [
    {name: 'Aman Sultan Baig', position:'JS Developer'},
    {name: 'Salman Akhtar', position:'JQuery Developer'},
    {name: 'Haris Ahmed Sheikh', position:'PHP Developer'},
    {name: 'Raza Tahir', position:'ASP.Net Developer'},
  ]
 clickMe(myInput){
   (!myInput.value) ? alert('Enter Value First') : this.EmployeeList.push({
     name: myInput.value,
     position : 'no Designation Assigned yet!' 
   });   
   myInput.value = ''
 }

}
