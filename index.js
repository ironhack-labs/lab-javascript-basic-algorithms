// Iteration 1: Names and Input
const hacker1 = 'Selena';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Pedro';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const lengthDriver = hacker1.length;
const lengthNavigator = hacker2.length;

if (lengthDriver > lengthNavigator){

    console.log(`The driver has the longest name, it has ${lengthDriver} characters.`);

}else if (lengthDriver < lengthNavigator) {

    console.log(`It seems that the navigator has the longest name, it has ${lengthNavigator} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${lengthDriver} characters!.`);
}

// Iteration 3: Loops
/*3.1 Print the characters of the driver's name,
separated by space, and in capital letters */
let newStringDriver = '';

//Loop through the array
for (let i = 0; i < hacker1.length; i++) {

    const char = hacker1[i].toUpperCase();

    newStringDriver += char; //Store each caracter in newStringDriver

    if (i < hacker1.length - 1) {

        newStringDriver += ' '; //If it's not the last character, add a space
    }
}

console.log(newStringDriver);

/*3.2 Print all the characters
of the navigator's name in reverse order*/
let newStringNavigator = '';

for (let i = hacker2.length -1; i >= 0 ; i--){

    const char = hacker2[i];

    newStringNavigator += char;
}

console.log(newStringNavigator);


//3.3 Depending on the lexicographic order of the strings, print

//If the names are the same:
if (hacker1 === hacker2) {

    console.log ('What?! You both have the same name?');

} else {

    let newHacker1 = hacker1;
    let newHacker2 = hacker2;

    //The same size for each String. padEnd() to add spaces to the smallest string
    if (lengthDriver > lengthNavigator) {

        newHacker2 = hacker2.padEnd(lengthDriver, " ");

    } else if (lengthDriver < lengthNavigator) {

        newHacker1 = hacker1.padEnd(lengthNavigator, " ");

    }

    //Loop to loop through each character of the strings
    for (let i = 0; i < newHacker1.length; i++){

        const charDriver = newHacker1[i];
        const charNavigator = newHacker2[i];

        if (charDriver < charNavigator) {

            console.log ("The driver's name goes first.");
            break;

        } else if (charDriver > charNavigator) {

            console.log("Yo, the navigator goes first, definitely.");
            break;
        }
    }
}

//--BONUS!--
//Bonus 1

//Generate 3 paragraphs. Store the text in a new string variable named longText.
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis quis tellus ut tincidunt. Donec ac erat pellentesque, porttitor sapien nec, molestie metus. Praesent tincidunt ultricies massa, ut faucibus orci vehicula eget. Quisque viverra vitae dui ut lobortis. Morbi pulvinar tempus porttitor. Sed auctor justo at enim interdum tempor. Nunc quis semper elit. In efficitur vehicula dictum. Nam nec ultricies leo, non feugiat dolor. Aenean scelerisque porta tempus. Vivamus suscipit, elit quis lobortis venenatis, nibh urna egestas justo, nec ullamcorper leo libero vel diam. Integer ac est pharetra, efficitur arcu ac, tempus velit. Vestibulum vehicula posuere sem non maximus.

Morbi enim magna, vulputate quis vehicula eget, convallis at ex. Curabitur convallis arcu ex, sit amet euismod tortor pharetra sed. Aliquam quis dui vitae arcu vestibulum pharetra. Pellentesque non odio nec leo ullamcorper pulvinar in sed risus. Vivamus fringilla ante orci, faucibus ornare nisl facilisis vitae. Fusce eleifend turpis id tellus tristique porttitor. Donec sit amet lacinia velit. Mauris semper nisl vel justo cursus tincidunt. Donec iaculis, tortor eu tempor semper, erat tortor venenatis neque, non scelerisque libero velit ac elit. Etiam a eros nibh.

Ut accumsan ultricies felis vitae egestas. Fusce egestas risus ut commodo sodales. Mauris sed sodales dui, et eleifend odio. Duis bibendum ipsum justo, id feugiat ligula rutrum et. Integer eleifend ligula vitae ipsum mollis, at hendrerit turpis imperdiet. Morbi condimentum lobortis eros, non mollis lacus ultricies sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat justo, lobortis iaculis diam in, malesuada lobortis risus. Nulla blandit interdum nulla, vel aliquet nulla. Sed interdum eros velit, non accumsan nisl iaculis nec. Suspendisse pharetra augue a ligula sodales, sed consequat felis lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed massa urna, ultrices non velit a, blandit faucibus ante. Ut egestas venenatis pulvinar.`;

//Make your program count the number of words in the string.

const regularExpression = /[\s,.]+/g; //To pass it as a parameter to .split() and separate the words when it finds these symbols.
// \s represents a white space. []+ means that it can match any character included inside it ([]) one or more times (+)
//g find all matches (global)
const arrayWords = longText.split(regularExpression);
const totalWords = arrayWords.length;

console.log(`The numbers of words: ${totalWords}`);

let counterEt = 0;

for (let i = 0; i < totalWords; i++) {

    const word = arrayWords [i].toLowerCase();

    if (word === 'et') {

        counterEt++;
    }
}

console.log(`The number of times the Latin word et appears: ${counterEt}`);

//Bonus 2
const phraseToCheck = 'No \'x\' in Nixon';

let phraseWithoutSymbols = '';
let reversePhrase = '';

//Phrase without symbols and Lower Case:
for (let i = 0; i < phraseToCheck.length; i++) {

    const char = phraseToCheck[i].toLocaleLowerCase();

    //If char is one of these symbols, break and don't include the char in the variable
    switch (char){

        case '.':
        case ',':
        case ' ':
        case '!':
        case '?':
        case '\'':
        case ':':
        case '\"':
            break;

        default:
            phraseWithoutSymbols += char;
    }
}

console.log(`Phrase without symbols: ${phraseWithoutSymbols}`);

//Reverse phrase:
for (let i = phraseWithoutSymbols.length -1; i >= 0; i--){

    const char = phraseWithoutSymbols[i];

    reversePhrase += char;

}

console.log(`Reverse phrase with out symbols: ${reversePhrase}`);

//Compare phrase with the reverse phrase:
if (phraseWithoutSymbols === reversePhrase ){

    console.log(`The string: "${phraseToCheck}" is a palindrome.`);

} else {

    console.log(`The string: "${phraseToCheck}" isn't a palindrome.`);
}



