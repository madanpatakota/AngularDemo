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

  /*ngClass */
  employeeStatus = false;


  /*ngIf*/
  employeeEligibility = false;

  // if(true){
  //   console.log(true);
  // }


  /*Local Ref*/

  myquestion = "abcd ef ?"
  myAnswer = '';

  evtQuestion(question : HTMLParagraphElement){
    console.log(question) //
    
    if(question.innerText  == "Hey!! How are you doing ?"){
      this.myAnswer = 'Yes.. I am good .. Thank you';
    }
    else{
      this.myAnswer = "Sorry .. i did't understand your question";
    }


// var  i = 0; for --> Loop
//     for(i =0 ; i< 10 ; i++){

//     }




  }



  // *ngFor
  /*   *ngFor   */
  customerExperience =
   [
    'He Likes the Non Veg Food',
    'He dislike in Reception the way they talk in Restaurent',
    'He went with his 4 freinds',
  ];


  
  
  customersList = [
    { name: 'John Smith', location: 'London', Job: 'Sales Rep' },
    { name: 'Robert Frost', location: 'New yark', Job: 'Hotel Chef' },
    { name: 'Peter moore', location: 'Colombo', Job: 'Car Driver' },
  ];


  /*ngSwitch and case*/
  customerID = 0;



}
