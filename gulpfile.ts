const { src, dest, watch, series, parallel } = require("gulp");
// const sass = require("gulp-sass")(require("sass"));
// const babel = require("gulp-babel");
const html = require("gulp-file-include");

// function compileStyles() {
//   return src("dev/index.scss")
//     .pipe(sass({
//       silenceDeprecations: ['import']
//     }))
//     .pipe(dest("prod"));
// }

// function compileScripts() {
//   return src("dev/index.ts")
//     .pipe(
//       babel({
//         presets: ["@babel/env", "@babel/preset-typescript"],
//       })
//     )
//     .pipe(dest("prod"));
// }

function compileContent() {
  
  return src("dev/html/*.html")
    .pipe(
      html({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dev"));
}

function watchContent() {
  watch(
    ["dev/html/**/*.html", "dev/html/*.html"],
    compileContent
  );
}
// function watchStyles() {
//   watch(
//     ["dev/styles/**/*.scss", "dev/index.scss"],
//     compileStyles
//   );
// }
// function watchScripts() {
//   watch(
//     ["dev/scripts/**/*.js", "dev/index.js"],
//     compileScripts
//   );
// }

exports.compile = parallel(
  // compileStyles,
  // compileScripts,
  compileContent);

exports.watch = parallel(
  // watchStyles,
  // watchScripts,
  watchContent);

  exports.default = parallel(
    exports.compile,
    exports.watch
  );
