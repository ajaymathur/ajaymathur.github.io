import {Component,OnInit} from 'angular2/core'
import {HomeService} from './home.service'
@Component({
    selector: 'courses',
    template: `
        <h2>Heading in courses</h2>
        <div class="search">
            <input type="search"/>
        </div>
        <div class="course-list">
            <div class="course-list-item" *ngFor="#course of coursesList">
                <div class="course-list-item-image">
                    <img src="../../styles/images/home/1.png"/>
                </div>
                <div class="course-list-item-description">
                    <h3>{{course.heading}}</h3>
                    <div>{{course.hint}}</div>
                    <div class="course-list-item-description-tags">
                        <ul>
                            <li *ngFor="#tag of course.tags">{{tag}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [HomeService]
})

export class HomeComponent {
    coursesList: Array<any>;
    constructor(private courseService : HomeService){
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses(){
        this.courseService.getCourses().then(courses => {this.coursesList = courses;});
    }
}