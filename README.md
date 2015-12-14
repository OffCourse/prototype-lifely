# Coding the Humanities

## Setup

### Development environment
* `npm install`
* `grunt start`
* Avoid CORS problems:
    * close Chrome
    * `open -a Google\ Chrome --args --disable-web-security`
* Visit **http://localhost:3000**

### Updating icons
* `brew install ttfautohint fontforge --with-python`
* `grunt webfont:icons`

### Update files.lifely.nl/cth-demo
- ssh into files.lifely.nl under the user 'ftp'
- cd into 'repos/cth'
- `git pull` (you might want to change the remote to use your own username)
- run `node_modules/grunt-cli/bin/grunt build`
- remove old build with `rm -rf ~/www/cth-demo/*` (careful!)
- copy files to public directory `cp -R www/* ~/www/cth-demo/`
- Oh and; you should change the base-tag in ~/www/cth-demo/index.html to `<base href="">` as long as cth is located in a sub directory
