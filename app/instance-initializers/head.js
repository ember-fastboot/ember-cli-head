import ENV from '../config/environment';

export function initialize(owner) {
  if (ENV['ember-cli-head'] && ENV['ember-cli-head']['suppressBrowserRender']) { return true; }

  // clear fast booted head (if any)
  let startMeta = document.querySelector('meta[name="ember-cli-head-start"]')
  let endMeta = document.querySelector('meta[name="ember-cli-head-end"]')
  if (startMeta && endMeta) {
    let el = startMeta.nextSibling
    while(el && el !== endMeta) {
      document.head.removeChild(el);
      el = startMeta.nextSibling;
    }
    document.head.removeChild(startMeta);
    document.head.removeChild(endMeta);
  }

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
