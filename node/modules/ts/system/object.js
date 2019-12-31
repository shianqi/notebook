System.register([], function (exports_1, context_1) {
    "use strict";
    var object1, object2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("object1", object1 = { a: "object1" });
            object2 = { a: "object2" };
            exports_1("default", object2);
        }
    };
});
