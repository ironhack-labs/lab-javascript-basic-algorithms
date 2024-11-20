// Iteration 1: Names and Input
const hacker1 = "Sebastian";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "MaryJoe";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const driver =hacker1.length;
const navigator = hacker2.length;
if (driver > navigator){
    console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${navigator} characters!`)
}

// Iteration 3: Loops
/* 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N". */
let nameSpaced = "";
for (let i = 0; i <= hacker1.length-1; i++){
    const letter= hacker1[i];
    
    if (i !== hacker1.length-1){
        nameSpaced += letter + " ";
    } else if (i === hacker1.length-1){
        nameSpaced +=  letter;
        break;
    }
}
console.log(nameSpaced.toUpperCase());

/* 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ". */
let nameReversed ="";

for (let i = hacker1.length-1; i >= 0; i--){
    const rletter = hacker1[i];
    nameReversed += rletter;
}

console.log(nameReversed);

/* 3.3 Depending on the lexicographic order of the strings */
const order= hacker1.localeCompare(hacker2);

if (order<0){
    console.log("The driver's name goes first");
} else if (order>0){
    console.log("Yo, the navigator goes first, definitely.")
} else{
    console.log("What?! You both have the same name?")
}
