import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-to-work', 'Integration | Component | link to work', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('work', {
        type: 'Article',
        title: 'The Earth is Not Flat'
    });
    this.render(hbs`{{link-to-work
        work=work
    }}`);

    assert.equal(this.$().context.innerText, '[Article] The Earth is Not Flat');
});
