import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { set } from '@ember/object';

export default class extends Route {
  @service headData;
  afterModel() {
    set(this, 'headData.title', 'Other page');
  }
}
