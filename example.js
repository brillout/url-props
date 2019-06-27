const parseUrl = require('.');

const url = 'hello/there?opt=1#sectionA';

console.log(parseUrl(url));
console.log(parseUrl('https://example.org/'+url));
