export interface  ICourseDetail{
    id: number;
    heading: String;
    description: String;
    tags: Array<String>
}
export var courseListDetail: Array<ICourseDetail> = [{
    id: 1,
    heading: "this is first heading",
    description: "this is just a sample descriotion",
    tags: ["html"]
},{
    id: 2,
    heading: "this is second heading",
    description: "this is just a sample descriotion",
    tags: ["html"]
}]