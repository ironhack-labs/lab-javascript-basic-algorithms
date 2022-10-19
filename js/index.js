// Iteration 1: Names and Input
console.log("I'm ready!");
// Iteration 2: Conditionals
let hacker1="marco"
console.log("the driver'name is " +hacker1)
let hacker2 = "Carolina"
console.log (the driver' name is hacker 2)

2.const driversName = "Carolina";
const navigatorsName = "Josip";
 if (driversName.length > navigatorsName.length) {
    console.log("The driver has the longest name, it has " + driversName.length + " characters.");
 } else if (navigatorsName.length > driversName.length) {
    console.log("It seems that the navigator has the longest name, it has "+ navigatorsName.length +" characters." );

  3.1  const driversName = "Carolina";
    let newNameBack = "";
    for (let i= driversName.length -1; i >= 0; i--){
    newNameBack += driversName[i];
    }
    console.log(newNameBack);  

 3.2   const driversName = "Carolina";
    let newName=""
    for (let i= 0; i < driversName.length;i++ ){
    newName += driversName[i].toUpperCase() + " "
    }
    console.log(newName);







3.3
 const driversName = "Carolina";
 const navigatorsName = "Josip";
  if (driversName.localeCompare(navigatorsName) === -1 {
    console.log("The drivers name goes first")
  } if (driversName.localeCompare(navigatorsName) === 1 {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }



















