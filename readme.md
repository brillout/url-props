<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
Fully-featured URL parsing.
- Works in Node.js.
- Works in the browser.
- Parses URLs with hostname, e.g. `https://example.org/hello/there`, as well as URLs without origin, e.g. `/hello/there`.
- Parses the query string.
- Pretty logging when doing `console.log(parseUrl('https://example.org/hello/there'))`.

Running

~~~js
// ./example.js

const getUrlProps = require('@brillout/url-props');

console.log(getUrlProps('http://localhost:3000/hi'));
console.log(getUrlProps('hello/there?opt=1#sectionA'));
~~~

prints

~~~js
{
  url: 'http://localhost:3000/hi',
  href: 'http://localhost:3000/hi',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  hostname: 'localhost',
  port: '3000',
  pathname: '/hi',
  query: {},
  queryString: '',
  hash: ''
}
{
  url: 'hello/there?opt=1#sectionA',
  href: null,
  origin: null,
  protocol: null,
  hostname: null,
  port: null,
  pathname: '/hello/there',
  query: { opt: '1' },
  queryString: '?opt=1',
  hash: '#sectionA'
}
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
