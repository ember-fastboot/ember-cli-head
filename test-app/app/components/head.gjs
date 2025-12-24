import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class Head extends Component {
  @service('head-data') model;

  <template>
    <meta property="og:title" content={{this.model.title}}>
  </template>
}
