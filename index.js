// Iteration 1: Names and Input
const hacker1 = "Pepe";
const hacker2 = "Paco"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}

// Iteration 3: Loops

// nombre mayusculas y espacios
const uppercaseName = hacker1.toUpperCase();


let upperName = "";
for ( let i = 0; i < uppercaseName.length; i++){
    const letter = uppercaseName[i];
    upperName += letter + " ";
}

console.log(upperName);



// nombre al revés

let nameBackwards = "";

for ( let i = hacker1.length - 1; i >= 0; i-- ) {
    const char = hacker1[i];
    nameBackwards += char;
    
}
console.log(nameBackwards);

// 3.3 
function nameComesFirst() {
    const nameFirst = hacker1.localeCompare(hacker2);
    
    if (nameFirst < 0) {
        console.log("The driver's name goes first.");
    } else if ( nameFirst > 0){
        console.log("Yo, the navigator goes first, definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}

nameComesFirst(hacker1, hacker2);

// bonus