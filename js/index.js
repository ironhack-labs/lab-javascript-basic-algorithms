// Iteration 1: Names and Input

// driver
let hacker1 = ("Johnny");
let length1 = hacker1.length;
console.log(hacker1);

// navigator
let hacker2 = ("Bobbbyjonnny");
let length2 = hacker2.length;
console.log(hacker2);


// Iteration 2: Conditionals

if ( length1 > length2 ){
  console.log(`The driver has the longest name, it has ${length1} characters`)
  
} else if ( length1 < length2 ) {
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
  
} else {
  console.log (`Wow, you both have equally long names, ${length2} characters!`)
}



// Iteration 3: Loops

// empty string
let capsHacker1 = "";

// alternative
//.  V -as many as are in - V
// for (let amountOfLetters in hacker1){

for (i = 0; i < hacker1.length; i++){
  capsHacker1 += hacker1.toUpperCase()[i] + ' ';
}

console.log (capsHacker1);

let backwardsHacker2 = "";
for (i = length2 - 1; i >= 0; i--){
  backwardsHacker2 += hacker2[i];
}

console.log (backwardsHacker2);