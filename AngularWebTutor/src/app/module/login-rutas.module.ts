import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Componentes del modulo 
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {logincomponent} from './login/login.component';
import {Registrycomponent} from './regystri/registry.component';
import {mainModuleLogin} from './main/main.component';

const loginRoutes: Routes=[
    {path:'user',
    component:mainModuleLogin,
    children:[
                {path:'',component:logincomponent},
                {path:'login',component:logincomponent},
                {path:'registry',component:Registrycomponent}
            ]
    },
    {path:'' ,component: mainModuleLogin}
];

@NgModule({
    imports:[RouterModule.forChild(loginRoutes)],
    exports:[RouterModule]
})

export class LoginRoutes{

}