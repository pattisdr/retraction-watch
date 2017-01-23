import Ember from 'ember';
import Analytics from '../mixins/analytics';

let filterQueryParams = ['tags', 'sources', 'publishers', 'funders', 'institutions', 'organizations', 'language', 'contributors', 'type'];

export default Ember.Controller.extend(Analytics, {
    // Possible query parameters for retraction watch
    i18n: Ember.inject.service(),

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
            { key: 'sources', title: this.get('i18n').t('discover.main.source'), component: 'search-facet-locked', locked_items: ['PubMed Central']},
            { key: 'date', title: this.get('i18n').t('discover.main.date'), component: 'search-facet-daterange' },
            { key: 'type', title: this.get('i18n').t('discover.main.type'), component: 'search-facet-locked', locked_items: ['Retraction']},
            { key: 'tags', title: this.get('i18n').t('discover.main.tag'), component: 'search-facet-typeahead', type: 'tag' },
            { key: 'publishers', title: this.get('i18n').t('discover.main.publisher'), component: 'search-facet-typeahead', type: 'publisher' },
            { key: 'funders', title: this.get('i18n').t('discover.main.funder'), component: 'search-facet-typeahead', type: 'funder' },
            { key: 'institutions', title: this.get('i18n').t('discover.main.institution'), component: 'search-facet-typeahead', type: 'institution' },
            { key: 'organizations', title: this.get('i18n').t('discover.main.organization'), component: 'search-facet-typeahead', type: 'organization' },
            { key: 'language', title: this.get('i18n').t('discover.main.language'), component: 'search-facet-language' },
            { key: 'contributors', title: this.get('i18n').t('discover.main.people'), component: 'search-facet-typeahead', type: 'person' },
        ];
    }),
    // Locked portion of query for Retraction Watch
    lockedParams: {'sources': 'PubMed Central', 'types': 'retraction'},

    // Sorting options for retraction watch
     sortOptions: Ember.computed(function() {
         return  [{
            display: this.get('i18n').t('discover.sort.relevance'),
            sortBy: ''
         }, {
            display: this.get('i18n').t('discover.sort.date_published_desc'),
            sortBy: '-date_published'
         }, {
            display: this.get('i18n').t('discover.sort.date_published_asc'),
            sortBy: 'date_published'
         }];
     })
});


