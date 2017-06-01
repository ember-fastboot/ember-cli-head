import Ember from 'ember';
import ENV from '../config/environment';

export function initialize(owner) {
  if (ENV['ember-cli-head'] && ENV['ember-cli-head']['suppressBrowserRender']) { return true; }

  // clear fast booted head (if any)
  Ember.$('meta[name="ember-cli-head-start"]')
    .nextUntil('meta[name="ember-cli-head-end"] ~')
    .addBack()
    .remove();

  const component = owner.lookup('component:head-layout');
  component.appendTo(document.head);
}

export default {
  name: 'head-browser',
  initialize() {
    if (typeof FastBoot === 'undefined') {
      initialize(...arguments);
    }
  }
};
