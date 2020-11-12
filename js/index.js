// Iteration 1: Names and Input
var hacker1 = "Kenton";
var hacker2 = "Lucas";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
}

// Iteration 3: Loops
console.log("-----------Iteration 3 without loop------------");
//without loop
console.log(hacker1.split('').join(' ').toUpperCase());

function reverse(hacker2){
    return hacker2.split('').reverse().join('');
}
console.log(reverse(hacker2));
console.log("-----------with loop------------");
//with loop
let spaceVar = '';
for (let i = 0; i < hacker1.length; i++){
    spaceVar += hacker1[i].toUpperCase() + " ";
}
console.log(spaceVar);

let spaceVar2 = '';
for (let i = hacker2.length-1; i >= 0; i--){
    spaceVar2 += hacker2[i];
}
console.log(spaceVar2);

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let firstLetterHacker1 = hacker1[0];
let firstLetterHacker2 = hacker2[0];

function testFirstLetter(){
for (let i = 0; i < alphabet.length; i++){
    if (alphabet[i] === firstLetterHacker1){
        console.log(`The driver's name goes first`);
    }
    else if (alphabet[i] === firstLetterHacker2){
        console.log(`The navigator goes first`);
    }
    else{
        console.log(`You both have same names!`);
        return;
    }
}
}
testFirstLetter();
