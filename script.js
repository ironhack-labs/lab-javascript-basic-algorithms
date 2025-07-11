// Iteration 1: Names and Input
const hacker1 = "Fee";
let text;
text = `The driver's name is ${hacker1}`;
console.log(text);

let hacker2;
hacker2 = "Harald";
let text2;
text2 = `The navigator's name is ${hacker2}`;
console.log(text2);

// Iteration 2: Conditionals
const lengthDriver = hacker1.length;
const lengthNavigator = hacker2.length;
let text1;
text = `Driver's and navigator's name both have ${lengthDriver} letters.`;

if (lengthDriver > lengthNavigator) {
  console.log("Driver's name is longer than navigator's name.");
} else if (lengthDriver === lengthNavigator){console.log(text1);
} else {console.log("Navigator's name is longer than driver's name.");
}

// Iteration 3: Loops
// capital letters and with space
let result1 = "";
for(let i = 0; i < lengthDriver; i ++){ 
  result1 += hacker1[i].toUpperCase() + " ";
}
console.log(result1);

let hacker = "Fee";
let lengthHacker= hacker.length;
let result2 = "";
for (let i = lengthHacker - 1; i >= 0; i--) {
  result2 += hacker[i];  
}
console.log(result2);  


let hacker3 = "Piet";
let hacker4 = "Peter";
let hacker3firstLetter = hacker3[0];
let hacker4firstLetter = hacker4[0];
let textHacker3 = `${hacker3} comes first.`;
let textHacker4 = `${hacker4} comes first.`;
let textBoth = `Both names start with the same letter.`;

if(hacker3firstLetter < hacker4firstLetter){
  console.log(textHacker3);
} else if(hacker4firstLetter < hacker3firstLetter){
  console.log(textHacker4);
} else{
  console.log(textBoth);
}