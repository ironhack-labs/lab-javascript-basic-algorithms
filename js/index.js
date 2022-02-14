// Iteration 1: Names and Input
console.log("I'm ready");

let hacker1 = 'Ernesto';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Renato';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  

// Iteration 3: Loops
let name = "";

for(let i = 0; i < hacker1.length; i++)
{
  name += hacker1[i] + " ";
  
}
console.log(name.toUpperCase() + " ");

//OR
//console.log(hacker2.split("").reverse().join(""));

let reverse = "";

for(let i = hacker2.length - 1; i >= 0; i--){
    
    reverse += hacker2[i];    
}

console.log(reverse);

if(hacker1.charAt(0) < hacker2.charAt(0)){
  console.log('The driver\'s name goes first.');
}
else if(hacker2.charAt(0) < hacker1.charAt(0)){
  console.log('Yo, the navigator goes first definitely.');
}
else if(hacker1 === hacker2){
    console.log('What?! You both have the same name?');
}

