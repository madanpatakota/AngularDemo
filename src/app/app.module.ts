import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { testComponent  } from './test/test.component';
import { TestOneComponent } from './test-one/test-one.component';
@NgModule(
{
                 // .html + .ts + .css + spec
  declarations: [AppComponent , testComponent, TestOneComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
}
)


export class AppModule { }
