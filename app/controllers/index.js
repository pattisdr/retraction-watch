import Ember from 'ember';
import config from 'ember-get-config';
import Analytics from '../mixins/analytics';

export default Ember.Controller.extend(Analytics, {
    entryTitle1: null,
    entryDescription1: null,
    entryTitle2: null,
    entryDescription2: null,
    entryTitle3: null,
    entryDescription3: null,
    attributes: [
        {
            title: 'entryTitle1',
            description: 'entryDescription1',
        },
         {
            title: 'entryTitle2',
            description: 'entryDescription2',
        },
         {
            title: 'entryTitle3',
            description: 'entryDescription3',
        }

    ],
    init() {
        // Fetch latest retraction watch blog post.

        Ember.$.ajax({
            type: 'GET',
            // url: config.feedURL,
            url: 'https://cors-anywhere.herokuapp.com/http://retractionwatch.com/feed', // TEMPORARY UNTIL CORS ISSUES RESOLVED
            contentType: 'application/rss+xml',
        })
        .then(results => {
            let index = 0
            for (const {title, description} of this.get('attributes')) {
                let entry = results.getElementsByTagName('item')[index];
                this.set(title, entry.getElementsByTagName('title')[0].textContent);
                this.set(description, entry.getElementsByTagName('description')[0].textContent);
                index += 1;
            }
        });
    },
});
