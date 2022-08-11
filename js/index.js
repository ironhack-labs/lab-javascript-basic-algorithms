// Iteration 1: Names and Input

let hacker1 = prompt("Give me first driver's name");
let hacker2 = prompt("Give me first navigator's name");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

function whoLongest(name1, name2) {
    if (name1.length > name2.length) {
        console.log(name1 + " is the longest name and it has " + name1.length + " characters");
    } else if (name1.length < name2.length) {
        console.log(name2 + " is the longest name and it has " + name2.length + " characters");

    } else {
        console.log("WOW, both has equally long names, " + name1.length + " characters")
    }
}

whoLongest(hacker1, hacker2);


// Iteration 3: Loops

let capitalize = hacker1.toUpperCase();
let separated = '';

for (let index = 0; index < capitalize.length; index++) {
    separated = separated + capitalize[index] + ' ';
}
console.log(separated)

function reversed(word) {
    let reversed = '';
    for (let index = word.length - 1; index >= 0; index--) {
        reversed = reversed + word[index];
    }
    return reversed;
}

console.log(reversed(hacker1))

let names = [hacker1, hacker2];
names.sort();
console.log(names);

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name!");
} else if (names[0] === hacker1) {
    console.log("The drivers name goes first.");
} else {
    console.log("yo, tha navigator goes first definately");
}


// Bonus 1 

let para1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum vitae massa lobortis, sollicitudin libero ac, molestie ligula.Curabitur lobortis commodo risus sit amet suscipit.Sed auctor orci non diam ultrices, quis tincidunt massa sollicitudin.Donec sed elit vel dui pulvinar consectetur nec eu dolor.Nullam auctor nisi vel tellus eleifend, nec ornare metus pretium.Nunc lectus mi, mollis vitae sagittis eget, interdum ac purus.Suspendisse porttitor dui risus.In quis aliquet dolor.Proin nisl urna, suscipit egestas congue at, suscipit ac nulla.Integer tempus eros metus, in aliquam tellus tristique quis.Sed tincidunt consequat nisl sit amet iaculis.Proin ut libero nisl.Fusce quis suscipit elit.Sed justo est, rhoncus sed neque a, vulputate ullamcorper orci. Vivamus vel ligula vel turpis porttitor viverra et vel ipsum.Vivamus ornare porta nulla, id maximus urna consequat id.Nam suscipit nisi vitae dui dictum, id sollicitudin nibh aliquam.Pellentesque et nulla semper, imperdiet sapien sagittis, bibendum enim.Vestibulum lorem arcu, iaculis sit amet iaculis a, convallis id arcu.Suspendisse id leo ut augue efficitur pellentesque.Maecenas vehicula condimentum ligula ac rhoncus.Donec ornare venenatis purus, sit amet tempus lectus blandit eget.Pellentesque vehicula ut tellus vitae ultricies. Maecenas suscipit, nisi non euismod rutrum, ipsum nunc ultricies eros, sed varius nisi ex at odio.Vivamus quis risus felis.Quisque elit metus, ultricies sit amet pulvinar nec, tempor eu tellus.Etiam congue tellus vitae sapien sodales molestie. Etiam sed eleifend ligula.Quisque eu arcu consequat, ultricies odio non, vulputate nisl.Integer vel mattis erat, in congue leo.Donec mauris mi, dapibus sed tempus quis, bibendum eget quam.Fusce in dui molestie, malesuada libero eget, fringilla dolor.Donec eu nunc vitae ipsum aliquam lobortis vitae at enim.In quis erat fermentum, vulputate justo vel, hendrerit neque.Cras imperdiet consectetur arcu imperdiet mattis.Sed feugiat semper enim in facilisis.Mauris id rhoncus purus.Nullam aliquet libero vel lacus consectetur auctor sed et magna.Donec dictum ligula et lectus dictum, eget finibus massa maximus.`;

let arrayWords = para1.split(" ");
console.log(" The text has " + arrayWords.length + " words");

let counter = 0;
for (let word of arrayWords) {
    if (word === 'et') counter++;
}
console.log("et appears " + counter + " times.");


// Bonus 2

let phraseToCheck = 'A man, a plan, a canal, Panama!';

function palindromeCheck(phraseToCheck) {
    let cleanPhrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '');

    // check if the reversed is equal to the original
    if (cleanPhrase.toUpperCase() === reversed(cleanPhrase).toUpperCase()) {
        return (phraseToCheck + " is a PALINDROME!");
    }
}

console.log(palindromeCheck(phraseToCheck));








