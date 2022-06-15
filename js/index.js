// Iteration 1: Names and Input


let hacker1="Max";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Anna";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

let stringshacker1=hacker1.length;
let stringshacker2=hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${stringshacker1} characters`);
}

else if (hacker1.length < hacker2.length) { 

console.log(`It seems that the navigator has the longest name, it has ${stringshacker2} characters.`)
}

else if (hacker1.length === hacker2.length) {

    console.log(`Wow, you both have equally long names, ${stringshacker1} characters!`)
}



// Iteration 3: Loops

for (let i= 0 ; i < hacker1.length ; i++) {
    console.log(hacker1[i]);
  }
  
  for (let i= hacker1.length -1; i>=0 ; i--) {
    console.log(hacker1[i]);
  }

  let compareNames= hacker1.localeCompare('hacker2');

  if (compareNames === -1) {
  console.log("The driver's name goes first.");
} else if (compareNames === 0) {
  console.log("What?! You both have the same name?");
} else if(compareNames === 1) {
  console.log("Yo, the navigator goes first definitely.");
}