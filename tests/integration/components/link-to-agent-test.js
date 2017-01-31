import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to-agent', 'Integration | Component | link to agent', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('agent', {
            id: "12345",
            name: "Sally Ride",
            type: "Person"
        }
    );

    this.render(hbs`{{link-to-agent
        agent=agent
    }}`);

    assert.equal(this.$().text().trim(), 'Sally Ride');
});
