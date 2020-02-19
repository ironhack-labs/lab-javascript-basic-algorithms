// Iteration 1: Names and Input
let hacker1 = 'Sebastião';
let hacker2 = 'Julia';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longets name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longets name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let newStr = '';
for (let i = 0; i < hacker1.length; i += 1) {
  newStr += hacker1[i].toUpperCase() + ' ';
}
console.log(newStr);
let str2 = '';
for (let i = hacker2.length-1; i >= 0; i -= 1) {
  str2 += hacker2[i];
}
console.log(str2);



// BONUS 1:

let str3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia aliquet vestibulum. In nec mattis tortor, id posuere lacus. In eget molestie sem. Nullam rutrum, nunc ac lobortis dictum, est nisi vestibulum diam, quis rutrum velit mauris ac quam. Nunc vitae pulvinar neque, non pellentesque ante. Morbi ipsum urna, dapibus porta porta non, dignissim sed libero. Pellentesque vitae ornare ipsum, eu gravida diam. Phasellus dictum in magna eu tristique. In varius orci quis dui aliquam, vel ullamcorper arcu gravida. Etiam vulputate turpis sit amet nunc venenatis lobortis. Nullam tellus sapien, maximus in blandit in, pulvinar sit amet purus. Duis accumsan faucibus elit.
Mauris nisi nisi, feugiat vel pellentesque sit amet, auctor sit amet elit. Duis viverra fringilla erat sed imperdiet. Donec placerat orci ac felis fermentum vehicula. Pellentesque feugiat massa orci, sit amet aliquet turpis fringilla aliquam. Suspendisse potenti. Vestibulum mattis dignissim ligula et aliquam. Suspendisse malesuada risus maximus vestibulum sagittis. Cras quis volutpat leo. Donec ac urna volutpat augue laoreet lacinia.
Integer ac vehicula nisl. Aenean id tincidunt quam. Etiam aliquet nisl ante, eget finibus nisl ultrices ut. Donec fermentum orci eu ex iaculis, id eleifend lectus aliquam. Nullam at nunc tellus. Duis sit amet dignissim massa. Aliquam eget semper libero. Phasellus nisl dolor, tempor at elit eu, ultricies finibus lacus.`;

console.log(str3.split(' ').length);

console.log(str3.split(' et ').length - 1);

// BONUS 2:

// let phraseToCheck =  "No 'x' in Nixon";

// let phraseToLowerCase = phraseToCheck.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g,'');

// let reversePhrase = '';

// for (let i = phraseToLowerCase.length - 1; i >= 0; i -= 1) {
//   reversePhrase += phraseToLowerCase[i];
// }

// console.log(phraseToLowerCase === reversePhrase);


// BONUS 2 (de outra forma)

let phraseToCheck =  "A man, a plan, a canal, Panama!";
let newPhrase = '';

for (let i = 0; i < phraseToCheck.length; i += 1) {
  if (phraseToCheck[i] === "'" || phraseToCheck[i] === "," || phraseToCheck[i] === "?" || phraseToCheck[i] === "!" || phraseToCheck[i] === " " || phraseToCheck[i] === '"' || phraseToCheck[i] === ".") {
    continue;
  }
  newPhrase += phraseToCheck[i];
}
phraseToLowerCase = newPhrase.toLowerCase();

let reversePhrase = '';

for (let i = phraseToLowerCase.length - 1; i >= 0; i -= 1) {
  reversePhrase += phraseToLowerCase[i];
}

console.log(phraseToLowerCase === reversePhrase);
