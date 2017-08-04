"use strict";
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var user_component_1 = require("./users/user.component");
var router_1 = require("@angular/router");
var user_resolve_service_1 = require("./users/user-resolve.service");
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        children: [
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                data: {
                    message: 'We are in the dashboard route, default data'
                }
            },
            {
                path: 'users',
                component: user_component_1.UserComponent,
                resolve: {
                    users: user_resolve_service_1.UserResolve
                }
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map