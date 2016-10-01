export interface IBlogDetail{
    id: number,
    heading:string,
    description:string,
    tags: string[]
}

export var BlogDetail: IBlogDetail[] = [{
    id: 1,
    heading: '$emit vs $broadcast',
    description: `
        <p><keyword>$emit</keyword> and  <keyword>$broadcast</keyword> are used to fire an event and  <keyword>$on</keyword>
        is used to capture the event and thus execute some functionality.</p>
        When used on <b>scope</b>:
        <ul>
            <li>$broadcast : Dispatches the event downwards to all the child scopes.</li>
            <li>$scope : Dispatches the event upwards to all the parent scope in hierachy</li>
        </ul>
    `,
    tags: ["angular2"]
}]