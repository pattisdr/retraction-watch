import Ember from 'ember';
import DetailMixin from 'retraction-watch/mixins/detail';
import { module, test } from 'qunit';

module('Unit | Mixin | detail');

// Replace this with your real tests.
test('it works', function(assert) {
  let DetailObject = Ember.Object.extend(DetailMixin);
  let subject = DetailObject.create();
  assert.ok(subject);
});
