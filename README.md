# Ember-cli-head [![Build Status](https://travis-ci.org/ronco/ember-cli-head.svg?branch=master)](https://travis-ci.org/ronco/ember-cli-head)

This addon adds easy population of head tags from your Ember code
without any direct hacky dom manipulation.  This addon also provides
[ember-cli-fastboot](https://github.com/tildeio/ember-cli-fastboot)
compatability for generating head tags in server rendered apps.

The hope is that Ember itself will provide a mechanism for populating
head tags from your app at some time in the future.  Until then this
addon provides that functionality.

## Installation

Install by running

```
ember install ember-cli-head
```

## Usage

#### Template

By installing this addon you will find a new template added to your
app:

```
app/templates/head.hbs
```

The contents of this template will be inserted into the `<head>`
element of the page.


#### Service

There will be a `model` in the rendering scope of this template.  This
model is actually an alias for the `head-data` service.  You can set
whatever data you want to be available in the template directly on
that service.

### Example

#### Setting content data in route

```javascript
// app/routes/application.js

import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  // inject the head data service
  headData: Ember.inject.service(),
  afterModel() {
    set(this, 'headData.title', 'Demo App');
  }
});
```

#### Using the service as model in head.hbs

```javascript
<meta property="og:title" content={{model.title}} />
```

#### Resulting head

This will result in a document along the lines of:

```html
<html data-ember-extension="1">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My Ember App</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="/">

    <link rel="stylesheet" href="assets/vendor.css">
    <link rel="stylesheet" href="assets/my-app.css">
    
    <meta property="og:title" content="Demo App">
  </head>
  <body class="ember-application">
    

    <script src="assets/vendor.js"></script>
    <script src="assets/my-app.js"></script>
    <div id="ember383" class="ember-view"><h2 id="title">Welcome to Ember</h2>

    </div>
  </body>
</html>
```

### Fastboot Only

The primary need for this library is to support various bots and web crawlers.  To that end the head content is only truly needed in a server rendered (ie FastBoot) environment.  However by default the library will keep the head content in sync with any transitions/data changes that occur in your Ember App while running in the browser.  This can be useful for development and/or debugging.

If you do not wish to have the head content "live" while running in browser you can restrict this library to work only in FastBoot by adding the following to your `config/environment.js`:

```javascript
module.exports = function(environment) {
  var ENV = {
    'ember-cli-head': {
        suppressBrowserRender: true
    }
  };
}
```

If you make use of this mode the content of `<head>` will be the static FastBoot rendered content through the life of your App.
