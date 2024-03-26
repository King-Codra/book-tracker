import { module, test } from 'qunit';
import { setupTest } from 'book-tracker/tests/helpers';

module('Unit | Service | book-fetch-fake-api', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:book-fetch-fake-api');
    assert.ok(service);
  });
});
