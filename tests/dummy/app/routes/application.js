import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default class extends Route {
  @service headData;
  afterModel() {
    set(this, 'headData.title', 'Hello page');
  }
}
