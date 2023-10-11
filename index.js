// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "David Lucca";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is: ${hacker1}.`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Mariana Carvalho";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's (hacker2) name is: ${hacker2}.`); //7 firstName +1 space +8 lastName

// Iteration 2: Conditionals
/* - The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let result = '';
for(i = 0; i < hacker1.length; i++){
    hacker1[i];
    result+= hacker1[i].toUpperCase() + ' ';
    }
console.log(result);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reversedName = '';
for(i = hacker2.length - 1; i >= 0; i--){
  hacker2[i];
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first. (if)
// Yo, the navigator goes first, definitely. (else if)
// What?! You both have the same name? (else)

if((`${hacker2}`).localeCompare(`${hacker1}`) === 1){
    console.log("The driver's name goes first.");
}
else if ((`${hacker1}`).localeCompare(`${hacker2}`) === 1){
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// there's another option to solve

if(hacker1 < hacker2){ //se hacker1 (driver) for menor
    console.log("The driver's name goes first.");
}
else if(hacker2 < hacker1){ //se hacker2 (navigator) for menor
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}