var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var connect = require('gulp-connect');



//目录
const PATHS = {
    scripts:['./src/main.ts' , './view/*.html', ],
     output:'./build',
};




gulp.task('watch',['build'],function(){    
    gulp.watch(PATHS.scripts,['build']);
});

gulp.task('connect', function() {
    connect.server({
      root: 'view',
      port: 8000,
      livereload: true
    });
  });



gulp.task('livereload',function(){
    livereload({ start: true  });
  });

gulp.task("build", function () {
    return tsProject.src()
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(tsProject())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("view"))
        .pipe(livereload());
});



gulp.task("default",  ['connect', 'livereload', 'build',  'watch'] );