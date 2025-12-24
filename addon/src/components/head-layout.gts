import Component from '@glimmer/component';
import { service } from '@ember/service';

import type Owner from '@ember/owner';

interface HeadLayoutSignature {
  Blocks: {
    default: [];
  };
}

export default class HeadLayout extends Component<HeadLayoutSignature> {
  @service('-document') declare document: Document;

  /**
   * If true, this will tear down any existing head on init of this component.
   * This is useful if there is a head built with fastboot - it will then be torn down when this is initialized in the browser.
   * If you do not want this behavior, you can set this to false.
   * @public
   */
  shouldTearDownOnInit = true;

  constructor(owner: Owner, args: object) {
    super(owner, args);

    if (this.shouldTearDownOnInit) {
      this.#tearDownHead();
    }
  }

  /**
   * Tear down any previous head, if there was one.
   */
  #tearDownHead() {
    if (this.#isFastboot()) {
      return;
    }

    // clear fast booted head (if any)
    const document = this.document;
    const startMeta = document.querySelector(
      'meta[name="ember-cli-head-start"]',
    );
    const endMeta = document.querySelector('meta[name="ember-cli-head-end"]');
    if (startMeta && endMeta) {
      let el = startMeta.nextSibling;
      while (el && el !== endMeta) {
        document.head.removeChild(el);
        el = startMeta.nextSibling;
      }
      document.head.removeChild(startMeta);
      document.head.removeChild(endMeta);
    }
  }

  #isFastboot() {
    return typeof FastBoot !== 'undefined';
  }

  <template>
    {{#in-element this.document.head insertBefore=null}}
      {{! template-lint-disable no-forbidden-elements }}
      <meta name="ember-cli-head-start" content="" />
      {{yield}}
      <meta name="ember-cli-head-end" content="" />
    {{/in-element}}
  </template>
}
