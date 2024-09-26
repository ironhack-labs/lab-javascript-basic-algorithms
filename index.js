// Iteration 1: Names and Input
const hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Michelangelo';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
let nameInCapitalLetters = '';
for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i];
    nameInCapitalLetters += `${char} `;
}

console.log(nameInCapitalLetters.trim());

let reverseName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    reverseName += `${char}`;
}

console.log(reverseName)

let counter = 0; 
let isFound = false;
while (hacker1[counter] != undefined && hacker2[counter] != undefined && !isFound) {
    const char1 = hacker1[counter].toLowerCase();
    const char2 = hacker2[counter].toLowerCase();

    if (char1 > char2) {
        console.log(`The driver's name goes first.`);
        isFound = true;
    } 
    else if (char2 > char1) {
        console.log(`Yo, the navigator goes first, definitely.`);
        isFound = true;
    } 
    else {
        counter++;
    }
}

if (!isFound) {
    if (hacker1.length > hacker2.length) {
        console.log(`The driver goes first.`);
    } 
    else if (hacker2.length > hacker1.length) {
        console.log(`Yo, the navigator goes first, definitely.`);
    } 
    else {
        console.log(`What?! You both have the same name?`);
    }
}

let number = hacker1.localeCompare(hacker2);
console.log(number);

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sapien vitae est interdum ornare vel eget nisl. Quisque at maximus justo, eget tincidunt turpis. Cras a dolor dapibus, tincidunt lectus nec, gravida lorem. Vivamus imperdiet elementum odio, in lacinia elit accumsan eu. Ut ultrices, nisi eu egestas mattis, tellus ante ornare orci, ut blandit lectus nulla non tellus. Nam efficitur venenatis erat id volutpat. Donec sollicitudin convallis ante, vitae condimentum mi tristique sagittis. Maecenas suscipit, elit ac gravida finibus, tellus nisi accumsan odio, sit amet pulvinar enim velit et risus. Phasellus eu justo ut diam tempus interdum.

Donec facilisis ipsum lacus, at venenatis tellus pretium quis. Sed ac consectetur arcu. Proin eu euismod tortor. Fusce vehicula sapien ac nibh maximus ullamcorper. Sed quis dignissim dolor, nec maximus magna. Donec condimentum ex at varius posuere. Curabitur tincidunt arcu mauris, in pharetra nisl ultricies non. Curabitur accumsan dolor non lectus pulvinar auctor. Quisque vitae metus sit amet dui molestie commodo. Aenean at malesuada diam.

Morbi viverra venenatis leo, non aliquet risus molestie eu. Suspendisse eu massa pharetra magna venenatis pharetra a quis enim. Integer ut libero enim. Etiam pretium lorem nunc, sed bibendum mi fringilla sed. Phasellus ac felis laoreet, tincidunt diam vitae, scelerisque tortor. Pellentesque facilisis quis sem eget elementum. Donec id dui sapien. Vivamus rhoncus magna eu diam posuere, quis finibus ipsum tempus. Phasellus placerat lectus sed finibus vehicula. Proin tempus arcu a orci faucibus venenatis et sed libero. Suspendisse ornare, nisi sed tincidunt ullamcorper, metus dolor dictum urna, vitae venenatis magna lorem ac nibh. Nam dapibus, tellus vitae ornare dictum, augue libero dictum justo, ac vestibulum orci est sed elit. Duis lacinia, risus vel consectetur accumsan, libero neque viverra leo, sit amet rutrum massa orci a augue. Integer ornare, nisi porttitor pellentesque ullamcorper, erat sem volutpat mauris, ac blandit arcu urna varius nisl. Aliquam nec eros non tellus varius rutrum. Donec aliquet maximus sapien, quis sagittis dolor pellentesque ac.`

function counterOfWords(text) {
    return text.split(' ').length;
}

console.log(counterOfWords(longText));

function etCounter(text) {
    return text.split("et").length;
}

console.log(etCounter(longText));

// Bonus 2
let phraseToCheck = `Distopía ficticia?`;
phraseToCheck = phraseToCheck.toLowerCase().replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]/gi, '');

let palindromeToCheck = ``;
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    palindromeToCheck += phraseToCheck[i];
}

console.log(palindromeToCheck);

if (phraseToCheck === palindromeToCheck) {
    console.log(`You find a palindrome phrase!`)
} else {
    console.log(`Nice try, but you should continue trying!`)
}
