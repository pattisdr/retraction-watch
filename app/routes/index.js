import Ember from 'ember';

import ResetScrollMixin from '../mixins/reset-scroll';
import Analytics from '../mixins/analytics';

export default Ember.Route.extend(Analytics, ResetScrollMixin, {
    actions: {
        search(q) {
            let route = 'discover';

            if (this.get('theme.isProvider'))
                route = `provider.${route}`;

            this.transitionTo(route, { queryParams: { q: q } });
        }
    }
});
