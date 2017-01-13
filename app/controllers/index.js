import Ember from 'ember';
// import config from 'ember-get-config'; // Restore after CORS issues resolved
import Analytics from '../mixins/analytics';

export default Ember.Controller.extend(Analytics, {
    blogAttributes: [],
    numPosts: 3,
    init() {
        // Fetch latest retraction watch blog posts.
        Ember.$.ajax({
            type: 'GET',
            // url: config.feedURL,
            url: 'https://cors-anywhere.herokuapp.com/http://retractionwatch.com/feed', // TEMPORARY UNTIL CORS ISSUES RESOLVED
            contentType: 'application/rss+xml',
        })
        .then(results => {
            let attributes = [];
            for (var i = 0; i < this.get('numPosts'); i++) {
                let entry = results.getElementsByTagName('item')[i];
                attributes.push({
                    title: entry.getElementsByTagName('title')[0].textContent,
                    description: entry.getElementsByTagName('description')[0].textContent,
                    author: entry.getElementsByTagName('creator')[0].textContent
                });
            }
            this.set('blogAttributes', attributes);
        });
    },
});
