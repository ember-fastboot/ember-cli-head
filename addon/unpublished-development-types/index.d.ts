// Add any types here that you need for local development only.
// These will *not* be published as part of your addon, so be careful that your published code does not rely on them!

import '@glint/environment-ember-template-imports';
import { InElementKeyword } from '@glint/template/-private/keywords';

declare module '@glint/environment-ember-template-imports/globals' {
  export default interface Globals {
    'in-element': InElementKeyword;
  }
}

declare global {
  const FastBoot: object | undefined;
}
