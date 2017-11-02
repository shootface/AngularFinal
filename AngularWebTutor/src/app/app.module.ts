import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Modulos
import { loginModule } from './module/login.module';
//Components 
import { AppComponent }  from './app.component';
//Routing
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  imports:      
  [ BrowserModule, 
    routing,
    FormsModule,
    loginModule
  ],
  declarations: 
  [ AppComponent],
  bootstrap:    
  [ AppComponent ],
  providers:    
  [appRoutingProviders]
})
export class AppModule { 
  
}
