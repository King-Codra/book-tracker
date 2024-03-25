import { module, test } from 'qunit';
import { setupTest } from 'book-tracker/tests/helpers';

module('Unit | Route | dive-back-in', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dive-back-in');
    assert.ok(route);
  });
});
