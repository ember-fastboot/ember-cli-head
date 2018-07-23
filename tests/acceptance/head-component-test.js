import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | head component', function(hooks) {
  setupApplicationTest(hooks);

  test('has head-data service content', async function(assert) {
    await visit('/');

    assert.equal(document.querySelector('head meta[property="og:title"]').getAttribute('content'), 'Hello page');

    await visit('/other-page');

    assert.equal(document.querySelector('head meta[property="og:title"]').getAttribute('content'), 'Other page');
  });
});

