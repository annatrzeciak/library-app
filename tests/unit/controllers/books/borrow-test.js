import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | books/borrow', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:books/borrow');
    assert.ok(controller);
  });
});
