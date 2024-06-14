import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent  {


  number = 1;
  constructor() {
     /* Ternary Operator : Simple way to handle the output 
                           based on the condition. 
                           its alternative of if else condition */

    // if(this.number == 1){
    //       console.log("One");
    // }
    // else{
    //      console.log("not one");
    // }


    //this.number == 1 ?console.log("One") : console.log("Not One"); 



  }


  divColor = 'yellow';


  /*ngStyle*/
  zoneSafeStatus = true;
  zoneBorderStatus = true;
  zonemaxWidth = false;





}
