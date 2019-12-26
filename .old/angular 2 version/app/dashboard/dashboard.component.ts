import {Component} from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.styles.css']
})

export class DashboardComponent{
    quote:string = "for(;;)<br>++idea";
}