import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: "[autoGrow]",
    host:{
        '(focus)' : 'infocus()',
        '(blur)' : 'inblur()'
    }
})

export class AutoGrow{
    constructor(private el: ElementRef,private renderer : Renderer){
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    infocus(){
        this.renderer.setElementStyle(this.el.nativeElement,"width","200");
    }
    inblur(){
        this.renderer.setElementStyle(this.el.nativeElement,"width","50");
    }
}