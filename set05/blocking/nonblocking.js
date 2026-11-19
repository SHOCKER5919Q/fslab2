const fs = require('fs');

console.log('1. Start');
fs.readFile('input.txt', 'utf8', (err, data) => {           // does not wait
  console.log('3. File content:', data.trim());
});
console.log('2. End');
