console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "xxxx";
console.log(`the driver's name is ${hacker1}.`);

let hacker2 = "YYYY";
console.log(`The navigator"s name is ${hacker2}.`);

/*Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
function longestName(name1, name2) {
  if (name1.length > name2.length) {
    return `The driver named ${name1} has the longest name, it has ${name1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator named ${name2} hsa the longest name, it has ${name2.length} characters.`;
  }
  return `Wow, you both have equally long names, ${name1.length} characters!`;
}

let printResults = longestName(hacker1, hacker2);
console.log(printResults);


//  Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

function string_separator(someString) {
  let letters = "";
  for (let i = 0; i < someString.length; i++) {
    letters += someString[i] + " ";
  }
  let upperCasedString = letters.toUpperCase();
  return upperCasedString;
}

let printstring = string_separator(hacker1);
console.log(printstring);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverseString(someString) {
  let newString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    newString += someString[i];
  }
  return newString;
}

let reverseResult = reverseString("john");
console.log(reverseResult);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
//  */

/***************************************************************************************** */

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.

let paras = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac enim ultrices ante porttitor ultrices. Nulla placerat sem nisi, cursus venenatis urna congue rutrum. Vestibulum tempor velit nec malesuada ullamcorper. In nec mollis mauris, sit amet imperdiet dolor. Donec elementum feugiat mauris eu aliquet. Praesent dapibus felis id accumsan dignissim. Etiam blandit ipsum quam, quis tincidunt dui sodales in. Morbi ac finibus urna.

Morbi ut leo facilisis, tincidunt libero ac, lacinia nisi. Vivamus odio erat, porttitor nec ligula nec, vestibulum vulputate dolor. Nunc eu nisi ipsum. Curabitur convallis ligula sit amet justo posuere, nec lacinia ante cursus. Donec vestibulum sodales quam sit amet lacinia. Donec venenatis mi in vehicula sodales. Nullam ac mauris vel lorem ullamcorper suscipit nec vitae felis. Aliquam vitae nisl laoreet ante convallis lacinia. Fusce et libero quis ex tristique pulvinar in quis ex. Quisque eget congue diam. Praesent elementum dictum eros, ultrices feugiat odio. Curabitur pharetra condimentum mauris in vehicula. Phasellus pulvinar ullamcorper nisi sed efficitur. Nulla sit amet elementum metus, sed elementum odio. Donec vehicula arcu non malesuada elementum.

Morbi at metus ac urna faucibus pretium. Mauris efficitur rutrum egestas. Quisque mollis neque aliquam nisl sollicitudin, non feugiat quam elementum. Vestibulum euismod dolor eget ipsum tincidunt, nec commodo elit dignissim. Proin scelerisque turpis eget elit finibus, vel imperdiet ex accumsan. Etiam in erat vitae dui lacinia mollis. Suspendisse rhoncus posuere bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque sed quam non ligula mattis pellentesque. Maecenas eget velit vitae tortor elementum consectetur sit amet a diam. Fusce ornare erat nibh, id lobortis leo pellentesque eget. Maecenas nec tristique eros. Etiam vehicula ultrices eros et volutpat. Proin quis aliquam ipsum. Mauris tempus nulla vel semper consectetur.`
// => 286 words


// Make your program count the number of words in the string.

 function countWords(str){
   let countedWords = 1;
   for(let i = 0; i < str.length; i ++){
     if(str[i] ===" "){
       countWords += 1;
     }
   }
   console.log(countWords);
 }

 countWords(paras);
// Make your program count the number of times the Latin word et appears.

