import {Component} from 'angular2/core'
@Component({
    template:`
        <div id="page-about-me">
        <header>
            <img id="cover-pic" src="../../styles/images/about/cover.jpg" alt="cover image of ajay narain mathur"/>
            <div id="social-link">
                <a href="https://github.com/ajaymathur"><img alt="link ajay narain mathur's github profile" src="../../styles/images/about/github.png">
                </a><a href="https://www.facebook.com/ajay.narainmathur"><img alt="link ajay narain mathur's github profile" src="../../styles/images/about/facebook.png">
                </a><a href="https://plus.google.com/+ajaynarainmathur/posts"><img alt="link ajay narain mathur's github profile" src="../../styles/images/about/google-plus.png">
                </a><a href="https://twitter.com/ajaynarainmath"><img alt="link ajay narain mathur's github profile" src="../../styles/images/about/twitter.png">
                </a>
            </div>
        </header>
        <article>
            <h1>About Me</h1>
            <p>Friends call me AJ, so can you.</p>
            <p>I love working on UI technology. The first web application that I built was using JSP and was for a friend as his college project.
            I have worked with a lot of javascript frameworks. The first javascript framework that I used was Backbone JS, using which I built an
            application to run on Motorola <a href="http://blog.barcoding.com/tag/home-depot-first-phone/">first phone</a> 
            to be used by HOME DEPOT employees.</p>
            <p>A friend of mine suggested me Angular JS. I tried it and loved it.</p>
        </article>
        </div>
    `
})
export class ConnectComponent{
    
}