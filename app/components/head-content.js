import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import layout from '../templates/head';
import { setComponentTemplate } from '@ember/component';

export default class HeadContent extends Component {
  @service('head-data') model
};

setComponentTemplate(layout, HeadContent);
