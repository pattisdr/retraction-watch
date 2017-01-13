import Ember from 'ember';
import config from 'ember-get-config';
import Analytics from '../mixins/analytics';

export default Ember.Controller.extend(Analytics, {
    entryTitle: null,
    entryDescription: null,
    init() {
        // Fetch latest retraction watch blog post.

        Ember.$.ajax({
            type: 'GET',
            // url: config.feedURL,
            url: 'https://cors-anywhere.herokuapp.com/http://retractionwatch.com/feed', // TEMPORARY UNTIL CORS ISSUES RESOLVED
            contentType: 'application/rss+xml',
        })
        .then(results => {
            let latestEntry = results.getElementsByTagName('item')[0];
            this.set('entryTitle', latestEntry.getElementsByTagName('title')[0].textContent);
            this.set('entryDescription', latestEntry.getElementsByTagName('description')[0].textContent);
        });
    },
});
