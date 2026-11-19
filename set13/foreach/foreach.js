const subjects = ['OS', 'DBMS', 'DAA', 'Machine Learning', 'FSWD'];

subjects.forEach((item) => {
  console.log(item);
});

console.log('---- with index ----');

subjects.forEach((item, index) => {
  console.log(index + 1 + '. ' + item);
});
