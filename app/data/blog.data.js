System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var blogs;
    return {
        setters:[],
        execute: function() {
            exports_1("blogs", blogs = [
                {
                    id: 1,
                    heading: "this is tesing heading",
                    intro: "this is an intro",
                    description: "this is descriotion"
                },
                {
                    id: 2,
                    heading: "this is tesing heading2",
                    intro: "this is an intro2",
                    description: "this is descriotion2"
                }
            ]);
        }
    }
});
//# sourceMappingURL=blog.data.js.map