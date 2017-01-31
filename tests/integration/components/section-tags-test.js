import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-tags', 'Integration | Component | section tags', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('model', {
       tags: [{
           name: "Test-tag"
       }]
    });

    this.render(hbs`{{section-tags
        model=model
    }}`);

    assert.equal(this.$().text().trim(), 'Test-tag');

});
