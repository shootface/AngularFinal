//modulos dependientes 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { LoginRoutes } from './login-rutas.module';
//componentes 
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {logincomponent} from './login/login.component';
import {Registrycomponent} from './regystri/registry.component';
import {mainModuleLogin} from './main/main.component';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        logincomponent,
        Registrycomponent,
        mainModuleLogin
    ],
    imports:[
        CommonModule,
        FormsModule,
        LoginRoutes
    ],
})
export class loginModule{
    
}