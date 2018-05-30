'use strict';
var gulp = require("gulp");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var connect = require('gulp-connect');

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

//目录
const PATHS = {
    scripts:['./src/main.ts' , './src/greet.ts' ,'./view/*.html', './gulpfile.js', './tsconfig.json'],
     output:'./build',
};




gulp.task('connect', function() {
    connect.server({
      root: 'view',
      port: 8000,
      host : '0.0.0.0',
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
        .pipe(gulp.dest("build"));
      //  .pipe(livereload());
        
});
 

gulp.task('webpack',['build'], function (done) {
    var _conf = webpackConfig;
    webpack(_conf, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({colors: true}))
        done();
    });
});
function sleep(numberMillis) {  
    var now = new Date();  
    var exitTime = now.getTime() + numberMillis;  
    while (true) {  
        now = new Date();  
        if (now.getTime() > exitTime)  
        return;  
        }  
}  
gulp.task('reload',['webpack'],function(){  
  //  livereload();
    livereload.reload('index.html');
});

gulp.task('watch',['build'],function(){    
    gulp.watch(PATHS.scripts,['build', 'webpack', 'reload']);
});


gulp.task("default",  ['connect', 'livereload', 'build', 'webpack', 'reload', 'watch'] );

