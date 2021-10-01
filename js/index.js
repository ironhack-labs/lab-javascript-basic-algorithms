// Iteration 1: Names and Input

let hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alejandro"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

/* 3.1 Print all the characters of the driver's name,
separated by a space and in capitals i.e. "J O H N" */

let hacker1New = ""

for (let i=0; i<hacker1.length; i++) {
  hacker1New += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1New)

/* 3.2 Print all the characters of the navigator's name,
in reverse order. i.e. "nhoJ" */

// Option A:

let hacker2Reversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

// Option B:

let reversedHacker2 = ""

for (const key of hacker2) {
  reversedHacker2 = key + reversedHacker2
}
console.log (reversedHacker2)

/* 3.3 Depending on the lexicographic
order of the strings */

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`)
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`);
}

// BONUS 1:

/* 
1. Make your program count the number of words in the string.
2. Make your program count the number of times the Latin word et appears.
*/ 

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in erat tincidunt ligula imperdiet lacinia. Aenean pulvinar ornare rutrum. Phasellus vel velit egestas, efficitur augue non, efficitur tortor. Donec ullamcorper facilisis augue. Ut vitae nisl lorem. Nulla id lacinia eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque laoreet mi in sapien sodales luctus. Duis sed ligula neque.
Nullam ultricies leo a dolor dapibus, eu fringilla lectus volutpat. Phasellus tincidunt dolor vitae leo vehicula porta. Praesent et lacus luctus, tincidunt ipsum eu, fringilla quam. Duis ut vestibulum velit. Sed ac nisi eu risus pellentesque molestie. Cras at venenatis nulla. Nam faucibus magna dolor, in ornare lorem pretium ut. Nulla aliquam tempus neque vitae rutrum. Donec luctus ac tortor eu convallis. Sed aliquam ipsum vel mattis volutpat.
Suspendisse et lorem condimentum, sodales ante at, malesuada felis. Integer vitae lectus quis orci maximus auctor. Sed pellentesque diam elit. Proin sit amet tempus enim, varius vulputate ante. Donec vel nisi dapibus sem viverra blandit eu non neque. Aenean mauris odio, molestie at dignissim eget, vulputate vitae metus. Nam maximus augue sed massa pharetra, nec sollicitudin diam viverra. Pellentesque tellus nibh, consectetur in fermentum vel, pharetra vehicula nibh. Duis at nibh nec elit venenatis elementum. Duis gravida elementum ultrices. Nullam sed varius risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`

// POINT 1

/* Count the number of words in the string */

// Option A: "The lazy (easy) way"

console.log("Total words:",lorem.split(' ').length);

// Option B:

let words = 0
for (let key of lorem) {
  if (key === " ")
  words++;
}
// +1 character of last word.
words++;
console.log(`Total words: ${words}`);

// POINT 2

/*  Count the number of times the Latin word et appears. */

let count = 0;

for (i = 0; i <= lorem.length; i++) {
  
  let et =
    lorem[i] === "e" && lorem[i + 1] === "t" &&
    lorem[i - 1] === " " && lorem[i + 2] === " ";
  if (et) {
    count++;
  }
}
console.log(`The Latin word 'et' appears: ${count} times.`)

// BONUS 2

/* Check if the value we assigned to this variable is a Palindrome */

let phraseToCheck = "Amor, Roma"
let phraseLowered = phraseToCheck.toLowerCase()
let finalPhrase = ""
let phraseReversed = ""

for (let key of phraseLowered){
if (key === " " || key === "," || key === "." || key === "!" || key === "?" || key === `'`){
continue;
} else {
finalPhrase += key
}
}

for (let key of finalPhrase){
phraseReversed = key + phraseReversed;
}

if (finalPhrase === phraseReversed){
  console.log('The phrase is a Palindrome!')
} else {
  console.log('The phrase is NOT a Palindrome')
}