var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('default', function(){ // Создаем таск Sass
    return gulp.src('src/Main/styles/Content/Left/Accordion/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/Main/styles/Content/Left/Accordion/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('default2', function(){ // Создаем таск Sass
    return gulp.src('src/Main/styles/Index/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/Main/styles/Index/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('default3', function(){ // Создаем таск Sass
    return gulp.src('src/Main/styles/Content/Left/News/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/Main/styles/Content/Left/News/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


gulp.task('watch', ['default', 'default2', 'default3'], function() {
    gulp.watch('src/Main/styles/Content/Left/Accordion/**/*.sass', ['default']); // Наблюдение за sass файлами
    gulp.watch('src/Main/styles/Index/**/*.sass', ['default2']); // Наблюдение за sass файлами
    gulp.watch('src/Main/styles/Content/Left/News/**/*.sass', ['default3']); // Наблюдение за sass файлами
});