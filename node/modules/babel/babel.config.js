const BABEL_ENV = process.env.BABEL_ENV;
let config = {};
const modules = BABEL_ENV.toLowerCase();

if (modules !== "es6" && modules !== "es2015") {
  config = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: { node: "current" },
          modules: modules || "auto"
        }
      ]
    ]
  };
}

module.exports = config;
