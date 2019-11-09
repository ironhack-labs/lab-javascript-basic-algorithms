// Iteration 1: Names and Input
let hacker1 = "Bill";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Steve";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);  
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(' '));

console.log(hacker2.split("").reverse().join(''));

if(hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) == -1) {
  console.log("The driver's name goes first.");
} else if(hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Words counter
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada urna eros, et aliquam tellus fringilla et. Proin eu convallis dui. Sed et nisi vitae ipsum mollis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed elementum, metus quis efficitur placerat, justo dolor malesuada orci, sit amet sodales erat mauris vitae mi. Mauris interdum sapien nulla, non bibendum est commodo vitae. Donec elementum leo at elementum vehicula. Suspendisse potenti. Cras vel arcu sed lectus rutrum finibus. Mauris fermentum purus eget leo aliquam sollicitudin. Integer pharetra lectus dui, at hendrerit nulla laoreet sed. Sed ultrices eget ipsum eget vestibulum. Aliquam at est nec quam facilisis dapibus. Fusce sed nisl id eros placerat blandit ut non urna. Mauris suscipit semper nisl vel vehicula. In pharetra nisl a purus vulputate, at pulvinar ante vestibulum. Curabitur rutrum efficitur enim, nec posuere ipsum sodales sed. Suspendisse bibendum est leo, consequat ornare dui euismod imperdiet. Curabitur mollis volutpat leo, quis cursus risus blandit quis. Nam nec eros non metus vehicula congue sit amet a dui. Duis commodo, turpis ac semper sagittis, ligula lacus ullamcorper magna, sed viverra mi urna quis justo. Nulla elementum mi nulla, eu luctus mi facilisis ac. Aliquam erat volutpat. Fusce vitae odio sed magna laoreet fringilla. Nulla scelerisque est a turpis iaculis, sed sodales risus auctor. Fusce sagittis fringilla neque, in dignissim felis mattis in. Integer varius ornare convallis. Sed quis arcu interdum, semper mauris vel, tincidunt ipsum. Praesent vehicula id nulla eget malesuada. Ut et feugiat lacus, et posuere justo. Vestibulum tristique dignissim mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. In varius interdum erat, non fringilla arcu. Integer et dui tempus, ullamcorper erat et, interdum velit. Suspendisse elit dui, fringilla blandit odio at, bibendum luctus justo. Donec at ligula sit amet diam viverra mollis vitae eu sem. Donec a sodales leo.";
console.log(`The text has ${lorem.split(' ').length} words`); 

// Bonus 2: Palindrome checker
let word = window.prompt("Write down a phrase: ");
let wordRight = word.replace(/\W/g, "").toLowerCase();
let wordReverse = wordRight.split("").reverse().join('').toLowerCase();
alert(wordRight === wordReverse ? "The phrase is a palindrome!" : "The phrase is NOT a palindrome");