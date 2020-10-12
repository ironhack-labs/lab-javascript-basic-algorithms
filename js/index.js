// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


console.log("I'm ready!");


// ITERATION 1 NAMES AND INPUTS

let hacker1="Ange";
console.log (`The driver's name is ${hacker1}.`);
let hacker2="Simon";
console.log (`The navigator's name is ${hacker2}.`);


// ITERATION 2 CONDITIONALS

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)}

// ITERATION 3 LOOPS


// Split driver's name:
let split1 = hacker1.split("");
let join1 = split1.join(" ");
let upperCased1 = join1.toUpperCase()
console.log (upperCased1);


// With a loop:
let upperCased = hacker1.toUpperCase();

// I don't understand how to get the output in one line:
/*
let letters = for (let i=0; i< upperCased.length; i++) {
     console.log (`${upperCased[i]}`);  
}
console.log (letters);
*/


// Reverse navigator's name:
let split = hacker2.split("");
let reverse = split.reverse();
let join = reverse.join("");
console.log(join);


for (let i=0; i<hacker2; i++) {
  console.log (hacker2.charAt(i).reverse().join())
}


// lexicographic order:

if (hacker1.charAt(0) < hacker2.charAt(0)) {
     console.log ("The driver's name goes first.");}
     else if (hacker1.charAt(0) > hacker2.charAt(0)) {
       console.log ("Yo, the navigator goes first definitely.")
     } else {
       console.log ("What?! You both have the same name?")
     }





// BONUS: count the words in a string.

let lorem = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`


//As they are 2 space in between paragraph : +2 in total; but there is one word more because we start with a word. 
function numberOfWords () {
  let totalWords= 0;
  for (let i=0; i< numberOfWords.length; i++) {
  if (lorem(i) === " "){
  totalWords =+ 1
}
total =+ 1;
}
}

console.log(lorem.numberOfWords())