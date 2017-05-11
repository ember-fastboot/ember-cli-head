import Ember from 'ember';
import ENV from '../../config/environment';

export function initialize(owner) {
  if (ENV['ember-cli-head'] && ENV['ember-cli-head']['suppressBrowserRender']) { return true; }

  // clear fast booted head (if any)
  let metaStart = document.querySelector('meta[name="ember-cli-head-start"]');
  let metaEnd = document.querySelector('meta[name="ember-cli-head-end"]');
  if (metaStart && metaEnd) {
    let element;
    while ((element = metaStart.nextElementSibling) && element !== metaEnd) {
      element.parentNode.removeChild(element);
    }

    metaStart.parentNode.removeChild(metaStart);
    metaEnd.parentNode.removeChild(metaEnd);
  }

  const component = owner.lookup('component:head-layout');
  component.appendTo(document.head);
}

export default {
  name: 'head-browser',
  initialize: initialize
};
