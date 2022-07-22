// Iteration 1: Names and Input//

let hackerOne;
hackerOne= 'Leila';
console.log("the driver's name is",hackerOne);
let hackerTwo= 'Mariana';
console.log("The navegator's name is", hackerTwo);

// Iteration 2: Conditionals
let result="";
let hackerOneLength= hackerOne.length;
let hackerTwoLength= hackerTwo.length;
if  (hackerOneLength > hackerTwoLength) {
result= 'The driver has the longest name, it has  ${hackerOneLength} characters';
}
else if (hackerOneLength < hackerTwoLength) {
result= "It seems that the navigator has the longest name, it has ${hackerTwoLength} characters.";
}
else {
result= "Wow, you both have equally long names, ${hackerTwoLength} characters!"   
}

console.log(result)

// Iteration 3: Loops
let capitalName= [];
for (value of hackerOne) {
    capitalName.push(value.toUpperCase());
}
console.log (capitalName.join(' '));

let reverseName= '';
for (let i= hackerTwo.length -1; i >= 0; i--) {
    const elem = hackerTwo.charAt(i)
    reverseName += elem
}
console.log (reverseName);

if (hackerOne.charAt(0) < hackerTwo.charAt(0)) {
resultTwo= "The driver's name goes first."
} else if (hackerOne.charAt(0) > hackerTwo.charAt(0)) {
resultTwo= "Yo, the navigator goes first definitely."
} else 
resultTwo= "What?! You both have the same name?"
console.log (resultTwo)
