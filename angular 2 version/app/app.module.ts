import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BlogComponent} from './blog/blog.component';
import {BlogListComponent} from './blog/blogList.component';
import {BlogDetailComponent} from './blog/blogDetail.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
        ],
    declarations: [
        AppComponent,
        DashboardComponent,
        BlogComponent,
        BlogListComponent,
        BlogDetailComponent,
        AboutComponent
        ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}