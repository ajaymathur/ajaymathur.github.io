import {coursesList,ICourseList} from '../../data/home/courseList.data'
export class HomeService{
    getCourses(){
        return Promise.resolve(coursesList);
    }
}