import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:detail', 'Unit | Route | detail', {
  // Specify the other units that are required for this test.
    needs: ['service:metrics']
});

test('it exists', function(assert) {
    Ember.run(() =>{
         let route = this.subject();
         assert.ok(route);
    });
});
