module.exports = {

    scripts_projects: {
        files: ['src/scripts/**/*'],
        tasks: ['concat:scripts_project', 'copy:scripts_project', 'clean:tmp'],
        options: {
            livereload: true
        }
    },
    scripts_vendor: {
        files: ['src/vendor/**/*.js', 'src/vendor.json'],
        tasks: ['concat:scripts_vendor', 'copy:scripts_vendor', 'clean:tmp']
    },
    styles_project: {
        files: ['src/styles/**/*'],
        tasks: ['sass:styles_project', 'copy:styles_project', 'clean:tmp'],
        options: {
            livereload: true
        }
    },
    styles_vendor: {
        files: ['src/vendor/**/*.css', 'src/vendor.json'],
        tasks: ['concat:styles_vendor', 'copy:styles_vendor', 'clean:tmp']
    },
    statics: {
        files: ['src/statics/**/*'],
        tasks: ['copy:statics'],
        options: {
            livereload: true
        }
    }
};
