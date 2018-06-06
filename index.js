const assert = require('reassert');
const assert_usage = assert;

module.exports = parseUri;

function parseUri(uri) {
    assert_usage(uri && uri.constructor===String, uri);

    const FAKE_BASE = 'https://i-do-not-exist.example.org';

    const _URL = (
        typeof URL !== 'undefined' ? (
            URL
        ) : (
            eval('require')('url').URL
        )
    );

    const url_object = new _URL(uri, FAKE_BASE);

    const origin = (
        url_object.origin === FAKE_BASE ? (
            null
        ) : (
            url_object.origin
        )
    );

    const url = {
        uri,
        origin,
        pathname: url_object.pathname,
        search: url_object.search,
        hash: url_object.hash,
    };

    Object.defineProperty(url, 'toString', {value: () => JSON.stringify(url)});

    validateUrl(url);

    return url;
}

function validateUrl(url) {
    assert(url && url.constructor===Object, url);
    assert(url.pathname && url.pathname.constructor===String && url.pathname.startsWith('/'), url);
}
