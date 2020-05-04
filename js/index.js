// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'John';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Alexandre';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
const lengthNameDriver = hacker1.length;
const lengthNameNavigator = hacker2.length;
 //The driver has the longest name
if (typeof hacker1 === 'string' && typeof hacker1 === 'string'){
    if(lengthNameDriver > lengthNameNavigator){
        console.log(`The driver has the longest name, it has ${lengthNameDriver} characters`);
    } //The navigator has the longest name
    else if (lengthNameDriver < lengthNameNavigator) {
        console.log(`It seems that the navigator has the longest name, it has ${lengthNameNavigator} characters`);
    } //Names have same length
    else {
        console.log(`Wow, you both have equally long names, ${lengthNameDriver} characters!`);
    }
} else {
    console.log('The name of one of the hacker is incorrect');
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//Capitalize
let nameDriverCap = hacker1.toUpperCase();
//Add space
let nameDriverCapSpace = '';
for (let i=0; i<lengthNameDriver; i++){
    nameDriverCapSpace += nameDriverCap[i] + ' ';
}
console.log(nameDriverCapSpace);


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = '';
for (let i=lengthNameDriver-1; i>=0; i--){
    reverseName += hacker1[i];
}
console.log(reverseName);

//3.3 Depending on the lexicographic order of the strings, print:
const firstLetterDriver = hacker1[0];
const firstLetterNavigator = hacker2[0];

if(firstLetterDriver < firstLetterNavigator){
    console.log(`The driver's name goes first.`);
} else if (firstLetterDriver > firstLetterNavigator) {
    console.log(`Yo, the navigator goes first definitely.`);
} //Names have same length
else {
    console.log(`What?! You both have the same name?`);
}

