import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | head-layout', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let fragment = document.createDocumentFragment();
    this.stuff = fragment;

    await render(hbs`<HeadLayout @headElement={{this.stuff}}/>`);

    assert
      .dom('meta[name="ember-cli-head-start"]', fragment)
      .exists({ count: 1 });
    assert
      .dom('meta[name="ember-cli-head-end"]', fragment)
      .exists({ count: 1 });
  });
});
