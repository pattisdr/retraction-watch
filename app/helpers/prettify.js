import Ember from 'ember';

// Copied from Ember SHARE
export function prettify([str]) {
    return str.split(/([A-Z][a-z]+)/).filter(x => x).join(' ');
}

export default Ember.Helper.helper(prettify);
