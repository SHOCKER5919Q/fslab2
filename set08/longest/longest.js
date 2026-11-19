function longestWord(str) {
    const words = str.split(' ');
    let longest = '';

    for (let w of words) {
      if (w.length > longest.length) longest = w;
    }
    return longest;
}

console.log(longestWord('I am studying full stack development'));
console.log(longestWord('Vasavi College of Engineering'));
