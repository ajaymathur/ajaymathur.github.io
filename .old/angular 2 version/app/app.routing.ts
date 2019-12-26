import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BlogComponent} from './blog/blog.component';
import {BlogListComponent} from './blog/blogList.component';
import {BlogDetailComponent} from './blog/blogDetail.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },{
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'blog',
        component: BlogComponent,
        children: [
            {
                path: '',
                component: BlogListComponent
            },
            {
                path: ':id',
                component: BlogDetailComponent 
            }
        ]
    },{
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);