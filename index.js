// ***** 01: NAMES AND INPUT ******
let hacker1 = "Camila"; //driver
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Greg"; //navigator
console.log(`The navigator's name is ${hacker2}`);

// ***** 02: CONDITIONALS ******
/*
function verifyName (hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if
    (hacker1.length < hacker2.length) {
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log("Wow, you both have equally long names, XX characters!");
    }
}*/
// verifyName (hacker1, hacker2);
//feedback suggests the following, without needing a function:

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

// ***** 03: LOOPS ******

//3.1 - print the characters of driver's name, separated by space and in capital leters
let driversNameEditted = `${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()}`;
console.log(driversNameEditted);

//also possible with
let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase();
}
console.log(newName);

//3.2 - Print all the characters of the navigator's name in reverse order

let reversedName2 = ""; //saving the value as a new variable
for (let i = hacker2.length - 1; i >= 0; i--) {
  //loop through the characters of the string
  reversedName2 += hacker2[i]; //from back to front add each character
}
console.log(reversedName2); //it worked, yay :)

//also possible using a reverse method
/*
    let originalString = "Hello World!"; 
    let reversedString = originalString.split('').reverse().join('');
    console.log(reversedString);
*/

//3.3 - lexographics order: alphabetically and less characters
//let namesArray = []; //create an array with the names to be sorted
//namesArray.push(hacker1); //push each variable into this array
//namesArray.push(hacker2);

//console.log(namesArray.sort()); //sorted array => Camila, Greg

//Feedback suggests that not needed to sort the array
//use localeCompare method

//***** 3.3 SOLUTION SUGGESTED
// The localeCompare() method of String values
// returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.
// returns -1 if first string `driver` occurs alphabetically before `navigator`
// returns 1 if first string `driver` occurs alphabetically after `navigator`
// returns 0 if both string `driver` and `navigator` are the same

let comparison = hacker1.localeCompare(hacker2);
//to see the result of localeCompare
console.log(comparison, "comparison"); // -1

if (comparison < 0) {
  console.log(`${hacker1}'s name goes first`);
} else if (comparison > 0) {
  console.log(`${hacker2}'s name goest first, definitely`);
} else {
  console.log(`What ?! You both have the same name`);
}

// ***** BONUS 01 ******

/*
Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

//example found online to count the words, is actually counting empty spaces

/*
    function WordCount(str) {
  var totalSoFar = 0;
  for (var i = 0; i < WordCount.length; i++)
    if (str[i] === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
  }
  totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}

console.log(WordCount("Random String"));

You could also do it with .split():

return str.split(' ').length; */

//example from W3Schools
/*
    let text = "How are you doing today?";
    const myArray = text.split(" "); //this splits the characters excluding spaces!!
    console.log(myArray); // => [ 'How', 'are', 'you', 'doing', 'today?' ]
    */

//BONUS 01

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ante tempus, iaculis nunc iaculis, pharetra mauris. Nunc sollicitudin scelerisque interdum. Phasellus egestas diam at tempus venenatis. Fusce felis neque, hendrerit ac aliquam sed, tempor bibendum erat. Mauris scelerisque ligula non risus commodo, vel tempor diam vulputate. Suspendisse sit amet tempor arcu, in egestas lorem. Maecenas pretium ipsum vel tortor dapibus, nec interdum dui pretium. Maecenas fermentum dolor vitae mi ultrices, non pretium ex dapibus. Cras pulvinar justo ac felis sodales rhoncus. Morbi facilisis risus ac ultricies vestibulum. Aliquam accumsan, ante ac efficitur porttitor, mi nunc lobortis felis, non tempus nibh mi sed diam. Cras leo sapien, finibus eu lobortis eu, ornare fermentum urna. Nullam cursus consequat tellus, ac porta purus. Proin efficitur enim in lorem imperdiet luctus. Aenean vel purus faucibus, ultricies urna eu, fringilla felis. Maecenas sed diam tincidunt elit imperdiet fermentum. Quisque aliquet, tellus non vehicula viverra, ligula nunc condimentum ligula, vel ullamcorper lacus leo nec erat. Duis a tristique magna, sed blandit tellus. Donec vehicula magna sem, id egestas tortor luctus in. Donec faucibus venenatis lacus, in volutpat est tempus egestas. Proin mollis urna id lacus vulputate mollis. Vestibulum diam eros, tincidunt sed nibh vel, malesuada feugiat ligula. Nulla elementum erat non nibh fermentum scelerisque. Pellentesque vehicula justo sed eros rutrum pharetra. In tristique, est at sollicitudin porttitor, tellus metus molestie dolor, et faucibus sem nibh id lectus. Nulla facilisi. Suspendisse pharetra consectetur sem, eget auctor eros luctus a. Integer et pharetra risus. Curabitur convallis, metus sed iaculis malesuada, dolor libero viverra diam, at scelerisque metus est eu ex. Nam non dolor rutrum felis commodo finibus quis sodales quam. Nunc ut finibus augue. Pellentesque dignissim malesuada hendrerit. Sed finibus convallis dui a ultrices. Donec ornare lacinia risus vel fermentum. Nulla facilisi. Maecenas sit amet quam sit amet tortor varius auctor. Praesent semper elit at felis cursus, ut condimentum magna aliquam";

