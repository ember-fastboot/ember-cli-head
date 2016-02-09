import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | head component');

test('has head-data service content', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('meta[property="og:title"]', 'head').attr('content'), 'Hello page');
  });

  visit('/other-page');
  andThen(function() {
    assert.equal(find('meta[property="og:title"]', 'head').attr('content'), 'Other page');
  });
});
