// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
//1.2 Print "The driver's name is XXXX".
//1.3 Create a variable hacker2 with the navigator's name.
//1.4 Print "The navigator's name is YYYY".

const hacker1 = 'Cassandre';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Amina';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// The driver has the longest name, it has XX characters. or
// It seems that the navigator has the longest name, it has XX characters. or
// Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

const hacker1Upper = hacker1.toUpperCase();
console.log(hacker1Upper);

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

const lastIndex = hacker2.length - 1;
let hacker2Reversed = "";

for (let i = lastIndex; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

const result = hacker1.localeCompare(hacker2);

if (result === -1){
  console.log(`The driver's name goes first.`);
}
else if (result === 1){
  console.log(`Yo, the navigator goes first definitely.`);
}
else {
  console.log(`What?! You both have the same name?`)
}

/*Generate 3 paragraphs. Store the text in a new string variable named longText.*/

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum pretium lacus. Sed lorem ante, tristique ac libero eu, volutpat sagittis libero. Phasellus in urna sed neque eleifend luctus. Maecenas et ipsum maximus, ornare neque non, sagittis augue. Maecenas vehicula placerat quam, vel mollis elit ornare a. Sed vestibulum, libero id ullamcorper ullamcorper, nunc dolor consequat ante, sit amet placerat lacus justo eget ipsum. Curabitur eget neque nunc. Proin quis orci ante. Vestibulum vitae euismod ante, ultrices faucibus nunc.

Sed lorem lacus, fringilla sed sapien id, dignissim placerat ante. Aenean tellus odio, eleifend ut leo quis, ultrices tristique nisl. Vivamus felis nunc, euismod at rutrum eget, dignissim quis sem. Pellentesque eget erat quis erat vehicula consequat. Etiam ac ullamcorper tortor, ut faucibus libero. Ut ultrices egestas neque et tristique. Duis eget molestie nulla. Aenean non sapien quis urna pellentesque egestas at in ante. Suspendisse potenti. Suspendisse pulvinar imperdiet varius. Pellentesque nisi lectus, volutpat quis viverra at, commodo non turpis. Cras lacus justo, semper ut purus id, egestas tincidunt massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus id leo ut molestie.

Duis vel interdum odio, eget vehicula nunc. Cras nec orci pretium, porttitor velit vel, fermentum libero. Curabitur scelerisque placerat dui, non convallis tellus imperdiet sit amet. Suspendisse ultricies, diam sed cursus eleifend, nisl metus feugiat sem, quis mollis purus dolor id velit. Mauris ultricies ac dui quis ullamcorper. Maecenas luctus quam quis ex ullamcorper, vitae blandit ligula tempor. Praesent condimentum pretium nulla, ac tincidunt enim tempor ut. In rhoncus nisi id diam vulputate, a auctor purus molestie. Aenean ornare ligula id suscipit sodales. Duis eget turpis est. Proin convallis porttitor nisi. Vestibulum vitae lacus quis ipsum elementum venenatis id non ligula. Vestibulum at quam at eros dapibus convallis id quis tortor. Nunc cursus nibh eu maximus elementum. Morbi vel vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..`

/*Make your program count the number of words in the string.*/

const wordCount = longText.split(" ").length;
console.log(wordCount)


/*Make your program count the number of times the Latin word et appears.*/

let count = 0
for (let i = 0; i < longText.length; i++) {
const latinWord  = longText[i] + longText[i + 1]

  if (latinWord === "et") {
    count++;
  }
} 
console.log(count)


/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/


const phraseToCheck = `amor`


const lastIndex2 = phraseToCheck.length - 1;
let phraseReversed = "";

for (let x = lastIndex2; x >= 0; x--) {
  const char2 = phraseToCheck[x];
  phraseReversed += char2;
}
console.log(phraseReversed)
if (phraseToCheck == phraseReversed){
console.log(`the word ${phraseToCheck} is a Palindrome.`)
}
else {
  console.log(`the word is not a Palindrome`)
}

