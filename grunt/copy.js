module.exports = {

    styles_project: {
        expand: true,
        cwd: '.grunt-tmp/css/',
        src: 'main.css',
        dest: 'www/css/'
    },
    styles_vendor: {
        expand: true,
        cwd: '.grunt-tmp/css/',
        src: 'vendor.css',
        dest: 'www/css/'
    },
    scripts_project: {
        expand: true,
        cwd: '.grunt-tmp/js/',
        src: 'app.js',
        dest: 'www/js/'
    },
    scripts_vendor: {
        expand: true,
        cwd: '.grunt-tmp/js/',
        src: 'vendor.js',
        dest: 'www/js/'
    },
    statics: {
        expand: true,
        cwd: 'src/statics/',
        src: '**',
        dest: 'www/'
    }

};
