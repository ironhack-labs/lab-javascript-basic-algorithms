// Names and Input
let hacker1 = 'Nami';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = ('Ricardo');
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
}

let hacker1Upper = "";

for (let i = 0; i < hacker1.length; i++){
    hacker1Upper += hacker1[i] + " ";
}

console.log(hacker1Upper.toUpperCase());

let hacker2back = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    hacker2back += hacker2[i];
}

console.log(hacker2back);

if (hacker1Upper.localeCompare(hacker2back)){
    console.log("The driver's name goes first");
} else if (hacker2back.localeCompare(hacker1Upper)){
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same name?");
}

hacker3 = 'Ana';

let hackerLower = hacker3.toLowerCase();
let hacker3Update = "";
for (let i = hackerLower.length - 1; i >= 0; i--){
    hacker3Update += hackerLower[i];
}

if (hackerLower === hacker3Update){
    console.log('Essa string é palíndroma');
} else {
    console.log('Essa string não é palíndroma');
}


// Lorem ipsum generator
