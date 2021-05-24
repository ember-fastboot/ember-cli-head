import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  headData: service(),
  afterModel() {
    set(this, 'headData.title', 'Hello page');
  },
});
