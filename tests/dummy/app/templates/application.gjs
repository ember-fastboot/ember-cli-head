import HeadLayout from 'ember-cli-head/components/head-layout';

import RouteTemplate from 'ember-route-template';

export default RouteTemplate(
  <template>
    <HeadLayout />

    <h2 id="title">Welcome to Ember</h2>

    {{outlet}}
  </template>,
);
