import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('section-sources', 'Integration | Component | section sources', {
  integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('model', {
        sources: [{
            favicon: "/static/gov.pubmedcentral/img/favicon.ico",
            id: "gov.pubmedcentral",
            title: "PubMed Central"
        }]
    });

    this.render(hbs`{{section-sources
        model=model
    }}`);

    assert.equal(this.$().text().trim(), 'PubMed Central');

});
