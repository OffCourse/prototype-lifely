module.exports = function(grunt) {

    // Function to prefix vendor paths with src-path
    var prefixWith = function(prefix, array) {
        for(index in array) {
            array[index] = prefix + array[index];
        }
        return array;
    };

    // Get vendor data
    var vendorData = grunt.file.readJSON('src/vendor.json');

    // Prefix vendor paths
    vendorData.scripts = prefixWith('src/', vendorData.scripts);
    vendorData.styles = prefixWith('src/', vendorData.styles);


    // Grunt task targets
    return {

        scripts_project: {
            options: {
                separator: ';\n'
            },
            src: [
                'src/scripts/app.js',
                'src/scripts/*/**/*.js',
            ],
            dest: '.grunt-tmp/js/app.js'
        },
        scripts_vendor: {
            src: vendorData.scripts,
            dest: '.grunt-tmp/js/vendor.js'
        },
        styles_vendor: {
            src: vendorData.styles,
            dest: '.grunt-tmp/css/vendor.css'
        }

    }

};
