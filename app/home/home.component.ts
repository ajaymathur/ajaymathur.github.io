import {Component,OnInit} from 'angular2/core'
import {HomeService} from './home.service'
@Component({
    selector: 'courses',
    template: `
    <div id="home">
        <div class="course-list">
            <div class="course-list-item" id="id-{{course.id}}" *ngFor="#course of coursesList" (click)="courseClick($event,course.id)">
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
        </div><div *ngIf="courseDetail" class="course-list">
            <h1>{{courseDetail.heading}}</h1>
            <p>{{courseDetail.description}}</p>
        </div>
    </div>
    `,
    providers: [HomeService]
})

export class HomeComponent {
    coursesList: Array<any>;
    courseListElements: NodeList;
    courseDetail: Array<any>;
    constructor(private courseService : HomeService){
        
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses(){
        this.courseService.getCourses().then(courses => {this.coursesList = courses;});
    }
    courseClick(c,d){ 
        this.courseListElements = document.querySelectorAll("div.course-list-item");
        Array.prototype.forEach.call(this.courseListElements,function(e){
            e.className = e.className.replace(" active","");
        })
        c.target.className += " active";
        this.courseService.getCourseDetail(d).then(courseDetail => {
            console.log(courseDetail);
            this.courseDetail = courseDetail;
        });
    }
}