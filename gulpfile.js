const gulp = require("gulp");

const ldpackage = require("@lwd/lambda-deployment-package");
gulp.task("deployment-package", ldpackage.pack);
gulp.task("clean-deployment-package", ldpackage.clean);
