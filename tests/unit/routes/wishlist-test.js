import { module, test } from 'qunit';
import { setupTest } from 'book-tracker/tests/helpers';

module('Unit | Route | wishlist', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:wishlist');
    assert.ok(route);
  });
});
