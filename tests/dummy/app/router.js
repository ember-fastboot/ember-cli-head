import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

export default Router.map(function () {
  this.route('other-page');
});
