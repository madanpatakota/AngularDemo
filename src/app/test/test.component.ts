import { Component } from "@angular/core";


//You have to give the instruction to the angular cli that its component...
// ctrl+k,c

// 1. Create the component  -->
// 2. Register the component  --> appmodule
// 3. Use that component with the comp name

//    -filename.component.html   ( Elements preparation)
//    -filename.component.ts     ( business logic)
//    -filename.component.css    ( Prepare Elements styles)


//template : to define the html related elements....


@Component({
    selector:'app-test-comp',
    templateUrl : './test.component.html',
    styleUrls: ['./test.component.css']
})
export class testComponent{

}