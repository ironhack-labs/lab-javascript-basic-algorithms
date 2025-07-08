// Iteration 1: Names and Input
let hacker1 = "John" 
console.log("The driver's name is " + hacker1)

let hacker2 = "Mary"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has" + hacker2.length + "characters")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops

/*
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
*/
let spacedName = hacker1.toUpperCase().split('').join(' ');
console.log(spacedName);

/*
3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
*/
let reversedName = hacker2.split('').reverse().join('');
console.log(reversedName);


/*
3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum venenatis diam quis suscipit. Duis ac ullamcorper risus. Vivamus sit amet fringilla mi. Pellentesque et sagittis arcu, ac sollicitudin eros. Vivamus vel lacinia nunc. Pellentesque sed scelerisque quam. Sed turpis metus, porta eget erat sed, feugiat suscipit magna. Phasellus tristique massa vitae augue imperdiet egestas. Donec ac interdum diam. Aliquam eleifend id eros nec luctus. Integer pretium lorem vel diam tristique, id maximus arcu sodales. Nullam accumsan, erat at fermentum rutrum, felis nibh scelerisque nulla, in vehicula ipsum nulla vestibulum quam. Etiam faucibus nisi velit, in aliquet mauris lacinia id. Maecenas ante turpis, molestie sit amet massa nec, convallis dictum sapien. Sed commodo magna eu quam pretium porta. Donec et mattis eros. Mauris eu elit id orci euismod mattis. Maecenas ipsum ante, aliquam nec nunc ac, tristique rutrum lectus. Praesent sed mi ornare, sodales dolor auctor, ullamcorper nibh. Vestibulum eget diam pulvinar, pellentesque sem eget, aliquam dolor. Proin suscipit orci lacus, vel sollicitudin leo porta in. Pellentesque libero massa, accumsan sed nibh vestibulum, euismod tempor nibh. Duis cursus nulla ut metus ornare eleifend. Cras cursus urna lectus, sit amet facilisis neque auctor non. Morbi ullamcorper leo et lorem commodo tempus. Nam interdum accumsan interdum. Curabitur et aliquam odio. Maecenas imperdiet neque nec odio auctor rutrum quis vel justo. Mauris commodo quis mi id posuere. Donec orci enim, lobortis ac velit in, dapibus porttitor nulla. Phasellus lobortis mattis diam. Proin vel nibh nunc. Donec venenatis metus vel pulvinar mollis. Mauris aliquam odio sed ligula vulputate vestibulum.";

let cleanText = longText
  .replace(/[.,!?;:]/g, '')
  .toLowerCase(); 

let words = cleanText.trim().split(' ');
let wordCount = words.length;

console.log("Number of words: ", wordCount);

let etCount = 0;
for (let word of words) {
  if (word == "et") {
    etCount++;
  }
}

console.log("Number of 'et':", etCount);

// bonus 2

let phraseToCheck = "Amor, Roma"
let phraseToCheckclear = phraseToCheck.replace(/[.,!?;:]/g, '').toLowerCase()
let reversePhrase = phraseToCheckclear.split('').reverse().join('');
if (phraseToCheckclear == reversePhrase) {
    console.log("Palindrome")
} else {
    console.log("Not a palindrome")
}