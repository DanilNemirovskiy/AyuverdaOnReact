var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('default', function(){ // Создаем таск Sass
    return gulp.src('src/Main/styles/Form/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/Main/styles/Form/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('default2', function(){ // Создаем таск Sass
    return gulp.src('src/Main/styles/Index/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/Main/styles/Index/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'public' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'default', 'default2'], function() {
    gulp.watch('src/Main/styles/Form/**/*.sass', ['default']); // Наблюдение за sass файлами
    gulp.watch('src/Main/styles/Index/**/*.sass', ['default2']); // Наблюдение за sass файлами
    gulp.watch('src/*.css', browserSync.reload);
    gulp.watch('public/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    // Наблюдение за другими типами файлов
});