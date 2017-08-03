import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('head-layout', 'Integration | Component | head layout', {
  integration: true
});

test('it renders', function(assert) {
  let fragment = document.createDocumentFragment();
  this.set('stuff', fragment);
  this.render(hbs`{{head-layout headElement=stuff}}`);

  assert.equal(fragment.querySelectorAll('meta[name="ember-cli-head-start"]').length, 1);
  assert.equal(fragment.querySelectorAll('meta[name="ember-cli-head-end"]').length, 1);

});
