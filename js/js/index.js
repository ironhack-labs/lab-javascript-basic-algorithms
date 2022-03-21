
//Iteration 1
let hacker1;

hacker1 = prompt("Driver's Name?");

console.log(`The driver's name is ${hacker1}`);

let hacker2;

hacker2 = prompt("Navigator's Name?");

console.log(`The navigator's name is ${hacker2}`);


//Iteration 2
driverLength = hacker1.length;
navigatorLength = hacker2.length;

if ( driverLength > navigatorLength ){
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength ){
  console.log(`The navigator has the longest name, it has ${navigatorLength} characters.`); 
}else{
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

//Iteration 3

driversName = hacker1.toUpperCase();
let allCapsName = "";

for(letters of driversName ){
    allCapsName += letters + " ";
}
hacker2 = "lex";

let backwardsName = "";
for (lettersInNav of hacker2) {
  backwardsName = lettersInNav + backwardsName;
}

console.log(backwardsName);


let driver = hacker1;
let navigator = hacker2;
let comparisonValue = navigator.localeCompare(driver);

if( comparisonValue > 0){
  console.log("The driver's name goes first.");
}else if( comparisonValue < 0){
  console.log("Yo, the navigator goes first definitely");
}else if ( comparisonValue === 0) {
    console.log('What?! You both have the same name?');
}

console.log(navigator.localeCompare(driver));

