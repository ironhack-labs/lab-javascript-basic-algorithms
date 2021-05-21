// Iteration 1: Names and Input

let hacker1 = 'Christopher';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Debora';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
}else if(hacker2.length < hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}


// Iteration 3: Loops

// 3.1
let driver = hacker1.toUpperCase();
let maiuscula = '';

for(value in driver){
    maiuscula += driver[value] + ' ';
    console.log(maiuscula);    
}

//or
for(value in driver){
    console.log(driver[value]);
}


//3.2
let hacker2R = hacker2.split('').reverse();
console.log(hacker2R);

//or
let contrario = '';
for(i=hacker2.length-1; i>=0; i--){
    contrario += hacker2[i];
    console.log(contrario);
}

//or
for(i=hacker2.length-1; i>=0; i--){
    console.log(hacker2[i]);
}


//3.3
if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
}else if(hacker1 > hacker2){
    console.log('Yo, the navigator goes first definitely.');
}else{
    console.log('What?! You both have the same name?.');
}


//Bonus1
let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

let texto2 = texto.split(' ');
console.log(texto2);

let palavra = 'et';
let contador = 0;

for(let i=0; i<texto2.length; i++){
     if(texto2[i] === palavra){
        contador += 1;
    }
}

console.log(contador);


//Bonus2
let phraseToCheck =  ['Amor', 'Roma'];

let palavra1 = phraseToCheck[0].toLowerCase();
//console.log(palavra1);

let palavra2 = phraseToCheck[1].toLowerCase();
//console.log(palavra2);

let contra = '';
for(let i = palavra1.length-1; i>=0; i--){
    console.log(palavra1[i]);
    contra += palavra1[i];
    
}if(contra === palavra2){
    console.log('It is a Palindrome');
}else{
    console.log('Not a Palindrome');
}






