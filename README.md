yarn init -y

yarn add -D gulp

yarn add -D typescript

mkdir src

cd src 

vim main.ts



            function hello(compiler: string) {
                console.log(`Hello from ${compiler}`);
            }
            hello("TypeScript"); 


cd ..

.\node_modules\.bin\tsc --init




yarn add -D gulp-typescript
yarn add -D gulp-sourcemaps
yarn add -D gulp-livereload
yarn add -D gulp-connect

vim gulpfile.js

                var gulp = require("gulp");
                var ts = require("gulp-typescript");
                var tsProject = ts.createProject("tsconfig.json");

                gulp.task("default", function () {
                    return tsProject.src()
                        .pipe(tsProject())
                        .js.pipe(gulp.dest("build"));
                });

gulp





<!-- 调试 -->