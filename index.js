// Iteration 1: Names and Input

let hacker1 = "Pepito";
console.log("The driver's name is " + hacker1);
let hacker2 = "Joselito";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i].toUpperCase();
   
    if (i < hacker1.length - 1) {
        spacedName += " ";
    }
}
console.log(spacedName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);


let minLength = Math.min(hacker1.length, hacker2.length);
let lexicographic = 0;

for (let i = 0; i < minLength; i++) {
    if (hacker1[i] < hacker2[i]) {
        lexicographic = -1;
        break;
    } else if (hacker1[i] > hacker2[i]) {
        lexicographic = 1;
        break;
    }
}


if (lexicographic === 0) {
    if (hacker1.length < hacker2.length) {
        lexicographic = -1;
    } else if (hacker1.length > hacker2.length) {
        lexicographic = 1;
    }
}


if (lexicographic < 0) {
    console.log("The driver's name goes first.");
} else if (lexicographic > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}



let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia, odio quis egestas sodales, odio sem varius neque, ut congue erat ligula quis mi. Proin urna leo, volutpat id ligula vel, vestibulum iaculis ipsum. Curabitur aliquet lacus et efficitur varius. Aliquam tempor tortor at auctor tempus. In sit amet aliquam felis. In ut nulla et lacus venenatis sagittis sed sit amet arcu. Praesent et varius mauris. Morbi ultricies urna vitae tincidunt consectetur. Nulla ullamcorper leo congue risus euismod facilisis. Nulla vulputate, lectus id tincidunt sagittis, velit quam auctor ipsum, eu commodo diam sapien vel ex. Morbi ac velit quis mauris tristique cursus. Curabitur nulla justo, cursus vel lacus id, varius fermentum felis.

Nunc ac mi quis nunc hendrerit feugiat. Cras fermentum ipsum at tempor tincidunt. Vivamus egestas lectus ut tortor venenatis elementum. Donec tempor convallis augue eu porta. In hac habitasse platea dictumst. Vivamus ultrices massa ante, sed laoreet tellus dapibus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nec augue id ipsum sagittis iaculis. Duis eget ligula ut enim viverra rutrum. Nulla nibh nisl, imperdiet nec tellus a, finibus lobortis sem. Praesent id tortor odio.

Suspendisse id condimentum mauris, et semper tortor. In ultricies bibendum tortor vel vulputate. Suspendisse venenatis aliquet sem, in sollicitudin odio pretium non. Quisque scelerisque egestas lorem non condimentum. Nulla sed eros a nulla gravida ornare at ut orci. Vivamus at vulputate eros, eget consectetur libero. Etiam scelerisque, erat ullamcorper tempus vulputate, nulla felis tempor arcu, a dapibus quam lectus in mauris. Proin egestas justo vitae purus mollis dignissim ac at nibh. Curabitur quis arcu ut leo tincidunt molestie id at libero. Duis dignissim vulputate erat. Donec tincidunt, nisi vel scelerisque gravida, justo sem pellentesque lorem, sit amet ornare turpis lorem sed nisi. Aenean pellentesque purus et leo ultrices, et dignissim magna eleifend. `;


let wordCount = longText.split(' ')
                       .filter(word => word.trim().length > 0)
                       .length;

console.log(`Total word count: ${wordCount}`);


let etCount = longText.split(' ')
                     .filter(word => word === "et")
                     .length;

console.log(`Number of times "et" appears: ${etCount}`);


let phraseToCheck1 = "Hola Pepito, cómo estás?";
let phraseToCheck2 = "put it up";

function checkPalindrome(phrase) {
    let cleanPhrase = "";
    

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].toLowerCase() >= 'a' && phrase[i].toLowerCase() <= 'z') {
            cleanPhrase += phrase[i].toLowerCase();
        }
    }
    

    let isPalindrome = true;
    for (let i = 0; i < Math.floor(cleanPhrase.length / 2); i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    
    return isPalindrome;
}


console.log(`"${phraseToCheck1}" is ${checkPalindrome(phraseToCheck1) ? "a palindrome!" : "not a palindrome."}`);
console.log(`"${phraseToCheck2}" is ${checkPalindrome(phraseToCheck2) ? "a palindrome!" : "not a palindrome."}`);