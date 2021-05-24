import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HeadComponent extends Component {
  @service('head-data') model;
}
