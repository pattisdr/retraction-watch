import Ember from 'ember';

/**
 * Overrides shareDetailURL helper - Generates link to Retraction detail page
 * instead of SHARE detail page
 *
 * @method shareDetailURL
 * @param {String} type of SHARE resource
 * @param {String} id of SHARE resource
 * @return {String} Returns Retraction detail URL
 */
export function shareDetailURL(params/*, hash*/) {
    const id = params[1];
    return `/retraction/${id}`;
}

export default Ember.Helper.helper(shareDetailURL);
