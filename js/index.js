// Iteration 1: Names and Input

const hacker1 = 'Starbuck';

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Galactica';

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`You both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops


/* 
3.1 - 3.1 Print all the characters of the driver's name, 
separated by a space and in capitals
*/

console.log(hacker1.toUpperCase().split("").join(" "));

/* 
3.2 - Print all the characters of the navigator's name, in reverse order
*/

console.log(hacker1.split("").reverse().join(""));

/*
3.3 - Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

let lexicographicOrder = [
    'The driver\'s name goes first.',
    'Yo, the navigator goes first definitely.',
    'What?! You both have the same name?'
];

console.log(lexicographicOrder.sort());

/*
Bonus 1
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word et appears.
*/

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque mattis erat posuere sagittis. Pellentesque malesuada mi in pretium tincidunt. Fusce vitae sem at ipsum blandit semper sed sit amet nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dictum, risus euismod tempus rhoncus, ipsum tortor volutpat mi, nec commodo tortor massa vitae augue. Phasellus ultricies feugiat accumsan. Etiam fringilla neque in condimentum suscipit. Aliquam et erat risus. Proin hendrerit nunc sem, sit amet gravida sapien egestas id. Proin blandit nunc lorem, in laoreet magna egestas et. Quisque eget euismod ante, eget condimentum purus. Vestibulum porttitor orci sed venenatis eleifend. Integer pulvinar massa eget ligula dictum, quis aliquam metus consequat. Phasellus quis ex blandit, rhoncus dui non, lobortis felis. Praesent risus nisl, elementum ut sem sit amet, vulputate congue velit.

Curabitur nec ullamcorper erat, id cursus eros. In ac eros enim. Nulla volutpat, risus a posuere pretium, ante diam mollis libero, eu facilisis nibh arcu non nisl. Nulla cursus nunc id sem blandit, eget convallis quam vulputate. Cras pellentesque hendrerit porttitor. Donec aliquam, ipsum non rhoncus consequat, nunc mi hendrerit justo, id tempus velit nunc ultrices eros. Donec eget nisl a nisi posuere luctus ut id lectus. Pellentesque ultrices dolor sit amet turpis fermentum pellentesque. Cras molestie ut nulla a consequat. Nam aliquet varius feugiat. Nullam non suscipit ipsum, vitae accumsan enim. Proin ornare arcu purus, vitae rutrum justo pellentesque eget.

In tortor lacus, commodo nec enim ut, consequat porttitor erat. Nam vel enim eget tellus congue pulvinar a et purus. Aliquam erat volutpat. Ut nec congue lectus, in sodales lacus. Morbi eu neque efficitur, semper sapien in, vulputate ex. Integer sodales nec sapien at fermentum. Mauris varius justo quis leo interdum venenatis. Aliquam condimentum pharetra nisl, ac tincidunt diam mattis vitae. Integer facilisis mi et arcu semper, sed cursus mauris elementum. Sed ut suscipit odio. Nullam consequat ullamcorper metus, at tincidunt diam convallis sed. Donec feugiat enim id diam tempus lacinia. Duis non sapien eget nulla eleifend fringilla eu viverra nulla. Suspendisse mollis diam vel dapibus elementum.`;

function wordsCount (string) {
    return string.split(' ').length;
}
console.log(wordsCount(loremIpsum)); // loremIpsum string has 341 words

function ocurrenceCount(string, word) {
    return string.split(word).length;
}
console.log(ocurrenceCount(loremIpsum, 'et')); // 'et' repeats 28 times

/*
Bonus 2
    Create a new variable phraseToCheck and have it contain some string value. 
    Write a code that will check if the value we assigned to this variable is a Palindrome.

IN PROGRESS    */

