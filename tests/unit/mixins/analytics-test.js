import Ember from 'ember';
import Analytics from 'retraction-watch/mixins/analytics';
import { module, test } from 'qunit';

module('Unit | Mixin | analytics');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnalyticsMixinObject = Ember.Object.extend(Analytics);
  let subject = AnalyticsMixinObject.create();
  assert.ok(subject);
});
