const preprints = `Preprints`;
const brand = `OSF ${preprints}`;

export default {
    global: {
        share: `Share`,
        complete: `Complete`,
        cancel: `Cancel`,
        discard: `Discard changes`,
        back: `Back`,
        prev: `Prev`,
        next: `Next`,
        none: `None`,
        abstract: `Abstract`,
        doi: `DOI`,
        tags: `Tags`,
        search: `Search`,
        preprints,
        brand,
        brand_name: 'OSF',
        retraction_watch_database: `Retraction Watch Database`,
        browse: `Browse`,
        blog: `Blog`,
        title: `Title`,
        added_on: `Added on`,
        add: `Add`,
        restart: `Restart`,
        no_results_found: `No results found.`,
        authors: `Authors`,
        open_science_framework: `Open Science Framework`,
    },
    discover: {
        search: {
            heading: `Preprint Archive Search`,
            paragraph: `powered by`,
            partner: `Partner Repositories`,
            placeholder: `Search preprints...`
        },
        sort_by: `Sort by`,
        main: {
            active_filters: {
                heading: `Active Filters`,
                button: `Clear filters`
            },
            refine: `Refine your search by`,
            providers: `Providers`,
            subject: `Subject`,
            box: {
                paragraph: `Do you want to add your own research as a preprint?`,
                button: `Add your preprint`
            },
            results: {
                of: `of`,
                no_results: `Try broadening your search terms`
            },
            otherRepositories: `Other preprint repositories`,
        }
    },
    index: {
        header: {
            search_retraction_database: `Search retraction database...`,
            powered_by: `Powered by ${brand}`,
        },
        browse: {
            explanation1: `We record instances of scientific retractions from journals and publish them in a comprehensive open database. `,
            explanation2: `We believe that retractions are a real-time window into the self-correcting nature of the scientific process, `,
            explanation3: `and we've learned since starting this project as a `,
            explanation4: `blog `,
            explanation5: `in 2010 that they're far more common than we initially thought.`,
            button: `Browse`

        },
        latest_blog_post: `Latest blog post`,
    },
    'page-not-found': {
        heading: `Page not found`,
        paragraph: {
            line1: `The page you were looking for is not found on the {{brand}} service.`,
            line2: `If this should not have occurred and the issue persists, please report it to`
        },
        go_to: `Go to {{brand}}`
    },
    'page-forbidden': {
        heading: `Forbidden`,
        paragraph: {
            line1: `User has restricted access to this page. If this should not have occurred and the issue persists, please report it to `,
        },
        go_to: `Go to {{brand}}`
    },
    'resource-deleted': {
        heading: `Resource deleted`,
        paragraph: {
            line1: `User has deleted this content. If this should not have occurred and the issue persists, please report it to  `,
        },
        go_to: `Go to {{brand}}`
    },

    components: {
        'preprint-footer-branded': {
            twitter: 'Twitter',
            facebook: 'Facebook',
            instagram: 'Instagram',
            support: `Support`,
            contact: `Contact`
        },
        'preprint-navbar': {
            toggle: `Toggle navigation`
        },
        'preprint-navbar-branded': {
            my_projects: `My OSF Projects`,
            headline: `On the OSF`,
        }
    }
};
