// Iteration 1: Names and Input
// 
let hacker1 = "elisa";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Dominik";
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`);
} else if (hacker2.length > hacker1.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`);
} else {
   console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`); 
}

// Iteration 3: Loops

for ( const value of hacker1) {
    //console.log(value.toUpperCase() );
}

//count backward by 2 for loop
for (let i = hacker1.length; i >= 0; i--) {
    //console.log(hacker1[i])
}

if (hacker1.localeCompare(hacker2) === 1){
    //console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === -1) {
    //console.log("Yo, the navigator goes first definitely.");
} else {
    //console.log("What?! You both have the same name?");
}

//convert it into a loop/switch


//bonus 1

//bonus 2
//will spend maybe more time on it later today or tomorrow
let phraseToCheck = "Amor, Roma";
phraseToCheck.toLowerCase();
let myWords = [];


if(phraseToCheck.indexOf(' ') > 0){
    myWords = phraseToCheck.split(" ", phraseToCheck.indexOf(' '));
    for (let i = 0; i < myWords.length; i++) {
        if (myWords[i].includes(",")){
            console.log(myWords[i]);
        }
    }
    //console.log(myWords);
}


