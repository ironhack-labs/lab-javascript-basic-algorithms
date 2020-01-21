// Iteration 1: Names and Input
let hacker1 = "Tina";
let hacker2 = "Bob";
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditional

if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

if ( hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}




// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
 let newHacker = hacker1.split('').join(' ');
  console.log(newHacker.toUpperCase())
  
}

for (i = 0; i < hacker2.length; i++) {
  let newerHacker = hacker2.split('');
  newerHacker = newerHacker.reverse();
  var joinArray = newerHacker.join("");
  console.log(joinArray);
}



if (hacker1[0] < hacker2[0]) {
  console.log(`Yo, the navigator goes first definitely.`);
}

else if (hacker1[0] > hacker2[0]) {
  console.log(`The driver's name goes first.`)
}

else {
  console.log(`What?! You both have the same name?`)
}

















// ### Iteration 1: Names and Input

// 	1.1 Create a variable `hacker1` with the driver's name.

// 	1.2 Print `"The driver's name is XXXX"`.

//   	1.3 Create a variable `hacker2` with the navigator's name.

//   	1.4 Print `"The navigator's name is YYYY"`.

// ### Iteration 2: Conditionals
//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
// 	  - `The driver has the longest name, it has XX characters.` or <br>
// 	  - v or <br>
// 	  - `Wow, you both have equally long names, XX characters!`.

// ### Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`
  
//   3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`
  
//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`
