import Ember from 'ember';

// COPIED FROM EMBER-SHARE
export default Ember.Component.extend({
    init() {
        this._super(...arguments);
    },

    actions: {
        facetChanged(key, facet, value) {
            let filters = this.get('filters');
            filters.set(key, facet);
            this.sendAction('updateParams', key, value);
            this.sendAction('onChange', filters);
        }
    }
});
