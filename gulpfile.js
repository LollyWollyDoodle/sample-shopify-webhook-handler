const gulp = require("gulp");

const ldpackage = require("@lwd/lambda-deployment-package");
gulp.task("default", ldpackage.pack);
gulp.task("clean", ldpackage.clean);
