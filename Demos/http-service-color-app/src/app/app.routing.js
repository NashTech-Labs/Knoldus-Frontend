"use strict";
var router_1 = require("@angular/router");
var list_colors_component_1 = require("./listColors/list-colors.component");
var log_users_component_1 = require("./logUser/log-users.component");
exports.routes = [
    {
        path: '',
        redirectTo: '/listcolors',
        pathMatch: 'full'
    },
    {
        path: 'listcolors',
        component: list_colors_component_1.ListColorsComponent
    },
    {
        path: 'logusers',
        component: log_users_component_1.LogUserComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map