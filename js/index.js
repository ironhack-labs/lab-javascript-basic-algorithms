// Iteration 1: Names and Input
const hacker1 = "Piero"
const hacker2 = "Piero também"
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log(`${hacker1} has a total of ${hacker1Length} characters.`);
console.log(`${hacker2} has a total of ${hacker2Length} characters.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);}
    else if (hacker2Length > hacker1Length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);}
    else {console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);}


// Iteration 3: Loops
//Resposta para 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N":
console.log(hacker1.toUpperCase().split("").join(""));

//Resposta para 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ":
function reverterNome(nome) {
    return nome.split("").reverse().join("");
}
console.log(reverterNome("Piero também"));

//Resposta para 3.3 Depending on the lexicographic order of the strings, print...

if(hacker1.localeCompare(hacker2) === -1) {console.log(`The driver's name goes first.`)}
 else if(hacker1.localeCompare(hacker2) === 1){console.log(`Yo, the navigator goes first definitely.`)} 
 else {console.log(`What?! You both have the same name?`)};
