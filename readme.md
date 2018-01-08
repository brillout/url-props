Parses URIs.

Running

~~~js
const parseUri = require('parse-uri'); // npm install @atto/parse-uri

const path = 'hello/there?opt=1#sectionA';

console.log(parseUri(path));
console.log(parseUri('https://example.org/'+path));
~~~

prints

~~~js
{ origin: null,
  pathname: '/hello/there',
  search: '?opt=1',
  hash: '#sectionA' }
{ origin: 'https://example.org',
  pathname: '/hello/there',
  search: '?opt=1',
  hash: '#sectionA' }
~~~
