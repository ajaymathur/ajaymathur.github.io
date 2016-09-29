import {coursesList,ICourseList} from '../../data/home/courseList.data';
import {courseListDetail} from '../../data/home/courseDetail.data';
export class HomeService{
    getCourses(){
        return Promise.resolve(coursesList);
    }
    getCourseDetail(courseId: number){
        return Promise.resolve(courseListDetail.filter((course)=>{
            return course.id == courseId
        })[0])
    }
}