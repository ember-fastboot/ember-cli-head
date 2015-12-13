import Ember from 'ember';
import layout from '../templates/head';

export default Ember.Component.extend({
  tagName: '',
  model: Ember.inject.service('head-data'),
  layout
});
