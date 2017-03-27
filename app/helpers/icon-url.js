import Ember from 'ember';
import config from 'ember-get-config';

// Builds url to fetch favicon
export function iconUrl(params/*, hash*/) {
    const source = params[0];
    return config.SHARE.baseUrl + source.icon;
}

export default Ember.Helper.helper(iconUrl);
