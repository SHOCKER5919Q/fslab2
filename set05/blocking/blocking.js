const fs = require('fs');

console.log('1. Start');
const data = fs.readFileSync('input.txt', 'utf8');          // waits here
console.log('2. File content:', data.trim());
console.log('3. End');
