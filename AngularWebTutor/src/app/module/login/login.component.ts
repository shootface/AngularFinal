import{Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    selector:'app-login',
    templateUrl: './login.component.html'
})
export class logincomponent {
    title = 'Login';
    public email: string;
    public password: string;

    constructor(){
    }
    ingresar(){
        localStorage.setItem('email',this.email );
        console.log("EMAIL = ",this.email,"PASS = ",this.password);
        localStorage.setItem('state',"out");
    }
} 