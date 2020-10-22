// Iteration 1: Names and Input

 let hacker1 = 'daniel';
  console.log(`The driver's name is ${hacker1}`);
 let hacker2 = 'dreyano';
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
 

 
if (hacker1.length > hacker2.length) {
    console.log(` The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) { console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`); }
else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops


// Iteration 3.1
let kmn = '';
for (let i = 0; i < hacker1.length; i++){
    kmn += hacker1[i]+' ';
} 

console.log(kmn.toUpperCase());

//Iteration 3.2

let str = '';
for (let i = hacker1.length - 1; i >= 0; i--){
    str += hacker1[i] ;
        
} console.log(str);

//Iteration 3.3
if (hacker1[0] < hacker2[0]===false) {
    console.log(`The driver's name goes first.`);
}


let a = 'a';
let b = 'b';
console.log(a > b);



