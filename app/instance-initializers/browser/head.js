import Ember from 'ember';

export function initialize(instance) {
  // clear fast booted head (if any)
  Ember.$('meta[name="ember-cli-head-start"]')
    .nextUntil('meta[name="ember-cli-head-end"] ~')
    .addBack()
    .remove();
  const container = instance.lookup ? instance : instance.container;
  const renderer = container.lookup('renderer:-dom');
  const component = container.lookup('component:head-layout');
  component.appendTo(renderer._dom.document.head);
}

export default {
  name: 'head-browser',
  initialize: initialize
};
