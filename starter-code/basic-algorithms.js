

// Names and Input
// 1)create a variablel hacker1 with the driver's name
let hacker1 = "John"

// 2) print "The driver's name is XXX"
console.log(`The driver's name is ${hacker1}.`);

// 3) create a variable hacker2 and ask the user for the navigator's name
let hacker2 = prompt("What is your name?"); 

//4) print "The navigator's name is YYY"
console.log(`The navigator's name is ${hacker2}.`);



//Conditionals
// 5) depending on which name is longer, print
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}
else console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);


// Loops
// 6) Print all the characters of the driver's name, separated by a space and
// in capital letters
console.log(hacker1.split('').join(' ').toUpperCase());

// 7) Print all the characters of the navigator's name in reverse order
console.log(hacker2.split('').reverse().join(''));


// 8) depending on the lexicographic (alphabetic) order of the strings, print

if(hacker1.localeCompare(hacker2) < 0) {
console.log("The driver's name goes first");
}
 else if(hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definately");
}
else console.log("What?! You both got the same name?");


// 9) ask the user for a new string and check if it is 
// a Palindrome (vorwaerts und rueckeaerts gleich)

let hacker3 = prompt("Please enter some text hier: ");

if(hacker3.toLowerCase() === hacker3.toLowerCase().split('').reverse().join('')) {
  console.log("This is a Palidrome");
}


// Lorem ipsum generator
 // Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.




 
