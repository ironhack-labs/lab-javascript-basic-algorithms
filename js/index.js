// Iteration 1: Names and Input

let name1 = 'Anna';
const hacker1= name1
console.log(`The driver's name is, ${hacker1}!`);

let name2 = 'Sandra';
const hacker2= name2
console.log(`The navigator's name, ${hacker2}!`);



// Iteration 2: Conditionals
let str1= hacker1
let str2= hacker2
if (str1.length===str2.length) {
  console.log (`Wow, you both have equally long names, ${name1.length} characters!`);
} 
else{ if (str1.length > str2.length) console.log (`The driver has the longest name, it has ${name1.length} characters.`);
 
 {if (str1.length < str2.length)console.log (`It seems that the navigator has the longest name, it has ${name2.length} characters.`);
 }
};

// Iteration 3: Loops
console.log (str1.toUpperCase())
function reverseInPlace (str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
    for (var i = 0; i < words.length; i++) {
     result += words[i].split('').reverse().join('') + " ";
  }
  return result
}
console.log(reverseInPlace(name2));