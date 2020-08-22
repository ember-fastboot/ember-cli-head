[![Build Status](https://github.com/ronco/ember-cli-head/workflows/Build/badge.svg?branch=master)](https://github.com/ronco/ember-cli-head/actions?query=branch%3Amaster+workflow%3A%22Build%22)

# ember-cli-head

This addon lets you populate `<head>` tag from your Ember code without any direct hacky DOM manipulation. It also provides [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) compatibility for generating head tags in server-rendered apps.

The hope is that, in the future, Ember will provide a mechanism for populating `<head>` tag from your app. Until then, this addon provides that functionality.


## Compatibility

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


## Installation

Install by running

```bash
ember install ember-cli-head
```

Then, add `<HeadLayout />` to the top of your application template.

```handlebars
{{!-- app/templates/application.hbs --}}

<HeadLayout />

{{outlet}}
```


### Version

Take into account that version >= 0.3 of this addon require Ember 2.10+ and fastboot >=1.0.rc1. Please use 0.2.X if you don't fulfill both requirements.


## Usage

### Head template

By installing this addon, you will find a new template added to your app, called `head`:

```
app/templates/head.hbs
```

The contents of this template will be inserted into the `<head>` element of the page.


### Head data service

The addon provides `model` that is scoped to the `head` template. The `model` is actually an alias of the `head-data` service. You can set whatever data you want to be available to the `head` template on this service.

⚠️ Warning for Octane apps

Because `model` refers to the `head-data` service (and not what a route's `model` hook returns), it is important to use `this.model` (not `@model`) in the `head` template.


## Example

### Setting content data in route

```javascript
// app/routes/application.js

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Demo App';
  }
}
```

### Declare `title` as a tracked property on the `head-data` service

```javascript
// app/services/head-data.js

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeadDataService extends Service {
  @tracked title;
}
```

### Using the service in head template

```handlebars
{{!-- app/templates/head.hbs --}}

<meta property="og:title" content={{this.model.title}} />
```


### Checking head tag

This will result in a document along the lines of:

```html
<html data-ember-extension="1">
  <head>
    ...
    <meta name="ember-cli-head-start" content>
    <meta property="og:title" content="Demo App">
    <meta name="ember-cli-head-end" content>
  </head>
  <body class="ember-application">
    ...
  </body>
</html>
```


## FastBoot-Only Use

The primary need for this addon is to support various bots and web crawlers. To that end, the head content is only truly needed in a server-rendered environment like FastBoot.

By default, the addon will keep the head content in sync with any route transitions and data changes that occur when your Ember app runs in the browser. This can be useful for development and debugging.

If you don't wish the head content to be "live" when the app runs in browser, you can restrict this addon to run only in FastBoot:

```javascript
// config/environment.js

module.exports = function(environment) {
  let ENV = {
    'ember-cli-head': {
      suppressBrowserRender: true
    }
  };

  return ENV;
};
```

If you use `suppressBrowserRender`, the content of `<head>` will be the static FastBoot-rendered content throughout your app's lifecycle.


## Upgrade to 0.4.x

As previously mentioned, you need to add the `<HeadLayout />` component once and only once in an application-wide template. This template is usually `app/templates/application.hbs` but may be different in your case.

Prior to 0.4, the component was appended to the document inside an instance initializer. This prevented the need for the `<HeadLayout />` component as it was automatically injected and used inside that initializer. This approach [needed to change](https://github.com/ronco/ember-cli-head/pull/37) so that we could render the component with the rest of the application rendering.

In short, if you are upgrading to 0.4.x, you simply add the `<HeadLayout />` component to your application-wide template.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
