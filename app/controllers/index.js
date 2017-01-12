import Ember from 'ember';
import config from 'ember-get-config';
import Analytics from '../mixins/analytics';

export default Ember.Controller.extend(Analytics, {
    blog: null,
    init() {
        // Fetch latest retraction watch blog post.

        Ember.$.ajax({
            type: 'GET',
            url: config.feedURL,
            contentType: 'application/rss+xml',
            crossDomain: true,
            xhrFields: {withCredentials: true}
        })
        .then(results => {
          this.set('blog', results); // Expand this once CORS issues resolved
        });
    },
});
