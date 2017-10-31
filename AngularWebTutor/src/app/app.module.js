"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Components 
var app_component_1 = require("./app.component");
var header_component_1 = require("./common/header/header.component");
var footer_component_1 = require("./common/footer/footer.component");
var right_component_1 = require("./common/right.component");
var left_component_1 = require("./common/left.component");
var login_component_1 = require("./common/login/login.component");
var registry_component_1 = require("./common/regystri/registry.component");
var headerClose_component_1 = require("./common/headerClose/headerClose.component");
var lessons_component_1 = require("./module/lessons/lessons.component");
//Routing
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_1.routing,
            forms_1.FormsModule
        ],
        declarations: [app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            right_component_1.rightcomponent,
            left_component_1.leftcomponent,
            login_component_1.logincomponent,
            registry_component_1.Registrycomponent,
            headerClose_component_1.HeaderComponentClose,
            lessons_component_1.lessonsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_routing_1.appRoutingProviders]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map