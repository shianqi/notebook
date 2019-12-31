System.register([], function (_export, _context) {
  "use strict";

  var object1, object2;
  return {
    setters: [],
    execute: function () {
      _export("object1", object1 = {
        a: "object1"
      });

      object2 = {
        a: "object2"
      };

      _export("default", object2);
    }
  };
});