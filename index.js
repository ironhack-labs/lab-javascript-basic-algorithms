// Iteration 1: Names and Input
const hacker1 = "Kaz";
const hacker2 = "Kay";

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1 < hacker2){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
let capDriverName = " ";
for(let i = 0; i < hacker1.length; i++){
    capDriverName += hacker1[i] + " ";
};

console.log(capDriverName.toUpperCase())

let reversedDriverName = " ";
for(let i = hacker1.length - 1; i >= 0; i--){
    reversedDriverName += hacker1[i];
}
console.log(reversedDriverName);

if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`)
} else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log('What?! You both have the same name?')
}


//Bonus Time!

//Bonus 1
const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor leo, hendrerit ac congue nec, faucibus sed ligula. Donec eget bibendum leo. Donec finibus nisi ut orci facilisis, sed volutpat diam mattis. Sed et leo in magna porttitor lobortis. Morbi feugiat ipsum diam, vel elementum enim maximus sed. Nulla vel est non est blandit ultricies. Vestibulum mattis malesuada nunc, at congue turpis tincidunt in.

Integer sollicitudin ante vel est consequat posuere. Phasellus tempus neque sem, suscipit ornare nunc faucibus eu. Etiam fringilla fringilla feugiat. Suspendisse sollicitudin lacus magna, ac hendrerit diam finibus vel. Nulla facilisi. Aliquam erat volutpat. Nam semper, magna quis posuere sodales, felis mauris tempus dui, venenatis eleifend velit tellus non nibh.

Praesent finibus ullamcorper dui, sed accumsan elit feugiat vel. Nullam eu nulla eu nibh semper consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non vulputate lectus, semper condimentum diam. Cras egestas dapibus elit ac ornare. Praesent mollis volutpat libero, ac finibus ex congue in. Curabitur sit amet nisi libero. Quisque venenatis, metus et bibendum rhoncus, ligula massa suscipit orci, in gravida neque augue ut ipsum.
`;

const cleanedLongText = longText.trim().split(/\s+/);
console.log(cleanedLongText.length)

let count = 0;
for(let i = 0; i < cleanedLongText.length; i++){
    let currentItem = cleanedLongText[i];
    if(currentItem === "et"){
        count++;
    }
}
console.log(count)

//Bonus 2

let phraseToCheck = "race car"
phraseToCheck.toLowerCase();

let cleanedPhrase = " ";
let reversedPhrase = " ";

for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === "?" || phraseToCheck[i] === "."){
        continue;
    }
    cleanedPhrase += phraseToCheck[i];
}

for(let i = phraseToCheck.length - 1; i >= 0; i--){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === "?" || phraseToCheck[i] === "."){
        continue;
    }
    reversedPhrase += phraseToCheck[i];
}

// console.log(cleanedPhrase)
// console.log(reversedPhrase)

if(cleanedPhrase === reversedPhrase){
    console.log("It is a Palindrome")
}else{
    console.log("Ooops! It is not one.")
};
