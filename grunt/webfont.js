module.exports = {
    icons: {
        src: 'src/statics/icons/*.svg',
        dest: 'src/statics/fonts/icons/',
        destCss: 'src/styles/icons',
        options: {
            types: ['eot','woff2','woff','ttf','svg'],
            stylesheet: 'scss',
            relativeFontPath: '../fonts/icons/',
            templateOptions: {
                baseClass: 'cth-icon',
                classPrefix: 'cth-'
            }
        }
    }
}
