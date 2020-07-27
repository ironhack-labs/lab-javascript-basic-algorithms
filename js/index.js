let hacker1 = 'Yasmina';
let hacker2 = 'Mace';


// Iteration 1: Names and Input
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    
} 
else if (hacker1.length < hacker2.length)  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


let nameWithSpaces= '';
// Iteration 3: Loops
for (let index = 0; index < hacker1.length; index++) {
    nameWithSpaces += `${hacker1[index].toUpperCase()} `;
    console.log(nameWithSpaces);
}

console.log(nameWithSpaces);
let reversedName = hacker2.split('').reverse();
console.log(reversedName.join(''));



if ( hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first");
}
else if ( hacker1.localeCompare(hacker2) > 0 ) {
    console.log("Yo, the navigator goes first definitely."); 
}
else {
    console.log("What?! You both have the same name?")
}

console.log("I'm ready!");

