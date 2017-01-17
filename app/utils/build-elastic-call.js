import config from 'ember-get-config';


export default function buildElasticCall() {
    return config.SHARE.searchUrl;
}
