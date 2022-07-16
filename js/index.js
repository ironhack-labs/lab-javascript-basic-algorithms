// Iteration 1: Names and Input
//

let hacker1 = 'John';
let hacker2 = 'Jacob';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if(hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1

for (let i = 0; i < hacker1.length; i++){
   console.log(hacker1[i].toUpperCase() + ' ');
}
// 3.2

for (let i = hacker1.length - 1; i >= 0; i--){
    console.log(hacker1[i]);
  }

 // 3.3

 hacker1 = hacker1.toLowerCase();
 hacker2 = hacker2.toLowerCase();
 let nameArray = [];
 nameArray.push(hacker1, hacker2);
 
 
 if (nameArray[0] > nameArray[1]){
   console.log(`The driver's name goes first.`);
 } else if(nameArray[1] > nameArray[0]){
   console.log(`Yo, the navigator goes first definitely.`)
 } else if(nameArray[0] == nameArray[1]){
   console.log(`What?! You both have the same name?`)
 }