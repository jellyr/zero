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
yarn add -D webpack 

yarn add -D css-loader 
yarn add -D style-loader 
yarn add -D url-loader 
<!--
 yarn add -D @phosphor/commands
yarn add -D @phosphor/messaging
yarn add -D @phosphor/widgets 
yarn remove  @phosphor/commands
yarn remove  @phosphor/messaging
yarn remove  @phosphor/widgets
-->

yarn add  @phosphor/commands
yarn add  @phosphor/messaging
yarn add  @phosphor/widgets
yarn add @phosphor/application
yarn add @phosphor/virtualdom
vim gulpfile.js

                var gulp = require("gulp");
                var ts = require("gulp-typescript");
                var tsProject = ts.createProject("tsconfig.json");

                gulp.task("default", function () {
                    return tsProject.src()
                        .pipe(tsProject())
                        .js.pipe(gulp.dest("build"));
                });

gulp      on mac :   yarn gulp 

git checkout ./      // ignore local change

vim webpack.config.js



<!-- 调试 -->
