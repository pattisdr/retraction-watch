import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-work-related-works', 'Integration | Component | section work related works', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('data', [{
        type: 'Retracts',
        related: {
            id: "12345",
            title: "Terrible paper",
            type: "CreativeWork"
        }
    }]);

    this.render(hbs`{{section-work-related-works
        data=data
    }}`);

    assert.equal(this.$().text().trim(), 'This Work Retracts [Creative Work] Terrible paper');

});
