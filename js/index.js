// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Hugo"

// 1.2 Print "The driver's name is XXXX".
console.log(`The drivers name is ${hacker1}`)

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Caio"

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
//  2.1 Print Depending on which longest name
if (hacker1.length === hacker2.length) {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters`)
}  else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.lenght > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} charecters.`);
} 

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let nome = "";
for (let i = 0; i < hacker1.length; i++) {
nome += hacker1[i] + " ";
}
console.log(nome.toUpperCase())

// PRIMEIRO OPÇÃO COM ARRAY
// let nome2 = [];
// for (let i = 0; i < hacker2.length; i++) {
// nome2.push(hacker2[i])
// }
// nome2.reverse();
// console.log(nome2)

// OPÇÃO MAIS SIMPLES

// 3.2 Print all the characters of the navigator's name, in reverse order.
let nome2 = "";
for (let i = hacker2.length; i > 0; i--) {
nome2 += hacker2[i-1] + " "; 
}
console.log(nome2)

// 3.3 Print depending on the lexicographic order
for (let i = 0; i < hacker1.length; i++) {
if (hacker1[i] < hacker2[i]) {
  console.log(`The driver's name goes first.`) 
  break;
} else if (hacker1[i] > hacker2[i]) {
  console.log(`Yo, the navigator goes first definitely.`)
  break;
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}
}

// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string.
let text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex turpis, sagittis nec convallis quis, luctus vitae risus. Quisque non sapien quis ante sollicitudin congue. Morbi placerat efficitur imperdiet. Nulla dui risus, eleifend at tellus a, commodo iaculis lorem. Cras cursus bibendum velit a sollicitudin. Nunc pretium ipsum at arcu malesuada gravida. Phasellus condimentum maximus nisi, nec congue ipsum egestas non. Nam a mauris non lacus lacinia dapibus tristique efficitur diam. Donec faucibus egestas congue. Fusce at malesuada lacus. Maecenas eget interdum dolor. Nullam feugiat eleifend massa ut pellentesque. Donec ultrices tellus iaculis accumsan maximus. Donec porttitor lectus dui. Etiam blandit tellus id lectus semper, nec tincidunt neque dapibus. Sed ultricies, quam sed dapibus condimentum, lacus ex dignissim tellus, sed convallis urna massa id eros. Fusce vel nibh nulla. Praesent cursus id nulla vel pulvinar. Suspendisse blandit fringilla dui, et blandit mauris dignissim sit amet. Sed nisi tortor, semper ac fringilla nec, porta ac risus. Duis tincidunt est et mauris luctus efficitur vitae eu eros. Donec sit amet tortor leo. Nam sagittis viverra eros, vitae vulputate purus. Nulla facilisi. Cras non tristique ipsum, eget gravida dui. Etiam molestie consectetur faucibus. Mauris sit amet orci ornare purus blandit ultricies at at felis. Fusce a nulla vitae ante bibendum mattis non sit amet magna. Pellentesque posuere quam neque, non pretium metus hendrerit et. Suspendisse turpis ante, dignissim ut imperdiet et, placerat a lectus. Cras ornare nibh urna, eu aliquet diam bibendum vel. Sed hendrerit semper orci, tincidunt scelerisque mauris vehicula at. Sed ultricies auctor turpis, ac porttitor nibh scelerisque sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus."

// Make your program count the number of words in the string.
console.log(`Number of words in the string: ${text.length}`)

// Make your program count the number of times the Latin word et appears.
let textcount = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] + text[i+1] === "et") {
    textcount += 1;
}
}

console.log(`The latin word "et" appears ${textcount} times`)

// Bonus 2
let phraseToCheck = "arara";
let invertedPhrase = "";

for (let i = phraseToCheck.length; i > 0; i--) {
  invertedPhrase += phraseToCheck[i-1];
}
console.log(invertedPhrase)
if (phraseToCheck == invertedPhrase) {
  console.log(`${phraseToCheck} is a Palindrome`);
} else {
  console.log(`Is not a Palindrome`);
}