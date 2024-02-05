// Iteration 1: Names and Input
let hackerOne = "letizia";
let hackerTwo = "let";
console.log(`the navigator's name is ${hackerTwo}`);
console.log(`Il nome del driver è ${hackerOne}`);


// Iteration 2: Conditionals
let numberOfLettersDriver = hackerOne.length;
let numberOfLettersNavigator = hackerTwo.length;

    if  (hackerOne > hackerTwo) { 
        console.log(`The driver has the longest name, it has ${numberOfLettersDriver} characters.`);
    }
else if (hackerOne < hackerTwo) { 
    console.log(`It seems that the navigator has the longest name, it has ${numberOfLettersNavigator} characters.`);
}

else { 
    console.log(`Wow, you both have equally long names, ${numberOfLettersDriver} characters!`);
}


// Iteration 3: Loops 
//first loop is capital letters
//second loop is reverse letters: last component or the array to first. split to separete the letters of the string and reverse to invert the order.

for ( value of hackerOne) {
    console.log(value.toUpperCase());
}

let reversedCharacters = hackerTwo.split('').reverse();
for (let value of reversedCharacters) {
    console.log(value);}

// loop with for method to iterate over the characters. .lenght lunghezza / -1 because from the last array element to the first
// i>=0 corrisponde a i che arriva al primo elemento dell'array ovvero 0. i-- ogni volta i viene decrementato di 1 ( durante ogni interazione i parte dall'ultimo elemento vs il primo)

let reversed = '';
for (let i = hackerTwo.length -1; i>= 0; i--){
    reversed += hackerTwo[i];
 }
 console.log(reversed);

// alphabetical order names 

if (hackerOne > hackerTwo)
{
    console.log(`The driver's name ${hackerOne} goes first.`);
}
else if (hackerOne < hackerTwo){
console.log(`Yo, the navigator ${hackerTwo} goes first, definitely.`);
}
else {
    console.log('What?! You both have the same name?');
}

