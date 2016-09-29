import {Component} from 'angular2/core';
import {HomeComponent} from './home//home.component';
import {BlogComponent} from './blog/blog.component';
import {ConnectComponent} from './connect/connect.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
    <nav>
    <img src="../styles/images/signature.png"/>
    <ul><li [routerLink]='["Home"]'>Home</li><li [routerLink]='["ConnectMe"]'>About Ajay</li></ul>
    </nav>
    <section id="page">
        <section id="content">
            <section class="main-page">
                <router-outlet></router-outlet>
            </section>
        </section>
    </section>
    `,
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {path: '/',name:'Home',component:HomeComponent,useAsDefault: true},
    {path: '/blog',name:'Blog',component:BlogComponent},
    {path: '/Contact',name:'ConnectMe',component:ConnectComponent}
])

export class AppComponent { 
    name: String = "Ajay";
}