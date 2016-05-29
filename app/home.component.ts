import {Component} from 'angular2/core'
import {HomeService} from './home.service'
import {AutoGrow} from './auto-grow.directive'
@Component({
    selector: 'courses',
    template: `
        <h3>Heading in courses</h3>
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of coursesList">
                {{course}}
            </li>
        </ul>
    `,
    providers: [HomeService],
    directives: [AutoGrow]
})

export class HomeComponent {
    coursesList: Array<String>;
    constructor(couseService : HomeService){
        this.coursesList = couseService.getCourses();
    }
}