import{ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
//Components
import {logincomponent} from './common/login/login.component';
import {Registrycomponent} from './common/regystri/registry.component';
import {HeaderComponentClose} from './common/headerClose/headerClose.component';
import {lessonsComponent} from './module/lessons/lessons.component';

const appRoutes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component: logincomponent},
    {path:'login',component:logincomponent},
    {path:'registry',component: Registrycomponent},
    {path:'lessons',component:lessonsComponent},
    {path:'**',component: logincomponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);