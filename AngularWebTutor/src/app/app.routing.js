"use strict";
var router_1 = require("@angular/router");
//Components
var login_component_1 = require("./common/login/login.component");
var registry_component_1 = require("./common/regystri/registry.component");
var lessons_component_1 = require("./module/lessons/lessons.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: login_component_1.logincomponent },
    { path: 'login', component: login_component_1.logincomponent },
    { path: 'registry', component: registry_component_1.Registrycomponent },
    { path: 'lessons', component: lessons_component_1.lessonsComponent },
    { path: '**', component: login_component_1.logincomponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map