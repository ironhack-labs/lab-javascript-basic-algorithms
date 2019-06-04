// Names and Input


//1.- Create a variable hacker1 with the driver's name
let hacker1 = "G";

//2.- Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

//3.- Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = window.prompt(
  "please, introduce the navigator's name",
  "lechuck"
);

//4.- Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
//5.- Depending on which name is longer, print:
wichNameIsLonger(hacker1, hacker2);

/*6.- Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
 separate every character in a position of array, with out spaces. next join every part in string and with
a spaces, and respecting the spaces Introduced on the name or surname, and next print in uppercase*/

console.log(
  ` This is the Driver's name in Upper Case and separate every letter ${hacker1
    .split("")
    .join(" ")
    .toUpperCase()}`
);

/*7.- Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
Convert de string in a array, next make the reverse of array  and next join all thre 
character of the array in atring  a prints with de console.*/

console.log(
  `This is the Reverse of navigator's name ${hacker2
    .split("")
    .reverse()
    .join("")}`
);

//8.- Depending on the lexicographic order of the strings, print:
lexicographicOrder(hacker1, hacker2);

//9.- Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
const phrase = prompt(
  "Please introduce a phrase, to check if ir is a Palindrome: "
);
if (isAPalindrome(phrase)) console.log(`this phrase ${phrase} is a palindrome`);
else console.log(`this phrase ${phrase} isn't a palindrome`);



// Lorem ipsum generator
//10.- Go to lorem ipsum generator and:   Generate 3 parragraphs. Store the text in a String. Make your program count the number of times the latin word etappears

const loremImpsun =
  "et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat quis nisl ut mollis. Cras aliquam vulputate malesuada. Nullam tincidunt nunc eget ex iaculis fermentum. Maecenas finibus felis a libero mollis aliquet. Duis eu bibendum ipsum. Fusce nec justo venenatis, semper risus quis, viverra quam. In hac habitasse platea dictumst. Nam at velit a sem varius iaculis. Nullam eu molestie diam, id vulputate turpis.  Nam accumsan, mauris ultrices rutrum accumsan, elit neque iaculis risus, id sagittis turpis diam quis mi. Pellentesque in accumsan velit. Aliquam laoreet pharetra hendrerit. Fusce nec posuere augue, ac convallis dolor. Aliquam eu dapibus quam. Sed feugiat nisl diam, sed fermentum lacus consequat vitae. Nam nunc purus, mollis in auctor vitae, fringilla in nunc. Nunc vitae diam ante. Aliquam erat volutpat. Morbi a sem aliquet, pulvinar massa sit amet, feugiat arcu. Fusce malesuada orci dolor, sed iaculis orci posuere eu. Donec sapien arcu, facilisis sed justo id, placerat blandit magna. In hac habitasse platea dictumst. Donec sit amet velit vitae diam auctor congue. In ut dui vitae est condimentum venenatis vel eget orci. Donec fermentum est vel viverra accumsan. Nulla et cursus eros, sed dapibus elit. Sed rutrum finibus sodales. Mauris tristique facilisis pulvinar. Fusce et tortor eget leo consequat bibendum. Vivamus faucibus ut odio quis laoreet. Nunc ut magna ut lectus facilisis viverra. Integer eget feugiat mauris, nec luctus risus. Nam dignissim tempor arcu, quis feugiat dolor venenatis a. Phasellus interdum auctor elit, sed rutrum mi accumsan in.";

console.log(
  `This is the content text ${loremImpsun} and has ${numberOfWords(
    loremImpsun
  )} words.`
);

console.log(` The 'et' is repeated ${findEt(loremImpsun)} time(s).`);

function isAPalindrome(phrase) {
  //first of all convert the phrase in lower case so we can reduce the amount of character to work.
  let phraseInLowerCase = phrase.toLowerCase();
  //now we try to delete the invalid character as well ? or ,
  let phraseWhithOutSpaces = phraseInLowerCase.split(" ").join(); //convert in array a deletes de spaces. Next convert in string again a return to variable.
  for (let i = 0; i < phraseWhithOutSpaces.length; i++) {
    if (
      phraseWhithOutSpaces[i] !=
      phraseWhithOutSpaces[phraseWhithOutSpaces.length - 1 - i]
    )
      return false;
  }
  return true;
}

function wichNameIsLonger(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The Driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `Yo, navigator got the longest name, it has ${hacker2.length} characters`
    );
  } else {
    console.log(
      `wow, you both got equally long names, ${hacker1.length} characters!!`
    );
  }
}

function lexicographicOrder(hacker1, hacker2) {
  switch (hacker1.localeCompare(hacker2)) {
    case -1:
      console.log("The driver's name goes first");
      break;
    case 0:
      console.log("What?! You both got the same name?");
      break;
    case 1:
      console.log("Yo, the navigator goes first definitely");
      break;
  }
}

function numberOfWords(loremImpsun) {
  let textArray = loremImpsun.split(" "); //Split using " " as a parameter the result is an Array with all ther world
  return textArray.length;
}

function findEt(phrase) {
  let counter = 0;
  let position = 0;
  
  while (position != -1) {
    position = phrase.indexOf("et");
    if (position != -1) {
      position += 2;
      counter++;
      phrase = phrase.substring(position);
    }
  }
  return counter;
}
