import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-related-agents', 'Integration | Component | section related agents', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('data', [{
            id: "12345",
            name: "Sally Ride",
            type: "Person"
        }]
    );

    this.render(hbs`{{section-related-agents data=data}}`);

    assert.equal(this.$().text().trim(), 'Sally Ride');

});
