import Ember from 'ember';
import Analytics from '../mixins/analytics';

let filterQueryParams = ['tags', 'sources', 'publishers', 'funders', 'institutions', 'organizations', 'language', 'contributors', 'type'];

export default Ember.Controller.extend(Analytics, {
    // Possible query parameters for retraction watch
    queryParams:  Ember.computed(function() {
        let allParams = ['q', 'start', 'end', 'sort', 'page'];
        allParams.push(...filterQueryParams);
        return allParams;
    }),
    q: '',
    tags: '',
    sources: '',
    publishers: '',
    funders: '',
    institutions: '',
    organizations: '',
    language: '',
    contributors: '',
    start: '',
    end: '',
    type: '',
    sort: '',

    // Filters displayed on left-hand pane of discover page
    facets: Ember.computed(function() {
        return [
            { key: 'sources', title: 'Source', component: 'search-facet-locked', locked_items: ['PubMed Central']},
            { key: 'date', title: 'Date', component: 'search-facet-daterange' },
            { key: 'type', title: 'Type', component: 'search-facet-locked', locked_items: ['Retraction']},
            { key: 'tags', title: 'Tag', component: 'search-facet-typeahead', type: 'tag' },
            { key: 'publishers', title: 'Publisher', component: 'search-facet-typeahead', type: 'publisher' },
            { key: 'funders', title: 'Funder', component: 'search-facet-typeahead', type: 'funder' },
            { key: 'institutions', title: 'Institution', component: 'search-facet-typeahead', type: 'institution' },
            { key: 'organizations', title: 'Organization', component: 'search-facet-typeahead', type: 'organization' },
            { key: 'language', title: 'Language', component: 'search-facet-language' },
            { key: 'contributors', title: 'People', component: 'search-facet-typeahead', type: 'person' },
        ];
    }),
    // Locked portion of query for Retraction Watch
    lockedQueryBody: [
        {
            "term": {
                "sources.raw": "PubMed Central"
            }
        },
        {
            "term": {
                "types.raw": "retraction"
            }
        }
    ],
    // Sorting options for retraction watch
     sortOptions: [{
            display: 'Relevance',
            sortBy: ''
        }, {
            display: 'Date Published (Desc)',
            sortBy: '-date_published'
        }, {
            display: 'Date Published (Asc)',
            sortBy: 'date_published'
        }]
});
