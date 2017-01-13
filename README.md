# retraction-watch

`master` Build Status: [![Build Status](https://travis-ci.org/CenterForOpenScience/ember-preprints.svg?branch=master)](https://travis-ci.org/CenterForOpenScience/ember-preprints)

`develop` Build Status: [![Build Status](https://travis-ci.org/CenterForOpenScience/ember-preprints.svg?branch=develop)](https://travis-ci.org/CenterForOpenScience/ember-preprints)

This is the codebase for the retraction-watch database, powered by SHARE.
This guide will help you get started.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation
* `npm install`
* `bower install`

## Running / Development
For local development, this is designed to run alongside (and from within) the flask application for osf.io.

1. Check out this OSF feature branch: https://github.com/pattisdr/retraction-watch.git
2. Start your Ember server: `ember serve`
3. Copy these lines to your `website/settings/local.py` file and restart your flask app.
    USE_EXTERNAL_EMBER = True
    EXTERNAL_EMBER_APPS = {
        'retraction-watch': {
            'url': '/retraction-watch/',
            'server': 'http://localhost:4200',
            'path': '../retraction-watch/dist/'
        }
    }
4. Visit your app at http://localhost:5000/retraction-watch/ (temporary URL)

If you encounter problems, make sure that your version of ember-osf is up to date. If login fails, try logging in from 
any other OSF page, then returning to the retraction-watch app.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [Requirements and road map for this service](https://docs.google.com/spreadsheets/d/1SocElbBjc_Nhme4-SJv2_zytBd1ys8R5aZDb3POe94c/edit#gid=1340026270)
* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

