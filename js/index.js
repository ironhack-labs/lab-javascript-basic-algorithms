let ironhacker1 = 'Ricky'; 

    console.log('The drivers name is ${ironhacker1}');

let ironhacker2 = 'Toledo';

  console.log('The navigators name is ${ironhacker2}');
  
// Iteration 2: Conditionals
if (ironhacker1.length > ironhacker2.length) {
    console.log('The driver has the longest name it has ${ironhacker1.length} characters')
  }

else if (ironhacker2.length > ironhacker1.length) {
  console.log('It seems that the navigator has the longest name, it has $(ironhacker1.length) characters.');
}


else if (ironhacker2.length === ironhacker1.length) {
  console.log('Wow, you both have equally long names, ${ironhacker1.length} characters!');
}

// Iteration 3: Loops
let bigSpaced = " "
for (i=0; i<ironhacker1.length; i++) {
    bigSpaced += ironhacker1[i].toUpperCase()+" ";
}

console.log(bigSpaced);     

//3.2
var str = (`${ironhacker2}`);
var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
console.log(newString);

if (ironhacker1 < ironhacker2) {
    console.log("The driver's name goes first.");
} else if (ironhacker1 > ironhacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else if (ironhacker1 === ironhacker2) {
    console.log("What, you both have the same name?");
}















  
  















  
  