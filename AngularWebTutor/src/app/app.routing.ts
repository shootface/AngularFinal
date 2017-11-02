import{ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
//Components
import {HeaderComponentClose} from './common/headerClose/headerClose.component';

const appRoutes: Routes = [
    //{path:'',redirectTo:'home',pathMatch:'full'},
    //{path:'',component: HeaderComponentClose},
   // {path:'login',component:logincomponent},
    //{path:'registry',component: Registrycomponent},
    //{path:'**',component: logincomponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);