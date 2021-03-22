// Iteration 1: Names and Input

var hacker1 = "Anthony";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Explorer";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has de longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
var hacker1Cap = hacker1.toUpperCase();
var wordWithSpaces = "";
for(var i=0; i<hacker1Cap.length; i++){  
  wordWithSpaces += hacker1Cap[i] + " ";
  }
console.log(wordWithSpaces);

//3.2
var reversedWord = "";
for(var i=hacker1.length-1; i>=0; i--){
  reversedWord += hacker1[i];
}
console.log(reversedWord);

//3.3
compare = hacker1.localeCompare(hacker2);

  if(compare == -1){
    console.log(`The driver's name goes first.`);
    
  }else if(compare == 1){
    console.log(`Yo, the navigator goes first definitely.`);
    
  }else if (compare == 0){
    console.log(`What?! You both have the same name?`);
    
  };
//Bonus
