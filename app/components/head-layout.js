import Ember from 'ember';
import layout from 'ember-cli-head/templates/components/head-layout';

export default Ember.Component.extend({
  tagName: '',
  headElement: Ember.computed(function() {
    let documentService = Ember.getOwner(this).lookup('service:-document');
    return documentService.head;
  }),
  layout
});
