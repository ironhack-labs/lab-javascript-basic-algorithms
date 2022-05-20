console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Roberto" 

    console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Andrea"

    console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    console.log(`"${hacker1.toUpperCase().split('').join(' ')}"`);
}

for (let i = 0; i < hacker1.length; i++) {
    console.log(`"${hacker1.split("").reverse().join("")}"`)
}

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1  > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}

//Bonus 1:

function wordCount(text) { 
    return text.split(" ").length;
  }

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    console.log(wordCount(loremIpsum));

let count = loremIpsum.match(/et/g);
    console.log(count);

//Bonus 2:


