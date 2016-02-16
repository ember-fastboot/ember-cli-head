import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('head-layout', 'Integration | Component | head layout', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{head-layout}}`);

  assert.equal(this.$('meta[name="ember-cli-head-start"]').length, 1);
  assert.equal(this.$('meta[name="ember-cli-head-end"]').length, 1);

});
