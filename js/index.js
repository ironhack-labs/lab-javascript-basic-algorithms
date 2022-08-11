// Iteration 1: Names and Input
//
let hacker1 = 'John Doe';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'John Smith';

console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals

let firstlength = hacker1.length;

let secondlength = hacker2.length;

if (firstlength > secondlength){
    console.log(`The driver has the longest name, it has ${firstlength} characters`);
}

if (secondlength > firstlength){
    console.log(`It seems that the navigator has the longest name, it has ${secondlength} characters`);
}
if (secondlength === firstlength){
    console.log(`Wow, you both have equally long names, XX characters!`);
}


// Iteration 3: Loops
let casedDriver = hacker1.toUpperCase();

let upperSpaced = "";

 for (let i = 0; i < casedDriver.length; i++){
    upperSpaced += casedDriver[i] + " " ;
     
 }

 console.log(upperSpaced);

 let reversedNavigator = "";

 for (let j = secondlength; j >= 0; j--){
    reversedNavigator += hacker2[j];
     
 }


console.log(reversedNavigator);


nameOrder = 'John Doe'.localeCompare('John Smith');

if (nameOrder === 1){
    console.log(`The driver's name goes first.`);
}

if (nameOrder === -1){
    console.log(`Yo, the navigator goes first definitely.`);
}
if (nameOrder === 0){
    console.log(`What?! You both have the same name?`);
}
