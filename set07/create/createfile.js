const fs = require('fs');

fs.writeFile('student.txt', 'Name: Saket\nBranch: CSE\n', (err) => {
    if (err) throw err;
    console.log('File created successfully');

    // read it back to prove it worked
    const data = fs.readFileSync('student.txt', 'utf8');
    console.log('File content:\n' + data);
});
