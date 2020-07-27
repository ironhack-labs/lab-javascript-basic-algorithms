// Iteration 1: Names and Input
let hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Malcolm";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " " +  "characters.");
} else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has a longer name with " + hacker2.length + " " + "characters.");
} else{
    console.log("WoW, they both have equal names with " + hacker1.length + " " + "characters.");
}

// Iteration 3: Loops

let  result = "";
for(i = 0 ; i< hacker1.length ; i++){
    result += `${hacker1[i]} `
}
console.log(result.toUpperCase());

let nameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i];
}
console.log(nameReversed);


//googled "javascript lexicographic compare" , solution copied from Stackoverflow.
if (hacker1.localeCompare(hacker2) === -1) { 
  console.log(' The drivers name goes first.'); 
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}