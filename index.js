// Iteration 1: Names and Input
const hacker1 = 'eden';
console.log(`The drives name is ${hacker1}`)
const hacker2 = 'jimmy';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

function nameChanger(name) {
    console.log(name);
    let resultName = ''
    for (let i = 0; i < name.length; i++) {
        resultName += name[i].toUpperCase() + ' ';
    }
    console.log(resultName);
}
nameChanger(hacker1);

function nameReverse(name) {
    let resultName = ''
    for (let i = name.length - 1; i >= 0; i--) {
        resultName += name[i];
    }
    console.log(resultName);
}

nameReverse(hacker2);

const order = hacker1.localeCompare(hacker2);

if (order < 0) {
    console.log('The driver\'s name goes first.')
} else if (order > 0) {
    console.log('Yo, the navigator goes first, definitely.')
} else if (order === 0) {
    console.log('What?! You both have the same name?')
}

const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const longText = lorem1 + lorem2 + lorem3;

const words = longText.split(' ');

const wordCount = words.length;

function etCount (text){
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'e' && text[i+1] === 't' && text[i+2] === ' '){
            count++
        }
    }
    return count
}

console.log(etCount(longText));