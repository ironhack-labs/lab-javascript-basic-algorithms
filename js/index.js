// Iteration 1: Names and Input
const hacker1 = prompt(`Driver's name is:`);
console.log(`The driver's name is ${hacker1}`);
const hacker2 = prompt(`Provide navigator's name:`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  };

// Iteration 3: Loops

for (value of hacker1.toUpperCase()) {
    console.log(value);
};
  
let navigator = "";
for (i=0; i<hacker2.length; i++) {
    navigator += hacker2[hacker2.length -i-1];
};
console.log(navigator);
  
if (hacker1<hacker2) {
    console.log(`The drive's name goes first`);
} else if(hacker1>hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`);
};

//Bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus leo, at sagittis elit pharetra eu. Etiam hendrerit lacus nec erat tincidunt, quis convallis erat semper. Curabitur tincidunt faucibus turpis. Sed diam dolor, varius vitae feugiat a, pellentesque eu nisi. Aliquam enim erat, lacinia non rutrum a, iaculis eu arcu. Fusce ac commodo ante. Vestibulum at pharetra ante. Duis ut porttitor nisl. Aliquam semper nec purus sed lobortis. Aenean varius eu diam eu tristique. Suspendisse eu tellus ut risus dignissim ornare in eget lorem.

In neque augue, scelerisque in semper maximus, placerat vel dui. Donec dignissim urna ipsum, vitae rutrum mauris lacinia congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in libero mauris. In sagittis non leo et molestie. Proin eget mauris libero. Cras ultrices vel sapien nec malesuada. Integer tempor facilisis mattis. Etiam sagittis mauris eget eros interdum vulputate. Maecenas eget sollicitudin odio, id congue arcu.

Ut quis ante maximus mi elementum lacinia vitae eget nulla. Proin tincidunt luctus dui. Vivamus vitae accumsan nunc. Proin eu leo sem. Aenean ornare, tellus blandit finibus dignissim, mi augue ornare purus, eu convallis lectus libero sit amet massa. Nam non suscipit augue, sed facilisis mi. Fusce finibus bibendum volutpat. Quisque a vulputate tortor, id feugiat nulla. Quisque ullamcorper gravida lectus, in ullamcorper libero auctor vitae. Nam eget rutrum tellus. Praesent quis posuere risus. Morbi nisl metus, tempus eget iaculis porttitor, volutpat id eros. Mauris vel leo sit amet tellus ultrices rutrum. In pulvinar tellus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec diam rhoncus, tristique diam eget, aliquam nibh.`;

/* Considering that we have 3 words that
don't have a " " next to them due to the
number of paragraphs, I will start counting
3 words
*/

let countWords = 3

for (i=0; i<paragraph.length;i++) {
  if (paragraph[i]===" ") {
    countWords += 1
  };
};

console.log(`The number of words in the paragraph are ${countWords}`);

//Bonus 2


const phraseToCheck =prompt(`What phrase do you want to check?`);

let cleanPhrase = ""

for (i=0;i<phraseToCheck.length;i++) {
  if (phraseToCheck[i] !== "," && phraseToCheck[i] !== " " && phraseToCheck[i] !== "." && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "?" && phraseToCheck[i] !== `'` && phraseToCheck[i] !== `"`) {
    cleanPhrase += phraseToCheck[i].toUpperCase();
  };
};

let backwardsPhrase = "";
for (i=0;i<cleanPhrase.length;i++) {
  backwardsPhrase += cleanPhrase[cleanPhrase.length -i-1];
};

if (cleanPhrase === backwardsPhrase) {
  console.log(`The phrase is a palindrome`);
} else {
  console.log(`The phrase pitifully is not a palindrome`);
};
