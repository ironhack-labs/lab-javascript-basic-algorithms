// Iteration 1: Names and Input
const hacker1 = 'Anna'
console.log(`"The diver's name is ${hacker1}"`);

const hacker2 = 'Arne'
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1

let nameCapital = ''

for (let i = 0; i < hacker1.length; i++) {
    nameCapital = nameCapital + hacker1[i].toUpperCase() + ' ';
}

console.log(nameCapital);

// 3.2

let nameReverse = '';

for (let j = hacker2.length - 1; j >=0; j--) {
    nameReverse = nameReverse + hacker2[j];
}

console.log(nameReverse);

// 3.3 - without using loop
if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

let minimumLength = Math.min(hacker1.length, hacker2.length);

// 3.3 - using a loop-based solution

let k = 0
let firstAlphabeticName = ''


do {
    if(hacker1[k]< hacker2[k]) {
        firstAlphabeticName = hacker1;
    } else if (hacker2[k] < hacker1[k]) {
        firstAlphabeticName = hacker2;
    }
    k++
} while (hacker1[k-1] === hacker2[k-1])

console.log(firstAlphabeticName)

if (firstAlphabeticName === hacker1 ) {
    console.log(`The driver's name goes first.`);
} else if (firstAlphabeticName === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}


// Bonus 1

// creating the lorem-ipsum strings
let string1 = 'Lorem et ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non arcu non elit viverra fringilla. Mauris dapibus vulputate turpis, viverra placerat leo varius ut. Sed convallis condimentum odio, quis pharetra justo convallis vel. Praesent eu lacus ac mi tincidunt auctor. Fusce in mi convallis, varius lorem eget, tincidunt turpis. Etiam cursus mi efficitur lacus pharetra tempus. Aliquam semper sapien magna, tempor vestibulum mauris tristique vel. Suspendisse tempor pulvinar justo et scelerisque. Donec a placerat velit, a interdum quam. Vivamus feugiat neque neque, nec tempus nisl molestie a. Morbi ac dolor eu erat aliquet sodales. Nullam vitae lacus fermentum, tempus tortor in, pellentesque massa.'

let string2 = 'In eu rhoncus dui. Cras pulvinar dolor eu mi commodo facilisis. Quisque condimentum facilisis enim eu rutrum. Praesent volutpat efficitur ipsum. Nunc lobortis viverra magna ut sodales. Vestibulum laoreet tellus non lobortis tempus. Cras fringilla lacus eros, ut molestie sem fermentum nec. Vivamus maximus sapien nec augue ornare, a porta diam ornare.'

let string3 = 'Maecenas eget nisi consequat, fsdet tristique ipsum at, commodo orci. Etiam blandit elit eu turpis bibendum finibus non sed eros. Ut pulvinar quis ex eget tincidunt. Vestibulum pulvinar tincidunt convallis. Etiam consequat nisl ipsum, et luctus erat varius vitae. Aenean ut felis dolor. Vivamus et mi lobortis magna vehicula molestie in vel eros. In non justo ornare, iaculis metus sit amet, consequat ante. Ut laoreet lectus eget augue tristique lobortis eget at metus. Aliquam rhoncus lobortis nibh, id sollicitudin nulla sagittis quis. Curabitur aliquet vehicula orci, quis consectetur sapien tincidunt at. Donec a malesuada dolor. Maecenas iaculis auctor urna, sit amet feugiat nulla auctor vitae. Etiam gravida, sapien ac interdum auctor, ligula est commodo purus, eu aliquam orci ex in ligula.'

// counting words
// and the word et
// in this example for string3

let wordCount = 1
let etCount = 0;


while(string3.indexOf(' ') > 0) {
    wordCount ++;
    if (string3.substring(0, 3) === 'et ') {
        etCount ++;
    }
    string3 = string3.slice(string3.indexOf(' ')+1)
}

console.log(wordCount);
console.log(etCount);

// Bonus 2

let phraseToCheck = 'A man, a plan, a canal, Panama!'
;
let phraseWithoutSpaces = '';
let letter = '';

for (let k = 0; k < phraseToCheck.length; k++) {
    letter = phraseToCheck[k];
    if (letter.toLocaleLowerCase() !== letter.toUpperCase()) {
        phraseWithoutSpaces = phraseWithoutSpaces + letter.toLocaleLowerCase();
    }
}

let phraseWithoutSpacesReverse = '';

for (let l = phraseWithoutSpaces.length - 1; l >= 0; l--) {
    phraseWithoutSpacesReverse = phraseWithoutSpacesReverse + phraseWithoutSpaces[l];
}

if (phraseWithoutSpacesReverse === phraseWithoutSpaces) {
    console.log('It is a Palindrome.');
} else {
    console.log('It\'s no Palindrome.');
}
