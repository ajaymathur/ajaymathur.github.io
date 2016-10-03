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
},{
    id: 2,
    heading: "angular directives",
    description: `
<p><a href='https://docs.angularjs.org/api/ng/service/$compile'>Refrence of the article</a>, There are multiple options for a 
directive it matters what value we return in factory function. We may return a <span keyword>directive defination object</span>
which contains the properties that the directive has or just a <span keyword>postLink</span> function and all the properties take
up the default property.<p>
<p>Here is an example of directive where we return a <span keyword>directive defination object</span>:</p>
<pre>
    <code>
    var myModule = angular.module(...);

    myModule.directive('directiveName', function factory(injectables) {
    var directiveDefinitionObject = {
        priority: 0,
        template: '&lt;div>&lt;/div>', // or // function(tElement, tAttrs) { ... },
        // or
        // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
        transclude: false,
        restrict: 'A',
        templateNamespace: 'html',
        scope: false,
        controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
        controllerAs: 'stringIdentifier',
        bindToController: false,
        require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
        multiElement: false,
        compile: function compile(tElement, tAttrs, transclude) {
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) { ... },
            post: function postLink(scope, iElement, iAttrs, controller) { ... }
        }
        // or
        // return function postLink( ... ) { ... }
        },
        // or
        // link: {
        //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
        // }
        // or
        // link: function postLink( ... ) { ... }
    };
    return directiveDefinitionObject;
    });
    </code>
</pre>
<p>As mentioned already any unspecified value takes the default, therefore we can create directive just by folowwing:</p>
<pre>
    <code>
    var myModule = angular.module(...);

    myModule.directive('directiveName', function factory(injectables) {
    var directiveDefinitionObject = {
        link: function postLink(scope, iElement, iAttrs) { ... }
    };
    return directiveDefinitionObject;
    // or
    // return function postLink(scope, iElement, iAttrs) { ... }
    });
    </code>
</pre>
    `,
    tags: ["angular2"]
}]