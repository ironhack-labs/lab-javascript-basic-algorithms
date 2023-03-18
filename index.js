// Iteration 1: Names and Input
const hacker1= "Jon";
console.log(`The driver's name is ${hacker1}.`);

const hacker2= "Derek";
console.log(`The navigator's name is ${hacker2}.`);

//--------------------------------------------------------

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it is ${hacker1.length} charecters.`)
}
else if( hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} charecters.`)
} else{ console.log(`Wow, you both have equally long names, 5 charecters.`);
}
// -----------------------------------------------------------------

// Iteration 3: Loops 3.1
let driver= 'jon';
let driverOne= driver.toUpperCase();

for( i=0; i<1; i++){
  console.log(driverOne.split(""));
}
// Iteration 3.2 
  const navigator= "Derek";
let wordReversed= "";

for( let= i= navigator.length -1; i>= 0; i--){
  const reversed= navigator[i];
  wordReversed += reversed;
}
console.log(wordReversed);  

// Iteration 3.3

let driverSorted= driver.localeCompare(navigator);
let navigatorSorted= navigator.localeCompare(driver);

for (i=0; i<1; i++)
    if(driverSorted < navigatorSorted){
      console.log("The driver's name goes first");
    }
     else if(navigatorSorted < driverSorted){
      console.log("Yo, the navigator goes first, definitely.");
    } else { console.log("What?! You both have the same name?");
           }
