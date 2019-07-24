const getUrlProps = require('.');

console.log(getUrlProps('http://localhost:3000/hi'));
console.log(getUrlProps('hello/there?opt=1#sectionA'));
