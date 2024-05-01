// Iteration 1: Names and Input
let hacker1 = 'Victor';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Yves';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length){
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else{
    console.log('Somthing is Wrong')
}

// Iteration 3: Loops
let hacker1Result = '';
for(let i = 0; i < hacker1.length; i++){
    hacker1Result += hacker1[i].toUpperCase() + " "; 
}

console.log(hacker1Result);

// 3.2
let hacker2Result = '';
for(let i = hacker2.length - 1; i >= 0; i--){
    hacker2Result += hacker2[i];
}
console.log(hacker2Result);

// 3.3
if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
}
 if(hacker2 < hacker1){
    console.log(`Yo, the navigator goes first, definitely.`);
}
 if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);

}
