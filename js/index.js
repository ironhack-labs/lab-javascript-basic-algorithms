// Iteration 1: Names and Input
const hacker1 = "Judyta";

console.log("The driver's name is " + hacker1);

const hacker2 = "Sillas";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has' + hacker1.length +' characters.')
} else if ( hacker2.length > hacker1.length) {
    console.log('It seems that the navigator has the longest name, it has' 
    + hacker2.length + ' characters.')
} else if (hacker1.length === hacker2.length) {
    console.log('Wow, you both have equally long names, ' + hacker1.length +' characters!')
}
// Iteration 3: Loops

let nameToUpperCase = "";
for (let i = 0; i < hacker1.length; i++){
    nameToUpperCase += hacker1[i].toUpperCase() + " "
}
console.log(nameToUpperCase)

let reverseName = ""
for (let i = hacker2.length - 1 ; i >= 0; i--){
    reverseName += hacker2[i];
   
}
console.log(reverseName);

function nameFirst(hacker1, hacker2){
    if (hacker1 > hacker2) {
        console.log('The driver\'s name goes first.');
    } else if ( hacker2 > hacker1) {
        console.log('Yo, the navigator goes first definitely.');
    } else {
       console.log('What?! You both have the same name?');
    }
}
nameFirst(hacker1, hacker2);