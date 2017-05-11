import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { findAll } from 'ember-native-dom-helpers';

moduleForComponent('head-layout', 'Integration | Component | head layout', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{head-layout}}`);

  assert.equal(findAll('meta[name="ember-cli-head-start"]').length, 1);
  assert.equal(findAll('meta[name="ember-cli-head-end"]').length, 1);
});
