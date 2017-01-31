import Ember from 'ember';
import config from 'ember-get-config';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
    metrics: Ember.inject.service(),

    didTransition() {
        this._super(...arguments);
        this._trackPage();
    },

    _trackPage() {
        Ember.run.scheduleOnce('afterRender', this, () => {
            const page = document.location.pathname;
            const title = this.getWithDefault('currentRouteName', 'unknown');

            Ember.get(this, 'metrics').trackPage({ page, title });
        });
    }
});

Router.map(function() {
    this.route('page-not-found', {path: '/*bad_url'});
    this.route('index', {path: '/'});
    this.route('page-not-found', {path: 'page-not-found'});
    this.route('discover', {path: 'discover'});
    this.route('detail', {path: '/retraction/:retraction_id'});
});

export default Router;
