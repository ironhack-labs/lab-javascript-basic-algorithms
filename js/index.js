console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Frank';
console.log(`the driver's name is ${hacker1}`);
let hacker2 = prompt ("What is your name");
console.log(`the navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
if (driverLength > navigatorLength){
  console.log(`The driver has the longest name, it has ${driverLength} characters`);
}
else if (driverLength < navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters`);
}
else{
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
};
// Iteration 3: Loops
let driverUpperCased = hacker1.toUpperCase();
let navigatorUperCased = hacker2.toUpperCase();
let driverUpperCasedSeparated = "";
let navigatorUpperCasedSeparated = "";
for (i = 0;i < driverUpperCased.length; i++){
    driverUpperCasedSeparated += driverUpperCased[i] + " ";
 }
 console.log(driverUpperCasedSeparated);

 let navigatorinreverse = "";
 for (i = hacker2.length - 1; i >= 0; i--){
     navigatorinreverse += hacker2[i];
 }
 console.log(navigatorinreverse);


