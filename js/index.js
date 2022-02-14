console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "john";
const hacker2 = "johny";


console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e.

let driverName = "";

for (i = 0; i < hacker1.length; i++){
   driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName.trim());

//3.2 Print all the characters of the navigator's name, in reverse order.

let reverse = "";

for (i = hacker1.length - 1; i >= 0; i--){
    hacker1[i];
    reverse += hacker1[i];
 }

 console.log(reverse);

//3.3 Depending on the lexicographic order of the strings.
/*
// first try
    while (hacker1 < hacker2){
    console.log("The driver's name goes first.");
    break;
} 
    while(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely");
    break;
} 
    while (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
}
*/

// secund try

let longName = Math.max(hacker1.length, hacker2.length);
let output;

for (let i = 0; i < longName; i++){
    if (hacker1 === hacker2){

        output = "What?! You both have the same name?";

    } else if ( hacker1[i] < hacker2[i] || hacker1[i] === undefined){
        
        output = "The driver's name goes first.";

    } else if ( hacker1[i] > hacker2[i] || hacker2[i] === undefined){
        
        output = "Yo, the navigator goes first definitely.";

}   else if (hacker1 === hacker2){
    continue;
}
}
console.log(output);