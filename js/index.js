// Iteration 1, 2, 3.1, 3.2 and start of 3.3 done in class with Mahmut. Bonus done the next day alone. 

// Iteration 1: Names and Input
const hacker1 = "Marcella";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mahmut";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

 if(driverNameLength > navigatorNameLength) {
   console.log( `The driver has the longest name, it has ${driverNameLength} characters`)
 } else if (navigatorNameLength > driverNameLength) {
   console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`)
 } else {
   console.log(`Wow, you both have equally long names, ${driverNameLength} characters!.`)
 }


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverName = "";
for(let i = 0; i < hacker1.length; i++){
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";
for (let i = hacker2.length-1 ; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

// First solution 
if(hacker1.localeCompare(hacker2) === -1 ){
 
  console.log(hacker1.localeCompare(hacker2));
  console.log(hacker2.localeCompare(hacker1));

  console.log(`The driver's name goes first.` )
} else if (hacker1.localeCompare(hacker2) === 1 ) {
  console.log(`Yo, the navigator goes first definitely.` )
} else {
  console.log(`What?! You both have the same name?`)
}

// second solution (practicing with the switch statement)
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log(`The driver's name goes first.` )
    break
  case 1:
    console.log(`Yo, the navigator goes first definitely.` )
    break
  case 0:
    console.log(`What?! You both have the same name?`)
    break;
}
/* Bonus 1:
Go to lorem ipsum generator and:
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word et appears.
*/

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim orci, rhoncus sit amet massa vel, iaculis efficitur arcu. Pellentesque sit amet erat erat. Integer eu tempus augue, vel molestie elit. Aliquam odio lorem, ultrices id consectetur nec, aliquet ac massa. Integer sagittis nisi augue, at cursus sem iaculis eget. Nulla ac tortor ac nisi mattis rutrum eu vitae dui. Fusce ante sapien, ullamcorper eu felis a, fermentum vestibulum ex. Pellentesque vel mattis ligula, sit amet porta nisi. Sed lectus nisl, mollis id lacus non, eleifend aliquam neque. Proin semper id lorem ac aliquet. Pellentesque id fringilla enim. Duis arcu ligula, semper ac tincidunt in, rutrum quis leo. In nec est eget eros imperdiet fermentum accumsan id metus, Curabitur et efficitur mauris. Pellentesque aliquam maximus semper. 

Curabitur nunc neque, tristique eget sem sit amet, posuere volutpat eros. Quisque eu fermentum metus. Nam eget odio dolor. Nullam vel erat nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In aliquam, dui ac posuere efficitur, nulla lectus auctor lectus, at tincidunt nunc lacus vel quam. Proin interdum orci et diam ultrices, sit amet pellentesque magna lobortis. Aliquam id dolor lorem. Donec porta dolor est, id hendrerit est convallis non. Sed tempor rhoncus est eget tincidunt. Suspendisse potenti. Nam ut condimentum sem. 

Sed ornare, nulla vel volutpat aliquet, nisi purus lacinia turpis, et commodo velit urna sit amet nisi. Sed non felis lorem. Donec porttitor nisl sed odio vulputate tempus. Nullam maximus nisl eros, eget sollicitudin lorem pretium non. Nulla vulputate diam nunc, nec porta neque scelerisque a. Vestibulum ultrices, lorem quis porttitor interdum, velit magna pharetra nisl, id dapibus justo turpis eu nibh. Donec sit amet nunc et orci malesuada ornare vitae sed dui. Mauris et interdum ex, a consequat nulla. Vestibulum ornare eu ligula nec iaculis. Morbi bibendum venenatis quam, eget tempus dui euismod sed. Proin et tempor nulla.`


// counts words first try 
let wordCount = 1

for (let i = 0; i <= paragraph.length; i++){
  if (paragraph[i] === ' ') {
    wordCount++
  }
}
console.log(wordCount)

// count words after checking google
wordCount = paragraph.split(' ').length
console.log(wordCount)


//Counting number of times word 'et' appears in text
const words = paragraph.split(' ')

let countWordEt = 0

for (let i = 0; i <= words.length; i++) {
  if (words[i] === 'et') {
    countWordEt++
  }  
}
console.log(countWordEt)