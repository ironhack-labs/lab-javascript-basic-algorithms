// Iteration 1: Names and Input
let hacker1 = "Abobora";
console.log(`the drive's name is ${hacker1} `);

let hacker2 = "Abobora";
console.log(`the navigator's name is ${hacker2} `);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`);
    }
else{
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops

//3.1

let i = 0;
let nameInUpper = '';
for (i = 0; i < hacker1.length; i++){
    if(hacker1.length - 1 === i ){
        nameInUpper += hacker1[i].toUpperCase();
    }
    else{
        nameInUpper += hacker1[i].toUpperCase()+ ' ';
    }
}
console.log(nameInUpper);

//Trying direct, without writing loops.  

console.log(hacker1.toUpperCase().split('').join(' '));


//3.2 


let nameReverse = '';
console.log(nameReverse);

for (i = hacker1.length - 1; i >= 0 ; i--){
        nameReverse += hacker1[i];
    }
    console.log(` this is the reverse ${nameReverse} `);

//Trying direct, without writing loops.  

console.log(`this is using reverse ${hacker1.split('').reverse().join('')}`);

//Using functions

function reverseString(word){
    console.log('this is using a function');
    return word.split("").reverse().join("");
}

console.log(reverseString(hacker2));

//3.3

if(hacker1.localeCompare(hacker2) === -1){
        console.log(hacker1);
    }
else if(hacker1.localeCompare(hacker2) === 1) {
    
        console.log(hacker2);
        }
else{
    console.log(`what?! you both have the same name`);
    }


//Bonus01

const phraseToTest = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit';

console.log(phraseToTest.split(' ').length);

function countWords(phrase){
    console.log('Using function to count words, the number os words is:');
    return phrase.split(' ').length;
}

console.log(countWords(phraseToTest));

countEt = phraseToTest.match(/et/g).length;

console.log(`Counting the ocurrence of the word Et in a string, this word appear ${countEt}`);

//Bonus02

