/*Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1=`Arturo`;
console.log (`The driver´s name is ${hacker1}`);

let hacker2=`Pedro`;
console.log (`The navigator´s name is ${hacker2}`);

/*2.1. Según el nombre que sea ​​más largo , imprima:
- The driver has the longest name, it has XX characters.o
- It seems that the navigator has the longest name, it has XX characters.o
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else  if(hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let newHacker1= hacker1.toUpperCase().split("").map((letter) => letter += " ").join("");
console.log(newHacker1);

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

let newHacker2 = hacker2.split("").reverse().join("");
console.log(newHacker2);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1.localeCompare(hacker2) === 1){
  console.log (`Yo, the navigator goes first definitely.`)
} else if (hacker1.localeCompare(hacker2) === -1){
  console.log (`The driver's name goes first.`)
} else {
  console.log (`What?! You both have the same name?`)
}

/*Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.*/

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis nisl, a egestas lectus feugiat eget. Maecenas vitae rhoncus magna. Nunc odio dolor, facilisis sit amet nibh non, mattis congue mi. Nunc ut egestas massa. Ut magna mauris, condimentum non euismod eget, dapibus et dui. Sed vestibulum lacus id odio vestibulum mollis. Pellentesque sit amet arcu id eros aliquet sagittis. Nulla facilisi. Integer porttitor venenatis orci, sit amet ultricies enim. Aenean fringilla in quam nec tempus. Vivamus in pretium leo. Sed ornare magna ac facilisis posuere. Praesent ut tempus orci. Suspendisse ac posuere augue, sit amet luctus quam. Phasellus quis nibh eu sapien tristique tempor lobortis et diam. Fusce non sem nec magna porta sollicitudin vel non mauris. Integer ut interdum lorem. In at turpis massa. Duis eget interdum urna. Duis facilisis imperdiet porta. Sed eu sapien id nulla bibendum ultrices. Nunc faucibus, mi nec bibendum dapibus, sem diam interdum mi, in vehicula lacus dui hendrerit augue. Nulla facilisi. Suspendisse finibus, nunc viverra sagittis iaculis, est nunc rutrum sem, ac posuere metus erat at justo. Etiam ullamcorper, sapien a auctor vehicula, dui purus blandit nisl, at rhoncus urna nisl non dui. Sed venenatis eleifend odio ut condimentum. Pellentesque iaculis nunc magna. Curabitur nec odio turpis. Maecenas eu placerat lorem, eu molestie quam. Donec blandit tincidunt mi ut pellentesque. Proin mollis nibh urna. Curabitur et non dui nec erat tincidunt vulputate eu non lacus et`;

console.log(text.split(" ").length);

/*Make your program count the number of times the Latin word et appears.*/

let count = 0;
text.split(" ").forEach((word) => {
  if(word === `et`) {
    count++;
  }
});
console.log(count);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. */

let phraseToCheck = "Amor roma";

let phraseWithoutSpaces = phraseToCheck.toLowerCase().split("").filter((letter) => letter !== " ");

let phraseToCheckWithoutSpaces = phraseWithoutSpaces.join("");

let phraseReversed = phraseWithoutSpaces.reverse().join("");


if (phraseToCheckWithoutSpaces === phraseReversed){
  console.log (`It´s Palindrome`)
} else {
  console.log (`It is not Palindrome`)
}