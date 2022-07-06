// Iteration 1: Names and Input
//

let hacker1 = 'Diana';
console.log("The driver's name is " + hacker1);
let hacker2 = 'Bogdi';
console.log("The driver's name is " + hacker2);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let sepLetters = '';
for (i in hacker1) {
   sepLetters = sepLetters.concat(hacker1[i],' ');
}
console.log(sepLetters.toUpperCase());

//3.2 reverse a string

let tempArr = [];
// add every letter to an array
for (i in hacker2) {
    tempArr.push(hacker2[i]);
}
console.log(tempArr);

let reverse = '';
// iterate through the array backwards
for (i = tempArr.length - 1; i >=0; i--) { //length - 1, because arrays start at [0]
    reverse = reverse.concat(tempArr[i]);
}
console.log(reverse);