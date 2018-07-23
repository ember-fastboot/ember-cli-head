import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/head';

export default Component.extend({
  tagName: '',
  model: service('head-data'),
  layout
});
