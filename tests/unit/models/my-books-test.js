import { module, test } from 'qunit';

import { setupTest } from 'book-tracker/tests/helpers';

module('Unit | Model | my books', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('my-books', {});
    assert.ok(model);
  });
});
