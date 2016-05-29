System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutoGrow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrow = (function () {
                function AutoGrow(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    el.nativeElement.style.backgroundColor = 'yellow';
                }
                AutoGrow.prototype.infocus = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, "width", "200");
                };
                AutoGrow.prototype.inblur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, "width", "50");
                };
                AutoGrow = __decorate([
                    core_1.Directive({
                        selector: "[autoGrow]",
                        host: {
                            '(focus)': 'infocus()',
                            '(blur)': 'inblur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrow);
                return AutoGrow;
            }());
            exports_1("AutoGrow", AutoGrow);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map