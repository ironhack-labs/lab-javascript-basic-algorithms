// Iteration 1: Names and Input

let hacker1 = "Santiago";

console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Hanna";

console.log(`The navigators name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log("GAME OVER!")
}
// Iteration 3: Loops


let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++){

    newHacker1 += hacker1[i].toUpperCase() + " ";
    
    
    }

console.log(newHacker1);


let reverseHacker = ""


for (let i = hacker1.length-1; i >= 0; i--) {
    reverseHacker += hacker1[i];
}

console.log(reverseHacker);


if (hacker1.localeCompare(hacker2)=== 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
} else {
    "invalid input"
}

// bonus 1

let longText = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ultricies erat. Donec tortor quam, congue ac venenatis id, placerat vel urna. Nulla accumsan a odio et cursus. Donec dapibus convallis interdum. In venenatis dapibus enim vel consectetur. Suspendisse ornare, felis et porta fermentum, diam orci finibus velit, aliquam mollis dolor ex quis nunc. Nunc ultricies accumsan eros, sed venenatis tellus posuere vitae. Nunc ut dui eros. Fusce mattis ut dolor at gravida. Ut at molestie metus. Praesent convallis ante non metus bibendum, vel efficitur odio mattis. Pellentesque volutpat neque eget semper tristique. Sed aliquet ullamcorper tellus, quis lacinia nulla dictum eget. Vestibulum blandit ex in massa rutrum, maximus vulputate lacus consequat. Nulla elementum dignissim vestibulum. Suspendisse in congue libero. Fusce sagittis maximus lorem, in blandit tellus pharetra ut. Praesent auctor libero vitae ex luctus, et vestibulum dolor posuere. Sed fringilla est libero, vel bibendum lacus consectetur at. Proin porttitor pellentesque tincidunt. Integer eleifend, lorem et auctor dignissim, elit nibh gravida nisi, ac semper dolor nunc ut quam. Vestibulum fringilla rutrum dictum. Curabitur porttitor interdum dolor vel tempor. Nunc non ipsum sed ex eleifend viverra vel eget ante. Vestibulum ac est ipsum. Nunc ex lectus, interdum sed luctus vel, tincidunt sit amet augue. Pellentesque non arcu risus. Etiam sit amet venenatis quam. Nunc tempus odio sit amet magna feugiat malesuada. Quisque ac ornare lacus. Aenean et volutpat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut malesuada enim eu ullamcorper iaculis. Aliquam et luctus nisi. Morbi tristique eleifend augue non laoreet. Vestibulum ut gravida ipsum. Sed placerat ipsum mi, et venenatis massa mollis et. Morbi eget augue a eros rutrum tincidunt.`
let blankSpaces = 1;
let etCount = 0

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        blankSpaces++
    }
    if (longText[i] + longText[i+1] + longText[i+2] + longText[i+3] === " et ") {
        etCount++
    } 
}

console.log(blankSpaces);
console.log(etCount++)


// bonus 2

let phrasesToCheck = "Amor, Roma";
let purePhraseString = "";
let reversedPhrase = "";


//remove all non letters from a string

purePhraseString = phrasesToCheck.replace(/[^a-zA-Z0-9]/g, '');

//create reversed version

for (let i = purePhraseString.length-1; i >= 0; i--) {
    reversedPhrase += purePhraseString[i];
}

let lowReversed = reversedPhrase.toLowerCase();
let lowPure = purePhraseString.toLowerCase();

console.log(lowReversed)
console.log(lowPure)

if (lowReversed === lowPure) {
    console.log("It is a palindrome!")
} else {
    console.log("It's not a palindrome :((((")
}

