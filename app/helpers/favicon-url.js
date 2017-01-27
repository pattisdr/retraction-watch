import Ember from 'ember';
import config from 'ember-get-config';

// Builds url to fetch favicon
export function faviconUrl(params/*, hash*/) {
    const source = params[0];
    return config.SHARE.baseUrl + source.favicon;
}

export default Ember.Helper.helper(faviconUrl);
