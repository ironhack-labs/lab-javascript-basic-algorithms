// Iteration 1: Names and Input
let hacker1="Mai Yamawaki";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Yvan Menuet";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1nuevo = [];

for(let i=0; i<hacker1.length;i++){
  hacker1nuevo[i] = hacker1[i].toUpperCase();
};

let result=hacker1nuevo.join(" ");
console.log(result);

let hacker2nuevo = [];

for(let i=0; i<hacker2.length;i++){
  hacker2nuevo[i] = hacker2[i];
};

let resultreverse=hacker2nuevo.reverse();
let result2=resultreverse.join("");
console.log(result2);


let compare=hacker2.localeCompare(hacker1);
if(compare===1){
  console.log("The driver's name goes first.");
}else if(compare===-1){
  console.log("Yo, the navigator goes first definitely.");
}else if(compare===0){
  console.log("What?! You both have the same name?");
}
