import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-links', 'Integration | Component | section links', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('data', [
        {
            host: "pubmedcentral.nih.gov",
            scheme: "oai",
            uri: "oai://pubmedcentral.nih.gov/5207198"
        }
    ]);

    this.render(hbs`{{section-links
        data=data
    }}`);

    assert.equal(this.$().text().trim(), 'pubmedcentral.nih.gov');

});
