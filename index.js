// Iteration 1: Names and Input
console.log("iam ready");

let hacker1="Henry";
let hacker2="Ayoze";

console.log(`the drivers name is: ${hacker1}`);
console.log(`The Navigator name is: ${hacker2}`);

// Iteration 2: Conditionals
console.log("iam ready");

let hacker1="Henry";
let hacker2="Ayoze";

console.log(`the drivers name is: ${hacker1}`);
console.log(`The Navigator name is: ${hacker2}`);

if (hacker1.length>hacker2.length){
  console.log(`the driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{console.log(`wowww¡¡¡ you both have equally names,${hacker1.length} characters!`)}

// Iteration 3: Loops
let name=""
for(let i=0; i<hacker2.length; i++){
  name+=hacker2[i].toUpperCase()
  name+=" "
}
console.log(name)


let nameReverse=""
for(let i=hacker1.length -1; i>=0; i--){
  nameReverse+=hacker1[i].toUpperCase()
  nameReverse+=" "
}
console.log(nameReverse)