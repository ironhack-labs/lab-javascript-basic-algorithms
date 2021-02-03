// Iteration 1: Names and Input
console.log('------Iteration 1------');

const hacker1 = 'Julie';
const hacker2 = 'Benjamin';

const printDriverName = (name) => console.log(`The driver's name is ${name}`);
printDriverName(hacker1);

const printNavName = (name) => console.log(`The navigator's name is ${name}`);
printNavName(hacker2);


// Iteration 2: Conditionals
console.log('------Iteration 2------');

const compareNameLenght = (driverName, navName) => {
    const driverNameLength = driverName.length;
    const navNameLength = navName.length;
    if(driverNameLength > navNameLength) {
        return `The driver has the longest name, it has ${driverNameLength} characters.`;
    } else if(driverNameLength < navNameLength) {
        return `It seems that the navigator has the longest name, it has ${navNameLength} characters.`;
    } else {
        return `Wow, you both have equally long names, ${navNameLength} characters!`;
    }
}
console.log(compareNameLenght(hacker1, hacker2));

// Iteration 3: Loops
console.log('------Iteration 3------');

//driver name
let uppDriverName = hacker1.toLocaleUpperCase();
let result = '';
for(let letter of uppDriverName) {
    result += `${letter} `;
}
console.log(result.slice(0, result.length - 1));

//nav name
let result2 = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
    result2 += hacker2[i];
}

console.log(result2);

//lexicographic order 
const compareLexOrder = (driverName, navName) => {
    if(driverName < navName) {
        return `The driver's name goes first.`;
    } else if(driverName > navName) {
        return `Yo, the navigator goes first definitely.`;
    } else {
        return `What?! You both have the same name?`;
    }
}

console.log(compareLexOrder(hacker1, hacker2));

//Bonus Time

//----bonus 1
//number of words
console.log('------Bonus 1------');
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const isLetter = (letter) => letter.toUpperCase() !== letter.toLowerCase();

//move away all non letter and space
let cleanLorem = '';
for(let letter of lorem) {
    if(isLetter(letter) || letter === ' ') {
        cleanLorem += letter;
    }
}

//verify that the space is followed by a letter and has a letter before it
let counter = 1;
for(let i = 1; i < cleanLorem.length; i++) {
    if(isLetter(cleanLorem[i - 1]) && cleanLorem[i] === ' ' && isLetter(cleanLorem[i + 1])) {
        counter++;
    }
}

//we didn't figure out the issue if there's multiple space followed
console.log(`Lorem has ${counter} words.`);

//bonus 1
//count the number of times the Latin word -et- appears
counter = 0;
cleanLorem = cleanLorem.toLowerCase();
for(let i = 0; i < cleanLorem.length; i++) {
    if(cleanLorem[i] === 'e' && cleanLorem[i + 1] === 't') {
        counter ++;
    }
}

console.log(`Number of time 'et' appears : ${counter}`);

//bonus 2
console.log('------Bonus 2------');


const phraseToCheck = (string) => {
    //remove all non letters
    let cleanWord = '';
    for(let letter of string) {
        if(isLetter(letter)) {
            cleanWord += letter;
        }
    }
    cleanWord = cleanWord.toUpperCase();
    
    //if first letter equal to last letter && if the length is not above half of lengh = increment
    let index = 0;
    while(cleanWord[index] === cleanWord[cleanWord.length - 1 - index] && index < Math.floor(cleanWord.length / 2)) {
        index++;
    }

    //if the while succeeded to go as far as half of the length, then it's a palindrome
    if(index === Math.floor(cleanWord.length / 2)) return true;
    else return false;
}

console.log(phraseToCheck('Was it a car or a cat I saw?'));



