// Iteration 1: Names and Input

const hacker1 = "Thomas"
const hacker2 = "Shulu"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if( hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if( hacker1.length < hacker2.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)   
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// const splittedString = hacker1.split('');
// const stringWithSpaces = splittedString.join(' ');
// const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
// console.log(upperCaseStringWithSpaces);

let nameWithSpaces = '';

for(let  i = 0 ; i < hacker1.length; i++){
    nameWithSpaces += hacker1[i]+ ' '
}
console.log(nameWithSpaces.toUpperCase())


let reverseName = ''

for(let i = hacker2.length - 1; i >= 0; i--){
    reverseName += hacker2[i];
}
console.log(reverseName);

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let hackerName1 = alphabet.indexOf(`T`);

let hackerName2 = alphabet.indexOf(`S`);

if (hackerName1 > hackerName2){
    console.log(`The driver's name goes first.`)
}
else if (hackerName1 < hackerName2){
    console.log('Yo, the navigator goes first definitely')
}
else (
    console.log('What?! You both have the same name?')
)
