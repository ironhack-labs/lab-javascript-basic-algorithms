// Iteration 1: Names and Input
let hacker1 = 'Goncalo';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Bernardo';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase());
console.log(hacker1.split('').reverse().join(''));


let lexiOrder = hacker1.localeCompare(hacker2);
if (lexiOrder < 0){
    console.log("The driver's name goes first.");
} else if (lexiOrder > 0){
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}

// Bonus 1

let words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at blandit metus. Donec orci urna, imperdiet in dolor congue, sagittis gravida dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc mollis nisl sit amet purus ornare varius. Nullam cursus nunc nunc, eu accumsan erat sagittis a. Suspendisse sagittis elit enim, ac aliquam massa feugiat nec. Nunc mollis dui eu lacus elementum, eget congue est dictum. Cras condimentum velit justo, sit amet molestie tellus condimentum vitae. Nullam sagittis ultricies justo, sit amet ultricies nisl consectetur quis. Nullam tincidunt, arcu placerat pretium rutrum, dui tortor facilisis felis, ut imperdiet massa sem et nulla. Ut mi dui, porttitor vel euismod eu, efficitur vitae nibh. Pellentesque sed lacinia ligula.'
let arrayOfWords = words.split(' ');
let numOfWords = arrayOfWords.length;
console.log(numOfWords);

let countOfEt = 0;
for (let i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i] === 'et'){
        countOfEt++ 
    }
}
console.log(countOfEt);


// //Bonus 2

let phraseToCheck = 'Rats live on no evil star'.toLowerCase();
let fromTheEnd = phraseToCheck.length - 1
let palindrome = false;

for (var i = 0; i < phraseToCheck.length; i++){
    if (phraseToCheck[i] === phraseToCheck[fromTheEnd]){
        fromTheEnd--
        continue;
    } else {
        console.log('Not a palindrome')
        break;
    }
}