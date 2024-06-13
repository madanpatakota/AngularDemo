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


      /*Event data bidning*/
      /*method or action or event*/
      captureData($event:KeyboardEvent){
        //console.log("Event triggered");
        //console.log($event);
        console.log($event.target);
      }


      
      btnClick(){
        console.log("button Fired!!!!");
        window.alert("Message is " + this.ProjectName);  
      }


      ProjectDetails = "";
      evtShowDetails(){
        window.alert("Your message is " + this.ProjectDetails);
      }




      /*combine property and event databinding*/
      cusPeterLocation = "London";
      evtCusLocationKeyUp($event:KeyboardEvent){
      // var inputEl =  $event.target;
      // inputEl.
      var inputEl2 =  $event.target as HTMLInputElement;
      this.cusPeterLocation = inputEl2.value;
      }




      /*ngmodel and ngmodelChangecombine property and event databinding*/
      cusJohnLocation = "New yark";
      evtCusLocationModelChange($event:string){
        this.cusJohnLocation = $event;
      }



      //[()]
      guestName = "Robert";
      guestLocation = "Colombo";











      








}
