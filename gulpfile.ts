// const { src, dest, watch, series, parallel } = require("gulp");
// const fileInclude = require("gulp-file-include");
import {src, dest, watch, series, parallel} from "gulp";
import fileInclude from "gulp-file-include";

// CONTENT
function compileContent() {
  return src(["dev/content/*.html"])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dev"));
}

function watchContent() { watch(["dev/content/**/*.html", "dev/content/**/*.md"], compileContent); }

  exports.default = parallel(
    compileContent,
    watchContent
  );