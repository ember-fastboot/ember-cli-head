import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | head component', function(hooks) {
  setupApplicationTest(hooks);

  test('has head-data service content', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello page');
    assert.dom('head meta[property="og:title"]', document).hasAttribute('content', 'Hello page');

    await visit('/other-page');

    assert.dom('h1').hasText('Other page');
    assert.dom('head meta[property="og:title"]', document).hasAttribute('content', 'Other page');
  });
});
