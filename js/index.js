// Iteration 1: Names and Input
let hacker1 = 'Ana Pinho'
console.log( `The drivers' name is ${hacker1}.`);

let hacker2 = 'Catarina Salvado'
console.log(`The navigators' name is ${hacker2}.`);

// Iteration 2: Conditionals

console.log (hacker1.length);
console.log(hacker2.length)

if (hacker1.length > hacker2.lenght){
    console.log(`It seems that the driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)  
} else { 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} 


// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();

let hacker1Splitted='';

for (let i = 0; i < hacker1.length; i++) {
    hacker1Splitted += hacker1[i] + '  '}

    console.log(hacker1Splitted)

let hacker2Reverse='';

for (let i = hacker2.length - 1; i >= 0; i--) { 
    hacker2Reverse += hacker2[i];}
    console.log(hacker2Reverse)


let compare = hacker1.localeCompare(hacker2);
console.log(compare)

if (compare = -1){
    console.log(`The driver's name goes first.`)
} else if ( compare = 0) {
    console.log(`What?! You both have the same name?`)
} else {
    console.log(`Yo, the navigator goes first definitely.`)
}
