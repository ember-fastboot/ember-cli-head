# ember-cli-head [![Build Status](https://github.com/ronco/ember-cli-head/workflows/Build/badge.svg?branch=master)](https://github.com/ronco/ember-cli-head/actions?query=branch%3Amaster+workflow%3A%22Build%22)

This addon adds easy population of head tags from your Ember code
without any direct hacky DOM manipulation.  This addon also provides
[ember-cli-fastboot](https://github.com/tildeio/ember-cli-fastboot)
compatibility for generating head tags in server-rendered apps.

The hope is that Ember itself will provide a mechanism for populating
head tags from your app at some time in the future.  Until then this
addon provides that functionality.

## Compatibility

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Installation

Install by running

```
ember install ember-cli-head
```

And add `{{head-layout}}` to the top of your application template.

#### Version
Take into account that version >= 0.3 of this addon require Ember 2.10+ and fastboot >=1.0.rc1
Please use 0.2.X if you don't fulfill both requirements.

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

import Route from '@ember/routing/route'
import { inject } from '@ember/service';
import { set } from '@ember/object';

export default Route.extend({
  // inject the head data service
  headData: inject(),
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

The primary need for this library is to support various bots and web crawlers.  To that end the head content is only truly needed in a server rendered (i.e. FastBoot) environment.  However, by default the library will keep the head content in sync with any transitions/data changes that occur in your Ember App while running in the browser.  This can be useful for development and/or debugging.

If you do not wish to have the head content "live" while running in browser you can restrict this library to only work in FastBoot by adding the following to your `config/environment.js`:

```javascript
module.exports = function(environment) {
  var ENV = {
    'ember-cli-head': {
        suppressBrowserRender: true
    }
  };
}
```

### Upgrade to 0.4.x

As mentioned above you need to add the `{{head-layout}}` component once and only once in an application wide template.  This template is usually `app/templates/application.hbs`, but could be different in your case.  Previously, in ember-cli-head 0.3.x and below the component was appended to the document inside an instance initializer.  This prevented the need for the `{{head-layout}}` component as it was automatically injected and used inside that initializer.  Unfortunately, this approach needed to change so that we could render the component with the rest of the application rendering.

If you care to read more about the details of render please see the PR that introduced these changes https://github.com/ronco/ember-cli-head/pull/37

But for now, if you are upgrading to 0.4.x, you simply need to add `{{head-layout}}` component to your application wide template.

If you make use of this mode the content of `<head>` will be the static FastBoot rendered content through the life of your App.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
