/*jshint esversion: 6*/
// Iteration 1: Names and Input
let hacker1 = "Victor";
let hacker2 = "Frank";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(harker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(harker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if(harker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let str = '';
for(let letter of hacker1){
  str += letter;
  str += " ";
}
str = str.toUpperCase();
console.log(str);

let newStr = [];
for(let letter of hacker1){
  newStr.unshift(letter);
}

console.log(newStr.join(''));


let arr = [];
arr.push(hacker1);
arr.push(hacker2);
arr = arr.sort((a,b) => a>b);

if (arr[0] === arr[1]){
    console.log(`Wait... you two have the same name`);
}
else if (arr[0] == hacker1){
  console.log(`The driver's name goes first.`);
} else if (arr[0] == hacker2){
  console.log(`Yo, the navigator goes first definitely.`);
}