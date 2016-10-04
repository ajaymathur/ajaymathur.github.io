export interface IBlogList{
    id: number,
    heading: string,
    hint?: string,
    tags: string[]
}

export var blogList: IBlogList[] = [{
    id: 1,
    heading: "$emit vs $broadcast",
    tags: ["angular v1","javascript","custom-events"]
},{
    id: 2,
    heading: "directive",
    tags: ["angular v1","javascript","directive","custom-directive"]
},{
    id: 3,
    heading: "git, up and running",
    tags: ["git","source control"]
}]