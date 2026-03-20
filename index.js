// Iteration 1: Names and Input
let hacker1 = 'John';
let hacker2 = 'Kilian';

console.log(`The driver's is ${hacker1}
The navegator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
else if(hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

// Iteration 3: Loops
//Iteration 3.1
let nameUpper = ""
for (let i = 0; i < hacker1.length; i++){
    nameUpper += hacker1[i].toUpperCase() + " "
}
console.log(nameUpper)
//iteration 3.2
nameUpper = ""
for(i = hacker2.length - 1; i >= 0; i--){
    nameUpper += hacker2[i];
}
console.log(nameUpper)
//Iteration 3.3
if (hacker1.toLowerCase() == hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?")
} else if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first.");
}else{
    console.log("Yo, the navigator goes first, definitely.");
}

// Bonus 2 

let isPalindromo = true;
const isWord = "racecar";
for(let i = 0, j = isWord.length - 1; i < j; i++, j--) {
    if (isWord[i] == isWord[j]) {
        continue;
    } else {
        isPalindromo = false;
        break
    }
}
console.log(isPalindromo ? "Es un palíndromo" : "No es un palíndromo")