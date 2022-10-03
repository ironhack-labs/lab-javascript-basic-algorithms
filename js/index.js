// Iteration 1: Names and Input

let hacker1 = "Diana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hugo";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driverName = "";
for(let driver of hacker1) {

  
  driverName = driverName + driver.toUpperCase() + " ";
  
}

let driverUpperCase =driverName.substring(0, driverName.length - 1);
console.log(driverUpperCase);

let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorName = navigatorName + hacker2[i];
}
console.log(navigatorName);

let phraseOne = "The driver's name goes first.";
let phraseTwo = "Yo, the navigator goes first definately.";
let phraseThree = "What?! You both have the same name?";

if (phraseOne > phraseTwo && phraseOne > phraseThree && phraseTwo > phraseThree) {
    console.log(phraseOne);
    console.log(phraseTwo);
    console.log(phraseThree);
} 
