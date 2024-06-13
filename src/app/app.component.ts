import { Component } from '@angular/core';
// component = .html + .ts + .css
// name what is the name of the compoennt
// using System;

@Component(
  {
    selector: 'app-root1',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)

export class AppComponent {


    /*string interpolation*/
    ProjectName = "Angular";
    title     = "Basics App";

    getCustomerName(){
      return "Robert.Jr";
     }


     /*Property data bidning*/
      customerRole = "Admin";
      inputType = "radio";
      








}
