import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'
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
    providers: [CoursesService],
    directives: [AutoGrow]
})

export class CoursesComponent {
    coursesList: Array<String>;
    constructor(couseService : CoursesService){
        this.coursesList = couseService.getCourses();
    }
}