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
}]