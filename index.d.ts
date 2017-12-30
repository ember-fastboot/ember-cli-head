declare module 'ember-cli-head/services/head-data' {
  import Service from '@ember/service';
  export default Service;
}

declare module 'ember' {
  import HeadDataService from 'ember-cli-head/services/head-data';
  namespace Ember {
    interface Route {
      headData: HeadDataService;
    }
  }
}
