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
<p><span keyword>$emit</span> and  <span keyword>$broadcast</span> are used to fire an event and  <span keyword>$on</span>
is used to capture the event and thus execute some functionality.</p>
<p>When used on <b>scope</b>:</p>

<ul>
    <li><b>$broadcast</b> : Dispatches the event downwards to all the child scopes.</li>
    <li><b>$emit</b> : Dispatches the event upwards to all the parent scope in hierachy</li>
</ul>
<p>P.S : This essentially means it these are not dispatched to the sibling scope that is two scope with same immidiate parent scope.</p>
<pre>
    <code>
    // Dispatching the event upwards
    $scope.$emit("event:emit",'data emitted');

    //Dispatching the event downwards
    $scope.$broadcast("event:broadcast","data broadcasted");

    // capturing event using $on
    $scope.$on("event:emit",function(event,data){
        console.log(data);   //data emitted
    })
    $scope.$on("event:broadcast",function(event,data){
        console.log(data);   //data broadcasted
    })
    </code>
</pre>
<p>When used on <b>$rootscope</b>:</p>
<ul>
    <li><b>$broadcast</b> : Dispatches the event to all the $rootscope.$on, as well as to all the $scope.$on listeners.</li>
    <li><b>$emit</b> : It is supposed to dispatch the event up in the scope heriarchy but since there is no $parent to $rootscope there
    is question of dispatching event upwards, so $emit will fire all $rootscope.$event listeners.</li>
</ul>
    `,
    tags: ["angular2"]
}]