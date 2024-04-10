// Iteration 1: Names and Input
let hacker1 = "Magda";
console.log(`The drivers's name is ${hacker1}`);
let hacker2 = "Ghost";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let magdaL = hacker1.length;
let ghostL = hacker2.length;

function compareNames() {
if
    (magdaL > ghostL) {
    console.log(`The driver has the longest name, it has ${magdaL} characters.`);
} else if 
        (ghostL > magdaL) {
        console.log(`It seems that the navigator has the longest name, it has ${ghostL} characters.`)
} else if 
    (ghostL === magdaL) {
        console.log(`Wow, you both have equally long names, ${magdaL || ghostL} characters!`);
    }

}
compareNames();

// Iteration 3: Loops

let newName = console.log(hacker1.toUpperCase());
console.log(`M A G D A`);

let reversedName = hacker2.split('').reverse().join('');
console.log(reversedName);

function alphabetComparison(){
    const comparisonResult = hacker1.localeCompare(hacker2);
    if 
    (comparisonResult < 0){
        console.log(`The driver's name goes first.`);
    } else if
    (comparisonResult > 0){
        console.log(`Yo, the navigator goes first, definitely.`);
    } else{
        console.log(`What?! You both have the same name?`);
    }
}
alphabetComparison();
