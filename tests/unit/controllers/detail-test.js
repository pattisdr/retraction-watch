import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:detail', 'Unit | Controller | detail', {
  // Specify the other units that are required for this test.
  needs: ['service:metrics']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
