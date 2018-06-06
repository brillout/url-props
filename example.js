const parseUri = require('.');

const path = 'hello/there?opt=1#sectionA';

console.log(parseUri(path));
console.log(parseUri('https://example.org/'+path));
