import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-work-related-works', 'Integration | Component | section work related works', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{section-work-related-works}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#section-work-related-works}}
      template block text
    {{/section-work-related-works}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
