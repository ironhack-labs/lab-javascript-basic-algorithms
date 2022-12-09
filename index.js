// Iteration 1: Names and Input
// driver's name
let hacker1 = "David";

console.log(`the driver's name is ${hacker1}`);

// // navigator's name
let hacker2 = "Therese";
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 print to uppercase with spaces in between

let hackerSpace = ""

for (let i=0; i < hacker1.length; i++){
  hackerSpace += hacker1[i].toUpperCase() + " "
}
console.log(hackerSpace)

// with a function
let capitalLetter = "";
function test2(letter) {
  for (let i = 0; i < hacker1.length; i++) {
    capitalLetter += hacker1[i] + " ";
  }
  return capitalLetter;
}
test2(hacker1);
console.log(capitalLetter.toUpperCase());

// 3.1 bis same without a loop
console.log(
  `${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[4].toUpperCase()}`
);

// 3.2 print in reverse order
let hackerReverse = ""

for (let i=hacker1.length -1; i >= 0; i--){
  hackerReverse += hacker1[i]
}
console.log(hackerReverse)

// with a function
let reverseLetter = "";
function test(letter) {
  for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseLetter += hacker1[i] + " ";
  }
  return reverseLetter;
}
test(hacker1);
console.log(reverseLetter);

// 3.2 manual method
console.log(
  `${hacker1[4].toUpperCase()} ${hacker1[3].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[0].toUpperCase()}`
);

// 3.3

if (hacker1.localeCompare(hacker2) == -1 ) {
  console.log (`${hacker1} goes first`)
} else if (hacker1.localeCompare(hacker2) = 0) {
  console.log (`What?! You both have the same name?`)
} else {
  console.log (`Yo, ${hacker2} goes first definitely.`)
}


// other option
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`${hacker1} goes first`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// bonus 1.1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper fringilla libero, ut tempus nibh imperdiet eget. Etiam fermentum porta faucibus. Suspendisse potenti. Curabitur nec vestibulum elit. Fusce massa enim, vulputate eu dui quis, bibendum maximus lectus. Praesent dolor quam, tempor ac ultricies a, lacinia eu neque. Nam dictum, enim eu egestas molestie, nunc risus suscipit lacus, id viverra eros ex quis libero. Quisque nec ullamcorper leo, vel placerat magna. Curabitur at lobortis dui. Nam euismod odio et semper luctus. Integer cursus massa in mi dapibus, id elementum libero lobortis. Aenean commodo id ante vestibulum condimentum. Duis lacus leo, porta ut porttitor in, eleifend et orci. Etiam eu euismod sem. Nam consequat interdum lacinia. Maecenas a sem lacinia, sodales tortor sed, dictum leo. Nullam ac enim arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nulla elit nisi, congue sed mauris vitae, gravida ultricies eros. Curabitur quis sagittis odio, auctor mattis nisi. Nam velit ante, sollicitudin eget nisl ac, vulputate tincidunt turpis. Vivamus dui neque, venenatis non urna eu, tristique bibendum elit. In hac habitasse platea dictumst. Etiam leo neque, tincidunt quis erat nec, euismod cursus risus. Mauris venenatis ut lectus id ullamcorper. Mauris auctor egestas ante, eu bibendum tellus posuere nec. Aliquam eget pellentesque risus. Nunc luctus fermentum enim, et tempus quam euismod eget.'
console.log(longText.split(' ').length);

// bonus 1.2
console.log(longText.split('et').length);

//  bonus 2
let phraseToCheck = "No 'x' in Nixon" //can change the value here
let phraseToLowerCase = phraseToCheck.toLowerCase()
let phraseWithoutComma = phraseToLowerCase.split(",").join('').split(" ").join('').split("!").join('').split("?").join('').split(`'`).join('')

let phraseReversed = ""

for (let i=phraseWithoutComma.length -1; i >= 0; i--){
  phraseReversed += phraseWithoutComma[i]
}
// console.log(phraseReversed) just to check what's coming up with the reversed variable

if (phraseReversed == phraseWithoutComma) {
  console.log ('true')
} else {
  console.log ('wrong')
}