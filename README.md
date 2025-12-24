# ember-cli-head

This addon lets you populate `<head>` tag from your Ember code without any direct hacky DOM manipulation. It also provides [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) compatibility for generating head tags in server-rendered apps.

The hope is that, in the future, Ember will provide a mechanism for populating `<head>` tag from your app. Until then, this addon provides that functionality.

## Compatibility

* Ember.js v3.16 or above
* Ember CLI v3.16 or above
* Node.js v12 or above


## Installation

Install by running

```bash
ember install ember-cli-head
```

## Usage

Add `<HeadLayout />` to the top of your application template.

```gjs
// app/templates/application.gjs

import { HeadLayout } from 'ember-cli-head';

<template>
  <HeadLayout>
    <meta property="og:title" content="My App">
  </HeadLayout>

{{outlet}}
</template>
```

The contents of HeadLayout's defaukt block will be inserted into the `<head>` element of the page.

## Example

### Setting content data in route

```typescript
// app/routes/application.ts

import Route from '@ember/routing/route';
import { service } from '@ember/service';

import HeadDataService from 'app/services/head-data';

export default class ApplicationRoute extends Route {
  @service declare headData: HeadDataService;

  afterModel() {
    this.headData.title = 'Demo App';
  }
}
```

### Declare `title` as a tracked property on the `head-data` service

```typescript
// app/services/head-data.ts

import Route from '@ember/routing/route';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';}

export default class HeadDataService extends Service {
  @tracked declare title: string;
}
```

### Using the service in the component

```gts
// app/services/head-data.gts

import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class Head extends Component {
  @service('head-data') declare model: HeadDataService;

  <template>
    <meta property="og:title" content={{this.model.title}} />
  </template>
}
```

### Using the component in the template

```gjs
// app/templates/application.gts

import { HeadLayout } from 'ember-cli-head';
import Head from 'app/components/head';

<template>
  <HeadLayout><Head /></HeadLayout>
  
  {{outlet}}
</template>
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

## Upgrade from 2.x to 3.x

As of 3.x you need `ember-auto-import` installed and configured to use this addon with Ember CLI applications. See the [ember-auto-import](https://github.com/embroider-build/ember-auto-import) documentation for details.

The addon doesn't provide any boilerplate code anymore. You will need to create your own head component and inject the `headData` service.

1. Move your head.hbs template to components.
2. In your new head component, add `@service headData` injection.
3. If you don't have head-data service, you will have to create it.

## Upgrade to 0.4.x

As previously mentioned, you need to add the `<HeadLayout />` component once and only once in an application-wide template. This template is usually `app/templates/application.hbs` but may be different in your case.

Prior to 0.4, the component was appended to the document inside an instance initializer. This prevented the need for the `<HeadLayout />` component as it was automatically injected and used inside that initializer. This approach [needed to change](https://github.com/ronco/ember-cli-head/pull/37) so that we could render the component with the rest of the application rendering.

In short, if you are upgrading to 0.4.x, you simply add the `<HeadLayout />` component to your application-wide template.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
