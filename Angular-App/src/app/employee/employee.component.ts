import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public name = 'Aman Sultan Baig';
  public Mysuccess = 'success';
  public Mydanger = 'danger';
  public input = '';

  public isLogin = false
  public MyVal = false

  public employees = [
    {name: 'Aman Sultan Baig', position:'Full Stack JS Developer'},
    {name: 'Nabeel Jameel', position:'Angular Developer'},
    {name: 'Haris Ahmed ', position:'React Native Developer'},
  ];

  public myDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  ClickMe(myInput) {
    this.input = myInput.value
  }

  clickTrue(){
    this.isLogin = this.MyVal = true
  }
  clickFalse(){
    this.isLogin = this.MyVal = false
  }

}
