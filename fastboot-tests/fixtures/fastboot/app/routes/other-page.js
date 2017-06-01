import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  headData: Ember.inject.service(),
  afterModel() {
    set(this, 'headData.title', "Other page");
  }
});
