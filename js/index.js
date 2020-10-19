// Iteration 1: Names and Input

let hacker1 = "Juliane"; 
console.log(`"The driver's name is ${hacker1}"`);  //driver's name
let hacker2 = "Magali"; 
console.log(`"The navigator's name is ${hacker2}"`); //navigator's name

// Iteration 2: Conditionals

/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

// checking the length of a string with the length property 
//console.log(hacker1.length); 

if (hacker1.length > hacker2.length) {
// driver's name is longer than navigator's name
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
// navigator's name is longer than driver's name
} else if (hacker2.length > hacker1.length) {
  console.log(`It seem that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
// both have the same length
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters`); 
}; 

//Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" */

hacker1 = hacker1.toUpperCase(); 
//capitalize driver's name 
// check
// console.log(hacker1);
let capitalizedWithSpace = '';
for (i = 0; i<hacker1.length;i++){ 
  //console.log(hacker1.charAt(i));
  capitalizedWithSpace += hacker1.charAt(i) + ' ';
  }
console.log(capitalizedWithSpace); 

//another option; instead of charAt I used the bracket notation

let capitalizedWithSpace1 = '';
for (i = 0; i<hacker1.length;i++){ 
  //console.log(hacker1[i]);
  capitalizedWithSpace1 += hacker1[i] + ' ';
  }
console.log(capitalizedWithSpace1); 


/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" */

//charArt() notation

let reverseOrderName = '';
for (i = hacker2.length; i>=0; i-- ){
  //console.log(hacker2.charAt(i)); 
  reverseOrderName += hacker2.charAt(i) 
}
console.log(reverseOrderName); 

//bracket notation []

let reverseOrderName1 = '';
for (i = hacker2.length; i>=0; i-- ){
  //console.log(hacker2[i]); 
  reverseOrderName1 += hacker2.charAt(i) 
}
console.log(reverseOrderName1); 

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
// Checking documentation from MDN
//string.localeCompare(compareString) 
//console.log(hacker2.localeCompare(hacker1)); 

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first"); 
} else if (hacker1.localeCompare(hacker2) > 0){
  console.log("Yo the navigator goes first definitely");
} else {
  console.log("What you both have the same name?"); 
}

// not sure whether this is working properly

/*BONUS 
1.Generate 3 paragraphs. Store the text in a variable type of string.*/

let string1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent id neque tellus. Quisque pretium venenatis porttitor. Integer egestas elementum eleifend. Vivamus rhoncus orci quis lectus aliquet maximus. Mauris ipsum odio, maximus quis viverra sed, congue eu dui. Sed ut dolor nulla. Donec hendrerit luctus mauris. Duis eu augue ac urna ullamcorper auctor. Aenean efficitur nibh hendrerit urna suscipit consequat. Proin vehicula orci mauris, sed lacinia arcu elementum sollicitudin. Nulla nec augue aliquet, finibus dui sed, euismod dui. Praesent urna libero, tempus ut orci sed, auctor consectetur est. Suspendisse vitae sollicitudin augue. Curabitur tincidunt orci a turpis dignissim, id facilisis lorem lacinia. Mauris tristique tellus consectetur nunc luctus elementum. Donec efficitur interdum odio. Donec aliquam faucibus tortor vitae elementum. Curabitur porta, dolor vitae malesuada tempus, tortor purus pellentesque erat, eget congue orci nibh eu nisl. Phasellus sollicitudin sit amet nunc rutrum mattis. Morbi sit amet tortor vel ante volutpat accumsan id nec erat. Suspendisse vel suscipit nulla. Pellentesque eu ultrices ligula. Nunc imperdiet dignissim velit a tincidunt. Aliquam rutrum quis tortor et eleifend. Suspendisse ultrices mi eu lectus suscipit venenatis. Nullam ac nisi orci. Praesent pellentesque purus ac ultricies convallis. Curabitur elementum malesuada elit, vel semper lacus maximus ac. Duis vestibulum, est sit amet commodo molestie, est tellus commodo risus, et tempus leo nulla sed nunc. Morbi in tellus dui. Nullam et lorem eget ligula fermentum interdum quis et velit. Cras ac consequat nisl, a cursus urna. Sed consequat pharetra sodales. Curabitur a est fermentum, congue massa at, accumsan felis. Phasellus feugiat magna eget viverra viverra. Vestibulum eget cursus urna. Nulla odio ex, condimentum ut lacinia sed, lacinia vitae nibh. Maecenas quis arcu eu ante consequat feugiat. Praesent magna leo, viverra a laoreet nec, hendrerit et sem.'

//console.log(string1) to check whether string is working

/*Make your program count the number of words in the string.*/

let wordsCount = 1; // words counted yet; as first word will be missed as index starts with 0
console.log(wordsCount);
for (i = 0; i < string1.length; i++) {
  //console.log(string1[i]);
  // checks each letter in the paragraphs 
  if (string1[i] === " ") {
    //if i is a blank space, add it 1 to words count variable 
  wordsCount += 1; 
  }
}

console.log(wordsCount);

//3.Make your program count the number of times the Latin word et appears

// string1.indexOf("et"); first time "et appears"

let containsWord = 0; 

for (i=0; i < string1.length; i++){
  //checks each letter in the paragraph 
  if (string1[i] === "e" && string1[i+1] === "t"){
    containsWord +=1;
  }
}

console.log(containsWord); 

//BONUS 2 
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. 

let phraseToCheck = "A man, a plan, a canal, Panama!"; 

phraseToCheck = phraseToCheck.slice(1,1); 
console.log(phraseToCheck);
//Quoting e 
// Palindrom reads the same backwards and forwards
/*for (i = 0; i < phraseToCheck.length; i++){ 
  //console.log(phraseToCheck[i]);
  if (phraseToCheck[i] === " "){
    //phraseToCheck.substring(i); 
  }
  
  }
}*/