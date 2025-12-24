import { module, test } from 'qunit';
import {
  setup,
  visit /* mockServer */,
} from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | head component', function (hooks) {
  setup(hooks);

  test('has head-data service content', async function (assert) {
    let res = await visit('/');

    assert.dom('h1').hasText('Hello page');
    assert
      .dom('head meta[property="og:title"]', res.htmlDocument)
      .hasAttribute('content', 'Hello page');
    assert
      .dom('head meta[name="ember-cli-head-start"]', res.htmlDocument)
      .exists({ count: 1 });
    assert
      .dom('head meta[name="ember-cli-head-end"]', res.htmlDocument)
      .exists({ count: 1 });

    res = await visit('/other-page');

    assert.dom('h1').hasText('Other page');
    assert
      .dom('head meta[property="og:title"]', res.htmlDocument)
      .hasAttribute('content', 'Other page');
    assert
      .dom('head meta[name="ember-cli-head-start"]', res.htmlDocument)
      .exists({ count: 1 });
    assert.dom('head meta[name="ember-cli-head-end"]', res.htmlDocument);
  });
});