//lets split the string into an array cutting when we find a space
//console.log(longText.split(" "));
//and now count this
console.log(`the length of the text : ${longText.split(" ").length}`); //314

//Make your program count the number of times the Latin word et appears.
let words = 1; //total word count
let etCount = 0; //count for the word et

for (let i = 0; i < longText.length; i++) {
  //make a loop that goes through the whole string
  if (longText[i] === " " || longText[i] === "\n") {
    //if we find a new space or a /n new line
    words++; //then increase the count of words
  } else if (
    longText[i - 1] === " " && //if we find a space before i - so new word starting
    longText[i].toLowerCase() === "e" && //and we find a character e
    longText[i + 1].toLowerCase() === "t" && //and the character e is directly followed by a character t
    (longText[i + 2] === " " || //and right after e and t we find a space
      longText[i + 2] === "," || // or after et we find a comma
      longText[i + 2] === ".") // or after et we find a point.
    //all of this means we need to find an empty space, et and then finished by space, comma or point.
    //so that we make sure et is a separate word and not in between
  ) {
    etCount++; //then add to etCount
  }
}

console.log(
  `this is how much et you've seen: ${etCount} , and number of word ${words}`
);

//BONUS 02

//how i did it initially alone
/*
let phraseToCheck = "Check if this string is a Palindrome";
let testPhrase = "amorroma";

//to do it really precise we would need to check the palindrome phrase
//by converting .tolowercase and removing all punctuation and spaces
//for simplification I just tried to implement the logic in the bonus here

function reversePhrase(str) {
  //creating a function that accepts a str as parameter
  let backPhrase = ""; //saving the value as a new variable
  for (let i = str.length - 1; i >= 0; i--) {
    //loop through the characters of the string
    backPhrase += str[i]; //from back to front add each character
  }
  return backPhrase; //return the editted variable
}

//console.log(reversePhrase(testPhrase));

if (reversePhrase(phraseToCheck) === phraseToCheck) {
  //change the test variable to the phraseToCheck
  console.log("Congrats, palindrome found!");
} else {
  console.log("not a palindrome");
}

*/

//*****BONUS 02 SOLUTION PROVIDED AND REVIEW */

const phraseToCheck2 = "Amor, Roma!"; // acc previous it would tac ocat
const noSpecial = phraseToCheck2.replace(/[^a-zA-Z]/g, "").toLowerCase();
//The replace method is used to remove non-alphabetic characters from the string using the regular expression [^a-zA-Z]
console.log(noSpecial, "nospecial"); // "amorroma"

const noSpecialReversed = noSpecial
  .split("") //split the string into an array, it splits and creates spaces btw characters
  //if you pass .split(" ") with empty space is going to split when it finds a space, so between words
  //if you pass .split (",") it will split every time a comma is seen
  //basically whatever character you want to stop at
  .reverse() //then we reverse all the array objects positions
  //so "cat" -> "c", "a", "t" -> reversed to "t", "a", "c"
  .join("") //now we rejoin all the separate characters into one word
  .replaceAll(" ", ""); //replace all spaces for no space
console.log(noSpecialReversed, "reversed"); //this is the word reversed

if (noSpecial === noSpecialReversed) {
  //if the word with no special characters is same as the word reversed
  console.log("you have polindrome");
} else {
  console.log("No polindrome");
}

//https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
/*
You can do it specifying the characters you want to remove:
string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

Alternatively, to change all characters except numbers and letters, try:
string = string.replace(/[^a-zA-Z0-9]/g, '').
*/

let greeting2 = "Hello";
greeting2 = greeting2.split(""); //split the string into an array, it splits and creates spaces btw characters
//if you pass .split(" ") with empty space is going to split when it finds a space, so between words
//if you pass .split (",") it will split every time a comma is seen
//basically whatever character you want to stop at
greeting2 = greeting2.reverse(); //the reverse method only works for array
greeting2 = greeting2.join();
console.log(greeting2);
