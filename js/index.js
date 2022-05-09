// Iteration 1: Names and Input
//
let hacker1 = 'Pierre';
console.log(`The driver is ${hacker1}`);
let hacker2 = 'Romain';
console.log("The navigator's name is "+ hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The longest name is ${hacker1}, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The longest name is ${hacker2}, it has ${hacker2.length} characters.`);
} else {
    console.log('it seems your both names have the same length, '+ hacker1.length + ' characters.');
}
// Iteration 3: Loops
let hacker1UpperCase = "";
for (let i = 0; i<hacker1.length; i++) {
    hacker1UpperCase += `${hacker1[i].toUpperCase()} `;
}
console.log(hacker1UpperCase.slice(0,hacker1UpperCase.length-1));

let hacker1Reversed = "";
for (let i = hacker1.length - 1; i >=0;i--) {
    hacker1Reversed += hacker1[i];
}
console.log(`Reverse : `,hacker1Reversed);

if (hacker1 < hacker2) {
    console.log(hacker1 +' is the first');
}
else if (hacker2 < hacker1){
    console.log(hacker2, 'is the first');
}
else {
    console.log("You have same names !")
}