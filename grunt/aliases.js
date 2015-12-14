module.exports = {


    // ------------------------------------
    //   Default task
    //   development mode (build, server, watch)
    // ------------------------------------
    'start': [
        // Build
        'build',                         // create a build                       -> www/

        // Concurrent
        'concurrent:watch_server'        // turns on the static web server and file watcher
    ],


    // ------------------------------------
    //   Build task
    //   creates a development build
    // ------------------------------------
    'build': [
        // Pre
        'clean:all',                     // clean all built files                -> .grunt-tmp/ www/

        // Compile and concatenate
        'sass:styles_project',           // compile all less project files       -> .grunt-tmp/css/project.css
        'concat:styles_vendor',          // concatenate css vendor files         -> .grunt-tmp/css/vendor.css
        'concat:scripts_project',        // concatenate js project files         -> .grunt-tmp/js/project.js
        'concat:scripts_vendor',         // concatenate js vendor files          -> .grunt-tmp/js/vendor.js

        // Copy
        'copy:styles_project',           // copy project styles file             -> www/css/project.css
        'copy:styles_vendor',            // copy vendor styles file              -> www/css/vendor.css
        'copy:scripts_project',          // copy project scripts file            -> www/js/project.js
        'copy:scripts_vendor',           // copy vendor scripts files            -> www/js/vendor.js
        'copy:statics',                  // copy all static files to the root    -> www/
        // Post
        'clean:tmp',                     // cleanup temporary generated files    -> .grunt-tmp/
    ],

};
