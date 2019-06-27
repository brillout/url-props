Fully-featured URL parsing.
- Works in Node.js.
- Works in the browser.
- Parses URLs with hostname, e.g. `https://example.org/hello/there`, as well as URLs without origin, e.g. `/hello/there`.
- Parses the query string.
- Pretty logging when doing `console.log(parseUrl('https://example.org/hello/there'))`.

Running

~~~js
const parseUrl = require('parse-url'); // npm install @brillout/parse-url

const url = 'hello/there?opt=1#sectionA';

console.log(parseUrl(url));
console.log(parseUrl('https://example.org/'+url));
~~~

prints

~~~js
{
  url: 'hello/there?opt=1#sectionA',
  origin: null,
  pathname: '/hello/there',
  query: {opt: 1},
  queryString: '?opt=1',
  hash: '#sectionA'
}
{ url: 'https://example.org/hello/there?opt=1#sectionA',
  origin: 'https://example.org',
  pathname: '/hello/there',
  query: {opt: 1},
  queryString: '?opt=1',
  hash: '#sectionA'
}
~~~
