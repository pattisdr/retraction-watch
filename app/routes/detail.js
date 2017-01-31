import Ember from 'ember';
import config from 'ember-get-config';
import { FRAGMENT_MAP } from '../utils/mappings';
import ResetScrollMixin from '../mixins/reset-scroll';
import Analytics from '../mixins/analytics';

// Adapted from Ember-SHARE > app/routes/detail.js
export default Ember.Route.extend(ResetScrollMixin, Analytics, {
    model(params) {
        return Ember.$.post(`${config.SHARE.apiUrl}/graph/`, {
                variables: '',
                query: `query {
                    shareObject(id: "${params.retraction_id}") {
                      id,
                      type: __typename,
                      types,
                      extra,
                      sources { id, title, favicon },

                      ${Object.keys(FRAGMENT_MAP).map((type) => `...on ${type} ${FRAGMENT_MAP[type]}`).join('\n')}
                  }
              }`

        }).then(data => {
            if (data.errors) {
                throw Error(data.errors[0].message);
            }
            return data.data.shareObject;
        });
    },
    afterModel(model) {
        // Enforces Retraction type on model
        if (model.type !== 'Retraction') {
            this.send('error');
        }
    },
    actions: {
        error() {
            return this.intermediateTransitionTo('page-not-found');
        }
    }
});
