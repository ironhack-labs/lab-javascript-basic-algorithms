// Iteration 1: Names and Input

let hacker1 = "Flor";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alex";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops

function printNameUppercase(name) {
    let nameStr = "";
    for (let i = 0; i < name.length; i++) {
        nameStr = nameStr + `${name.charAt(i).toUpperCase()} `;
    }
    return nameStr;
}

function printNameReverse(name) {
    // I convert the str into an array to reverse it.
    let nameStrArrayReverse = name.split('').reverse();

    // .toString converts my array into a string --> "r,o,l,F"
    let nameStr = nameStrArrayReverse.toString().replaceAll(',', '');
    return nameStr;
}

function printNamesOrder(){
    let result = "";

    // .localeCompare --> compares by alphabetical order
    // output: negative value --> first value goes first (hacker1)
    // output: positive value --> second value goes first (hacker2)
    // output: 0 --> they are equal

    if (hacker1.localeCompare(hacker2) < 0) {
        result = "The driver's name goes first.";
    } else if (hacker1.localeCompare(hacker2) > 0) {
        result = "Yo, the navigator goes first definitely.";
    } else {
        result = "What?! You both have the same name?";
    }
    console.log(result);
}

function printResults() {
    console.log(printNameUppercase('Flor'));
    console.log(printNameReverse('Flor'));
    printNamesOrder();
}

printResults();


// Task Bonus 1

let loremIpsumStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam augue, pulvinar id aliquam id, fermentum nec libero. Nunc gravida 
egestas ante sollicitudin aliquet. Proin in dignissim eros. Suspendisse commodo nisl volutpat, dignissim orci ac, aliquet nisi. Nunc pellentesque, eros at 
imperdiet pharetra, lectus odio luctus ipsum, non eleifend tellus ligula eget lacus. Donec vulputate quam ut libero tempor, in sollicitudin lacus tristique. 
Vivamus non consequat massa. Phasellus malesuada volutpat libero, vel vehicula nisi rutrum quis. Nunc vitae congue sem. Duis tincidunt, nibh sit amet fermentum 
hendrerit, lectus lorem feugiat nunc, vel vestibulum elit odio id ante. Pellentesque pharetra tortor augue. Pellentesque eu orci libero. Ut et quam lacinia, 
scelerisque metus sed, egestas lectus. Nunc finibus vulputate lacus a convallis. In ac massa nec nisl venenatis euismod non nec erat. Morbi sapien enim, 
pellentesque vel eros ac, feugiat rhoncus magna. Ut arcu diam, dictum non aliquet et, consequat et felis. Cras gravida metus elit, nec gravida tortor finibus at.
Suspendisse potenti. Nulla viverra malesuada pulvinar. Sed at aliquam lorem. Praesent vehicula enim in erat sollicitudin consequat. Phasellus non sollicitudin mauris, 
ornare iaculis turpis. Ut non bibendum arcu. Suspendisse potenti. Aenean id lorem sed augue interdum euismod. Praesent condimentum est lectus, id volutpat dolor 
condimentum imperdiet. Aliquam ac iaculis ipsum, nec hendrerit nunc. Maecenas condimentum, arcu quis dapibus aliquam, augue augue vehicula quam, eget vestibulum nisi magna eu justo.`;

function countWords(text) {
    let wordsArray = text.split(" ");
    let wordsNumber = wordsArray.length;
    return wordsNumber;
}

function countWordOccurrences(text, word) {
    let wordsArray = text.split(" ");
    let result = wordsArray.filter(x => x === word).length;
    return result;

}

let numberOfWords = countWords(loremIpsumStr);
let counterWordOccurrences = countWordOccurrences(loremIpsumStr, 'et');
console.log(`Our string has ${numberOfWords} words.`);
console.log(`Our string contains the word 'et' ${counterWordOccurrences} times.`);


// Task Bonus 2

let phraseToCheck = "Was it a car or a cat I saw";
let phraseToCheck2 = "Amor, Roma";
let phraseToCheck3 = "step on no pets";
let phraseToCheck4 = "Cappuccino"

function areYouPalindrome(phrase) {
    let iAmPalindrome = true;
    // lowecase and remove spaces
    let strToCheck = phrase.toLowerCase().replaceAll(' ', '');

    for (let i=0; i < strToCheck.length / 2; i++) {

        let char1 = strToCheck.charAt(i);
        let char2 = strToCheck.charAt((strToCheck.length - 1) - i);

        if (char1 != char2) {
            iAmPalindrome = false;
            break;
        }
    }

    if (iAmPalindrome) {
        console.log(`Yuhu! The prase '${phrase}' is a Palindrome!`);
    } else {
        console.log(`No, the prase '${phrase}' is not a Palindrome.`);
    }
}

areYouPalindrome(phraseToCheck);
areYouPalindrome(phraseToCheck2);
areYouPalindrome(phraseToCheck3);
areYouPalindrome(phraseToCheck4);
