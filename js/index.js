// Iteration 1: Names and Input
var hacker1 = "Daniel Hamekasi";
console.log(`"The driver's name is ${hacker1}"`);

var hacker2 = "John Doe";
console.log(`"The navigator's name is ${hacker2}"`);

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

//3.1
var hacker1Str = ``;
for (var i = 0; i < hacker1.length - 1; i++) {
  hacker1Str += hacker1[i].toUpperCase() + " ";
}
hacker1Str += hacker1[i].toUpperCase();
console.log(hacker1Str);

//3.2
var hacker2Str = ``;
for (var i = hacker2.length - 1; i >= 0; i--) {
  hacker2Str += hacker2[i];
}
console.log(hacker2Str);

//3.3 Didnt know if you expected us to use nested for loops? found this method instead, although maybe that wasnt the correct approach.
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate neque enim, quis hendrerit ex ultricies nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut pretium ex. Sed massa nisl, auctor a est sit amet, egestas rutrum nisl. Nam ac turpis sed lectus auctor malesuada ut ac nisl. Curabitur egestas sagittis quam, non tincidunt ipsum molestie eget. Nullam viverra hendrerit vulputate. Donec congue dui vel mauris pretium accumsan. Sed a metus sit amet magna euismod tempor sit amet vitae urna. Curabitur a velit porttitor, blandit risus vitae, laoreet nisl. Curabitur lacinia malesuada lobortis. Mauris dictum dui at luctus dictum. Nullam interdum, quam sit amet imperdiet gravida, purus odio accumsan mi, vel convallis sapien quam eu dolor. Cras eget felis accumsan, ullamcorper diam ac, eleifend lectus. Donec facilisis magna placerat neque luctus, nec faucibus nulla feugiat. Quisque vehicula, felis sed volutpat fringilla, nulla nibh dapibus felis, id faucibus nulla risus a eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut pretium nibh quis consequat eleifend. Integer ligula tortor, molestie sed risus eget, bibendum rhoncus augue. Mauris eleifend, sapien eget porta tempor, risus sem cursus arcu, eu consequat sapien quam a erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ut tortor vel nisi blandit varius. Quisque ullamcorper feugiat urna, eget pretium augue aliquam in. In sed neque ligula. Morbi tristique, sapien eget sagittis eleifend, urna felis molestie ex, vehicula scelerisque lectus libero vitae sapien. Nulla nec congue augue, convallis tincidunt justo. Praesent sollicitudin sem non vehicula iaculis. Pellentesque sed lacinia purus, vitae ullamcorper risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras dolor lacus, finibus a sem a, laoreet gravida ex. Fusce ut molestie enim, in euismod libero. Etiam id fringilla nulla, at venenatis justo. Maecenas at erat euismod, porttitor nisi a, euismod erat. Duis non risus eros. Aenean ultrices felis sit amet urna tincidunt faucibus. Etiam sit amet augue eleifend, porta lacus vitae, commodo eros. Cras tempor auctor dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet lorem et velit pharetra varius vitae ut libero. Ut dapibus dolor non sem volutpat, eu lobortis nibh cursus.`;

//this works if I remove the paragraphs, as I am counting white spaces for words. not sure how to catch the 2 words after a paragraph break.
var wordCount = 0;
var searchTerm = ` et `;
var etCount = 0;
var nextIndexOfTerm = lorem.indexOf(searchTerm); //first occurence of search term. returns -1 if none found.

for (var i = 0; i < lorem.length; i++) {
  if (lorem[i] === ` `) {
    wordCount++;
  }
}
wordCount++; //this is for the last word of the string which is not succeeded by a space.
console.log(`Number of words in string: ${wordCount}`);

//for the length of string, and if indexOf finds search term, count++ and update nextindex for search.
for (var i = 0; i < lorem.length && nextIndexOfTerm !== -1; i++) {
  etCount++;
  nextIndexOfTerm = lorem.indexOf(searchTerm, nextIndexOfTerm + 1);
}
console.log(`Number of occurences of "${searchTerm}": ${etCount}`);

//Bonus 2

var phraseToCheck = `This is my sentence`;
var newPhrase = ``;
var newReversePhrase = "";

for (var i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " ") {
    //this takes care of spaces, but symbols like ! or ? arent taken care of here. didnt want to have a bunch of checks for symbols.
    continue;
  } else {
    newPhrase += phraseToCheck[i].toLowerCase();
  }
}
console.log(`Initial Phrase: ${newPhrase}`);

for (var i = phraseToCheck.length - 1; i >= 0; i--) {
  if (phraseToCheck[i] === " ") {
    continue;
  } else {
    newReversePhrase += phraseToCheck[i].toLowerCase();
  }
}
console.log(`Reverse phrase: ${newReversePhrase}`);

if (newPhrase.length === newReversePhrase.length) {
  //if they arent the same length, then obviously not palindrome.
  var currentLetterMatch = false;

  for (var i = 0; i < newPhrase.length; i++) {
    if (newPhrase[i] === newReversePhrase[i]) {
      currentLetterMatch = true;
    } else {
      currentLetterMatch = false;
      console.log(`This string is not a palindrome.`);
      break; //it works, but wasnt sure if a break inside an IF would break out of the parent loop. apparently it does :P
    }
  }
  if (currentLetterMatch) {
    //if the loop made it this far and currentMatch is still true, then it's a palindrome.
    console.log(`This string is a palindrome!!!`);
  }
} else {
  console.log(`This string is not a palindrome.`);
}
