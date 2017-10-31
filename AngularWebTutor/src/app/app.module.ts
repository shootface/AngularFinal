import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Components 
import { AppComponent }  from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {rightcomponent} from'./common/right.component';
import {leftcomponent} from'./common/left.component';
import {logincomponent} from './common/login/login.component';
import {Registrycomponent} from './common/regystri/registry.component';
import {HeaderComponentClose} from './common/headerClose/headerClose.component';
import {lessonsComponent} from './module/lessons/lessons.component';
//Routing
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  imports:      
  [ BrowserModule, 
    routing,
    FormsModule
  ],
  declarations: 
  [ AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    rightcomponent, 
    leftcomponent, 
    logincomponent, 
    Registrycomponent, 
    HeaderComponentClose,
    lessonsComponent ],
  bootstrap:    
  [ AppComponent ],
  providers:    
  [appRoutingProviders]
})
export class AppModule { }
