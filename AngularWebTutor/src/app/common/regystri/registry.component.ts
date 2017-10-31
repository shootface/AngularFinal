import {Component} from'@angular/core';
@Component({
    selector: 'app-registry',
    templateUrl: './registry.component.html'
})
export class Registrycomponent{
    public name:string;
    public lastname:string;
    public age:number;
    public typeID:string;
    public id:string;
    public selectedTypeId:string;

    constructor(){

    }
    types = [
        {name: 'cedula ciudadania'},
        {name: 'pasaporte'},
        {name: 'tarjeta identidad'}
    ]
    compared(){
        console.log("El elemento seleciona es :", this.selectedTypeId );
    }
    
}
