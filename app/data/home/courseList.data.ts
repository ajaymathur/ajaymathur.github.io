export interface ICourseList{
    heading : string;
    hint: string;
    tags: Array<string>;
    id: number;
}
export var coursesList : Array<ICourseList> = [
    {
        heading: "Sprite animation",
        hint: "Create cool animations just my using sprite images.",
        tags: ["css","css-animation"],
        id: 1
    },
    {
        heading: "Something trndy",
        hint: "hellohi uhiuhiuhiuh iuhiuhiuhiu hiuhiuhiu hiuhi fdffddsf dfsdfdsfds sdfsdfdsf fgdfgdfg fdgdfgfd uhiuh",
        tags: ["css","css-animation"],
        id: 2
    },{
        heading: "Something trndy",
        hint: "Create cool animations just my using sprite images.",
        tags: ["css","css-animation"],
        id: 2
    }
]