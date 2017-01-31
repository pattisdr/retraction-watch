import Ember from 'ember';

import ResetScrollMixin from '../mixins/reset-scroll';
import Analytics from '../mixins/analytics';

export default Ember.Route.extend(Analytics, ResetScrollMixin, {
    actions: {
        search(q) {
            let route = 'discover';
            this.transitionTo(route, { queryParams: { q: q } });
        }
    }
});
