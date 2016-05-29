import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First {{name}} 2 App</h1><courses></courses>',
    directives: [CoursesComponent],
})
export class AppComponent { 
    name: String = "Ajay";
}