// Iteration 1: Names and Input
console.log("--------ITERATION 01-----------");
console.log("-------------------");
let hacker1;
let hacker2;

hacker1 = "Michael";
hacker2 = "Alice";
console.log("Iteration #1");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log("-------------------");
console.log("-------------------");



// Iteration 2: Conditionals
console.log("--------ITERATION 02-----------");
console.log("-------------------");

console.log("Iteration #2 - Traditional Conditional");
if (hacker1.length > hacker2.length) {console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`);
   } else if (hacker1.length < hacker2.length) {  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else { console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}
console.log("-------------------");
console.log("-------------------");

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
    : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    )

    : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

    console.log("-------------------");
    console.log("-------------------");

let message;
switch (true ){
  case hacker1.length > hacker2.length: message = `The driver has the longest name, it has ${hacker1.length} characters.`;
    break;
    case hacker1.length < hacker2.length: 
     message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    break;
    default:message = `Wow, you both have equally long names, ${hacker1.length} characters!.`;
}
console.log(message);

console.log("-------------------");
console.log("-------------------");

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
    : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    )

    : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

    

// Iteration 3: Loops
console.log("-------------------");
    console.log("-------------------");

   console.log("--------ITERATION 03-----------");
   console.log("-------------------");

let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {reservedName += hacker1[i].toUpperCase() + " ";}
console.log("Using a for loop");
console.log(reservedName);

let driverName = ""; 
for (let amountOfWordsInsideName of hacker1) {
    driverName += amountOfWordsInsideName.toUpperCase() + " "; 
}
console.log("Using a for of loop");
console.log(driverName);
hacker1.split("").forEach((char) => {
    char.toUpperCase() + " "; 
});
console.log("Using a for each loop");
console.log(driverName);

let reverseName = ""; 
for (const letter of hacker1.split("").reverse()) {
    reverseNameForOf += letter;
}
console.log(reverseNameForOf);

let reverseNameForEach = "";
for (const letter of hacker1.split("").reverse()) {
    reverseNameForOf += letter;
}
console.log(reverseNameForOf);

let reverseNameForEach = ""; 
hacker1
  .split("") 
  .reverse()
  .forEach((letter) => {
    reverseNameForEach += letter; 
});
console.log(reverseNameForEach);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first."); 
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

const comparisonResult = hacker1.localeCompare(hacker2);
switch (
    true 
) {
    case comparisonResult < 0:
        console.log("The driver's name goes first.");
    break;
  case comparisonResult > 0:
    console.log("Yo, the navigator goes first, definitely.");
    break;
  default: 
  console.log("What?! You both have the same name?");
}
comparisonResult < 0
? console.log("The driver's name goes first.")
: comparisonResult > 0 
? console.log("Yo, the navigator goes first, definitely.")
  : console.log("What?! You both have the same name?");