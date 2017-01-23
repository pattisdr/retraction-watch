import Ember from 'ember';
// import config from 'ember-get-config'; // Restore after CORS issues resolved
import Analytics from '../mixins/analytics';

// Push all blog categories into a single array
function getCategories(entry) {
    const categories = entry.getElementsByTagName('category');
    const categoryArray = [];
    for (const category of categories) {
        categoryArray.push(category.textContent);
    }
    return categoryArray;
}

// Extracts blog description, removing repetitive lines @ end of blog post
function getDescription(entry) {
    const descriptionXMLString = entry.getElementsByTagName('description')[0].textContent;
    const parser = new DOMParser();
    const doc = parser.parseFromString(descriptionXMLString, 'text/xml');

    let description = doc.getElementsByTagName('p')[0].childNodes[1].textContent; //Get parse error here, maybe not reliable?
    if (description.includes('[…]')) {
        return description.replace('[…]', '');
    }
    return description;
}

export default Ember.Controller.extend(Analytics, {
    blogAttributes: [],
    blogError: false,
    numPosts: 3, // Number of blog posts to be fetched and displayed on index page
    init() {
        // Fetch latest retraction watch blog posts.
        Ember.$.ajax({
            type: 'GET',
            // url: config.feedURL,
            url: 'https://cors-anywhere.herokuapp.com/http://retractionwatch.com/feed', // TEMPORARY UNTIL CORS ISSUES RESOLVED
            contentType: 'application/rss+xml',
            error: (() => {
                this.set('blogError', true); // If blog posts cannot be loaded
            })
        })
        .then(results => {
            let attributes = [];
            for (var i = 0; i < this.get('numPosts'); i++) {
                const entry = results.getElementsByTagName('item')[i];

                // Extract pieces from blog feed
                attributes.push({
                    title: entry.getElementsByTagName('title')[0].textContent,
                    description: getDescription(entry),
                    author: entry.getElementsByTagName('creator')[0].textContent,
                    link: entry.getElementsByTagName('link')[0].textContent,
                    date: entry.getElementsByTagName('pubDate')[0].textContent,
                    categories: getCategories(entry)
                });
            }
            this.set('blogAttributes', attributes);
        });
    },
});
