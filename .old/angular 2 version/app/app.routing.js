"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var blog_component_1 = require('./blog/blog.component');
var blogList_component_1 = require('./blog/blogList.component');
var blogDetail_component_1 = require('./blog/blogDetail.component');
var about_component_1 = require('./about/about.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'blog',
        component: blog_component_1.BlogComponent,
        children: [
            {
                path: '',
                component: blogList_component_1.BlogListComponent
            },
            {
                path: ':id',
                component: blogDetail_component_1.BlogDetailComponent
            }
        ]
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map