const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.writeFile('newfile.txt', 'File created by HTTP server', (err) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('newfile.txt has been created');
  });
}).listen(3000, () => console.log('Server on 3000'));
