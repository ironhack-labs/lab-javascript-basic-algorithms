// part 1
console.log(`Im ready!`);

let hacker1 = `Gabriel`

console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Verena`;

console.log(`The navigator's name is ${hacker2}`);

// part 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}; 

// part 3

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));

if (hacker2.localeCompare(hacker1) === 1) {
  console.log(`The driver's name goes first`)
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else { 
  console.log(`What?! You both have the same name?`)
};

// part Bonus I

let randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem interdum, mattis magna eu, sagittis risus. Morbi et ipsum augue. Vestibulum et mollis purus. Vivamus fringilla placerat dapibus. Nullam ut laoreet justo, quis venenatis metus. Nam sagittis euismod turpis, non dictum nunc imperdiet nec. Mauris id diam in metus sodales posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum faucibus, tortor et gravida posuere, tortor augue tempor diam, vel ultrices nisi leo at ante.

Aenean cursus dapibus vulputate. Nam ac molestie nunc. Phasellus consequat sapien sit amet sodales rhoncus. Integer eu arcu enim. Sed luctus auctor risus, et varius mi malesuada quis. Maecenas suscipit nulla a porta euismod. Maecenas nulla enim, egestas sit amet leo at, elementum mattis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur imperdiet sed justo sed tempus. Pellentesque imperdiet interdum auctor. Sed imperdiet nunc nulla, eget tempor nunc sagittis non.

Nullam cursus cursus ante, vitae efficitur quam semper nec. Nulla posuere maximus vestibulum. Nullam eget sapien at nisi euismod aliquam vitae dignissim augue. Sed vitae suscipit odio. Quisque vel orci nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed interdum velit sed semper pellentesque. Pellentesque quis molestie augue, eu lobortis nisi. Quisque fermentum vehicula lacus ac euismod. Proin egestas odio pulvinar eros cursus, sit amet tempor nisl euismod. Nullam commodo arcu egestas interdum gravida. Suspendisse rutrum odio ac molestie egestas. Cras quis metus rutrum, luctus leo id, sagittis arcu. Cras tempor urna non tellus finibus finibus.`

function WordCount(str) { 
  return str.split(/\s+/).length;
 
}

console.log(WordCount(randomText));




// part Bonus II

function palindrome(str) {
  let clean = /[\W_]/g;
  str = str.toLowerCase().replace(clean, '');
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
return true
}

palindrome("A man, a plan, a canal, Panama!"); 
