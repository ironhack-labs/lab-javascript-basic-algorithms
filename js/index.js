console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Mauricio";
console.log(`"The Driver's name is ${hacker1}"`);
let hacker2 = "Dominic Armstrong";
console.log(`"The Navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length >= hacker2.length){
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters`)
  }else if (hacker1.length <= hacker2.length){
  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
  } else {
  console.log(`"Wow, you both have equally long names, ${hacker2.length} characters!"`)
  }

// Iteration 3: Loops

//3.1
hacker1 = hacker1.toUpperCase();
hacker1 = hacker1.split('').join("");
console.log(hacker1);

//3.2
hacker2 = hacker2.split('');
//console.log(hacker2);
const reversed = hacker2.reverse();
//console.log(hacker2);
hacker2 = hacker2.join('');
console.log(hacker2);


//3.3
//lo hice como no debia, no me salio el condicional.
let hackers = [hacker1,hacker2];
hackers.sort();
console.log(`"Yo, the navigator goes first definitely. ${hackers}"`);

//intento con condicional
let hackers = [hacker1,hacker2];


switch (hackers.sort()){
  case (hacker1 >= hacker2)
 console.log("The driver's name goes first.")
break 
case (hacker1 <= hacker2)
  console.log("Yo, the navigator goes first definitely.")
break 
default 
  console.log("What?! You both have the same name?")
  break
}
