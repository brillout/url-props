const assert = require('@brillout/reassert');

module.exports = getUrlProps;

function getUrlProps(url) {
  assert.usage(
    url,
    "You need to provide a `url` when calling `getUrlProps(url)`."
  );

  const urlString = (
    url.constructor===String && url ||
    url.href && url.href.constructor===String && url.href ||
    url.url && url.url.constructor===String && url.url ||
    url.pathname && url.pathname.constructor===String && url.pathname ||
    null
  );

  assert.usage(
    urlString,
    "The `url` you passed to `getUrlProps(url)` should be a URL string or a URL object."
  );

  const urlObject = parse(urlString);

  const queryString = urlObject.search;
  const query = parseQuery(queryString);

  const urlProps = {
    url: urlString,
    href: urlObject.origin && urlString,
    origin: urlObject.origin,
    protocol: urlObject.protocol,
    hostname: urlObject.hostname,
    port: urlObject.port,
    pathname: urlObject.pathname,
    query,
    queryString,
    hash: urlObject.hash,
  };
  assert.internal(urlProps.url===urlString);
  assert.internal(urlProps.href===null || urlProps.href.constructor===String && urlProps.href.startsWith('http'));
  assert.internal(urlProps.protocol===null || urlProps.protocol.constructor===String && urlProps.protocol.startsWith('http'));
  assert.internal(urlProps.origin===null || urlProps.origin.constructor===String && urlProps.origin.startsWith('http'));
  assert.internal(urlProps.pathname.startsWith('/'));

  assert.internal(urlProps.query.constructor===Object);
  assert.internal(urlProps.queryString.constructor===String);
  assert.internal(urlProps.queryString.startsWith('?') || urlProps.queryString==='');

  assert.internal(urlProps.hash.constructor===String);
  assert.internal(urlProps.hash.startsWith('#') || urlProps.hash==='');

  Object.defineProperty(urlProps, 'toString', {value: () => JSON.stringify(urlProps)});

  return urlProps;
}

function parse(urlString) {
  const FAKE_BASE = 'https://i-do-not-exist.example.org';

  const _URL = (
    typeof URL !== 'undefined' ? (
      URL
    ) : (
      eval('require')('url').URL
    )
  );

  const urlInstance = new _URL(urlString, FAKE_BASE);

  const origin = (
    urlInstance.origin === FAKE_BASE ? (
      null
    ) : (
      urlInstance.origin
    )
  );

  const urlObject = {
    origin,
    protocol: null,
    hostname: null,
    port: null,
  };
  [
    origin && 'protocol',
    origin && 'hostname',
    origin && 'port',
    'pathname',
    'search',
    'hash',
  ]
  .filter(Boolean)
  .forEach(urlProp => {
    urlObject[urlProp] = urlInstance[urlProp];
  });

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
