const parseUrl = require('.');

console.log(parseUrl('http://localhost:3000/hi'));
console.log(parseUrl('hello/there?opt=1#sectionA'));
