// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Tony";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(
    '1.2\n',
    `The driver's name is ${hacker1}`
    );

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Paco";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(
    '1.4\n',
    `The navigator's name is ${hacker2}`
    );


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
console.log('\n2.1');
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const driverNameArray = hacker1.toUpperCase().split('');
let driverNameSpaced = "";

driverNameArray.forEach(elem => driverNameSpaced += (elem + ' '))

console.log('\n3.1\n', driverNameSpaced);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(
    '3.2\n',
    hacker2.split('').reverse().join('')
    );

// 3.3 Depending on the lexicographic order of the strings, print:
console.log('\n3.3');
if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log('What?! You both have the same name?');
}


// Bonus Time!
// B1.1 Go to lorem ipsum generator and generate 3 paragraphs. Store the text in a variable type of string.
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem velit, pharetra eget lorem et, scelerisque vehicula dui. Sed justo tellus, mollis a urna in, vehicula convallis nisl. Duis id tincidunt mauris. Proin imperdiet mi nulla, sit amet viverra est fringilla eu. In sed interdum felis. Sed vitae augue non sapien feugiat molestie. Fusce faucibus dolor quis sollicitudin auctor. Duis sem arcu, vehicula quis pretium ac, blandit sit amet neque. Suspendisse neque diam, pellentesque in erat vel, condimentum semper dui. Morbi vestibulum lectus felis, quis pellentesque enim venenatis sit amet. Maecenas varius libero tortor, in hendrerit urna condimentum vel.

Praesent ultrices eros sit amet nisi malesuada malesuada. In mauris elit, eleifend ut viverra vitae, accumsan nec libero. Aliquam posuere dui risus, sed placerat mauris rutrum at. Suspendisse non enim in nisi convallis porttitor vel mattis lacus. Quisque nisl ligula, suscipit vitae est eu, pretium luctus est. Sed pretium, orci at condimentum rutrum, mauris dolor varius urna, et ultricies purus nulla nec urna. Nunc metus odio, rutrum ut tincidunt quis, tempor a augue.

Donec efficitur urna nulla, id posuere purus dapibus sit amet. Nam ut molestie orci. Proin leo elit, finibus eget maximus in, pharetra sed turpis. Sed mollis sem diam, consectetur pellentesque nisl ullamcorper quis. Integer suscipit lorem vel nibh imperdiet, et elementum magna efficitur. Ut at vehicula nisi. Duis vehicula condimentum urna. Pellentesque posuere a erat at venenatis. Suspendisse nulla sem, pretium sed purus id, dignissim pulvinar elit. Morbi eu sem at urna mollis tincidunt eget nec erat. Mauris orci dui, rutrum at nulla vel, commodo convallis est. Nullam aliquet eros quis sapien porta porttitor. Mauris maximus libero vitae dui mattis tristique. Mauris lacinia eu risus in aliquet. Duis id purus gravida, fermentum nisl eget, fringilla ipsum.`

// B1.2 Make your program count the number of words in the string.
console.log(
    '\nBonus 1\n',
    'number of words: ',
    lorem.split(' ').length
    );

// B1.3 Make your program count the number of times the Latin word et appears.
let etCounter = 1
lorem.split(' ').forEach(
    elem => {
        if (elem === 'et'){
            etCounter++
        }
    }
);
console.log(
    'number of times et appears: ',
    etCounter
    );


// Bonus 2
// Create a new variable phraseToCheck and have it contain some string value. 
const phraseToCheck = "A man, a plan, a canal, Panama!"

// Write a code that will check if the value we assigned to this variable is a Palindrome.
console.log(
    '\nBonus 2\n',
    `"${phraseToCheck}" is a palindrome: `,
    phraseToCheck.replace(/[^a-z]/gi, '').toLowerCase() === 
    phraseToCheck.replace(/[^a-z]/gi, '').toLowerCase().split('').reverse().join('')
);