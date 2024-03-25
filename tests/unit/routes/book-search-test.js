import { module, test } from 'qunit';
import { setupTest } from 'book-tracker/tests/helpers';

module('Unit | Route | book-search', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:book-search');
    assert.ok(route);
  });
});
