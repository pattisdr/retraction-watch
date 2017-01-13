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
                let descriptionXMLString = entry.getElementsByTagName('description')[0].textContent,
                    parser = new DOMParser(),
                    doc = parser.parseFromString(descriptionXMLString,"text/xml");

                attributes.push({
                    title: entry.getElementsByTagName('title')[0].textContent,
                    description: doc.getElementsByTagName('p')[0].childNodes[1].textContent, //Get parse error here, not reliable.
                    author: entry.getElementsByTagName('creator')[0].textContent,
                    link: entry.getElementsByTagName('link')[0].textContent,
                    date: entry.getElementsByTagName('pubDate')[0].textContent
                });
            }
            this.set('blogAttributes', attributes);
        });
    },
});
