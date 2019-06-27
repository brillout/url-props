const assert = require('@brillout/reassert');

module.exports = parseUrl;

function parseUrl(url) {
  assert.usage(url && url.constructor===String, url);

  const urlObject = parse(url);

  const queryString = urlObject.search;
  const query = parseQuery(queryString);

  const urlProps = {
    url,
    origin: urlObject.origin,
    pathname: urlObject.pathname,
    query,
    queryString,
    hash: urlObject.hash,
  };
  assert.internal(urlProps.url===url);
  assert.internal(urlProps.origin===null || urlProps.origin.constructor===String);
  assert.internal(urlProps.pathname.startsWith('/'));
  assert.internal(urlProps.query.constructor===Object);
  assert.internal(urlProps.queryString.constructor===String);
  assert.internal(urlProps.hash.constructor===String);

  Object.defineProperty(urlProps, 'toString', {value: () => JSON.stringify(urlProps)});

  return urlProps;
}

function parse(url) {
  const FAKE_BASE = 'https://i-do-not-exist.example.org';

  const _URL = (
    typeof URL !== 'undefined' ? (
      URL
    ) : (
      eval('require')('url').URL
    )
  );

  const urlInstance = new _URL(url, FAKE_BASE);

  const origin = (
    urlInstance.origin === FAKE_BASE ? (
      null
    ) : (
      urlInstance.origin
    )
  );

  const urlObject = {
    origin,
    pathname: urlInstance.pathname,
    search: urlInstance.search,
    hash: urlInstance.hash,
  };

  return urlObject;
}

function parseQuery(search) {
  const _URLSearchParams = (
    typeof URLSearchParams !== 'undefined' ? (
      URLSearchParams
    ) : (
      eval('require')('url').URLSearchParams
    )
  );
  const urlSearchParams = new _URLSearchParams(search);
  const query = {};
  for (let p of urlSearchParams) {
    const paramName = p[0];
    query[paramName] = urlSearchParams.get(paramName);
  }
  return query;
}
