// Iteration 1: Names and Input'

let hacker1 = 'Mariana';

console.log(hacker1);

let hacker2 = 'Anna';

console.log(hacker2);
//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals
let nameWithSpace = '';

for (let i = 0; i < hacker1.length; i++) {

   nameWithSpace  += hacker1[i] + ' '
}
console.log(nameWithSpace.toUpperCase());


//Print all the characters of the navigator's name, in reverse order
let reverseName = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

//Depending on the lexicographic order of the strings, print
let hacker1LowerCase = hacker1.toLowerCase();
let hacker2LowerCase = hacker2.toLowerCase();

console.log(hacker1LowerCase, hacker2LowerCase)

if (hacker1LowerCase.localeCompare(hacker2LowerCase) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1LowerCase.localeCompare(hacker2LowerCase) === 1) {
   console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
// Counting words
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit blandit ipsum, quis scelerisque orci varius quis. Nulla facilisi. Vivamus vel justo vitae leo eleifend mollis ut et ligula. Suspendisse ac metus tempus, bibendum sapien et, scelerisque ex. Quisque ornare justo vitae bibendum placerat. Aenean sed ultrices arcu, ut pellentesque nunc. Curabitur vel auctor lectus. Fusce volutpat rutrum porttitor. Donec egestas ante vehicula, tempor elit in, ullamcorper metus. Fusce in commodo ante. Aenean lacus elit, lacinia efficitur quam eget, faucibus auctor metus. Nulla efficitur semper mattis. Curabitur sed ante orci. Phasellus ut augue dignissim, venenatis tortor quis, viverra tortor. Praesent sed pellentesque nibh. In hac habitasse platea dictumst. Aenean sodales vel sapien sed mollis. Quisque efficitur velit neque, ut efficitur justo tincidunt eu. Ut vitae tristique eros. In sollicitudin ut mi mattis rutrum. Suspendisse vel massa at nisl condimentum dignissim. Donec gravida convallis iaculis. Suspendisse lacinia justo pulvinar nisi condimentum faucibus porttitor non enim. Pellentesque sit amet lacus volutpat, condimentum orci eget, ullamcorper arcu. Curabitur id dapibus magna, sit amet finibus metus. Cras pretium finibus libero, nec pretium ligula posuere in. Suspendisse commodo felis magna, non tempus nunc pretium et. Praesent elementum tellus at libero blandit tincidunt. Phasellus pharetra pharetra faucibus.Curabitur pretium, est in vulputate pellentesque, nulla felis lacinia ipsum, sed mollis urna nisl id ex. Donec eu lorem magna. Cras dictum placerat velit, in lobortis eros. Ut aliquam semper ultricies. Sed rutrum nisi purus, non ultricies eros bibendum nec. Fusce erat nulla, pharetra a ex at, lacinia congue magna. Sed vitae arcu at purus aliquam ultricies. Sed ultricies iaculis nisl, suscipit egestas ex condimentum eu. Praesent rutrum fringilla elit, vitae rutrum risus egestas sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus imperdiet pharetra erat, suscipit bibendum felis interdum sit amet."

function countWords(str) {
    let totalWords = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            totalWords++
        }
    }
    return totalWords;
}

console.log(countWords(text));

// counting the characters 'et'
function countEt(str) {
    let totalWords = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e' && str[i+1] === 't') {
            totalWords++
        }
    }
    return totalWords;
}

console.log(countEt(text));

// Bonus 2
let phraseToCheck = '';

function findPalindrome(str) {

    let strLowerCase = str.toLowerCase;
    let strLenght = str.length;
    
    for (let i = 0; i < strLenght / 2; i++)  {
        if (strLowerCase[i] === strLowerCase[strLenght - 1 - i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(findPalindrome("step on no pets"))
