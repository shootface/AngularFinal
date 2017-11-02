"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modulos dependientes 
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_rutas_module_1 = require("./login-rutas.module");
//componentes 
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var login_component_1 = require("./login/login.component");
var registry_component_1 = require("./regystri/registry.component");
var main_component_1 = require("./main/main.component");
var loginModule = (function () {
    function loginModule() {
    }
    return loginModule;
}());
loginModule = __decorate([
    core_1.NgModule({
        declarations: [
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            login_component_1.logincomponent,
            registry_component_1.Registrycomponent,
            main_component_1.mainModuleLogin
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            login_rutas_module_1.LoginRoutes
        ],
    })
], loginModule);
exports.loginModule = loginModule;
//# sourceMappingURL=login.module.js.map