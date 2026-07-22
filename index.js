// Iteration 1: Names and Input

let hacker1 = "John";
console.log("The driver's name is "+hacker1);

let hacker2 = "Wick";
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length+" characters.");
}else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
}else{
    console.log("Wow, you both have equally long names, "+hacker2.length+" characters!")
}

// Iteration 3: Loops
// 3.1
let hacker1NameWithSpaces = "";

for(let i = 0; i < hacker1.length; i++ ){
    hacker1NameWithSpaces += hacker1[i].toUpperCase();
    if(i !== (hacker1.length - 1)){
        hacker1NameWithSpaces += " ";
    }
}

console.log(hacker1NameWithSpaces);

// 3.2

let reversedName = "";

for(let i = hacker2.length - 1; i >= 0; i-- ){
    reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3
if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
}else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}else{
    console.log("What?! You both have the same name?")
}


// Bonus 1 : 

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et varius lacus, vitae fringilla lacus. Cras nec tortor vitae elit pharetra feugiat. Quisque vel purus in nibh sollicitudin ornare. Suspendisse suscipit consectetur lacus, vehicula posuere dolor posuere a. Vestibulum accumsan sed justo eget scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at consequat dui. Aliquam iaculis est augue, quis lacinia ligula bibendum quis. Sed lobortis dignissim nisl.
Fusce sit amet ultricies est. Sed non nibh massa. Integer mollis turpis dui, id ullamcorper lorem posuere ut. Nam sodales lacus sit amet sem egestas tincidunt. Maecenas dapibus, nisi dignissim maximus dictum, arcu diam posuere odio, sed pulvinar orci tellus quis est. Proin massa ante, varius et feugiat a, molestie quis justo. In consequat, nibh venenatis lacinia dignissim, neque lacus venenatis ante, sit amet venenatis turpis sapien vitae mauris. Etiam ex orci, mattis in tellus id, ornare fermentum sem.
Nullam sollicitudin, mi eu auctor accumsan, ligula augue convallis nunc, in malesuada ante ante id augue. Suspendisse sapien risus, eleifend sed dapibus fringilla, laoreet vel tortor. Pellentesque mi urna, efficitur et magna id, vestibulum ullamcorper ipsum. Pellentesque a hendrerit tellus. Duis nec dictum elit, sit amet condimentum augue. Proin turpis nisl, vehicula ac nunc in, maximus vehicula purus. Nullam lacinia mauris sit amet ante ultrices facilisis. In placerat mollis urna ac gravida. Nunc quam eros, vulputate eget malesuada sit amet, dictum fermentum arcu. Aenean commodo scelerisque quam sed commodo. Cras bibendum tristique ipsum sed maximus. Proin eget mi at enim elementum eleifend. Donec suscipit dictum elit, sit amet aliquam lectus sodales at.`;

let counter = 0;
let numberOfWordEt = 0;
let formattedText = longText.trim();
formattedText = formattedText.replaceAll("\n", " "); // for break lines
for(let i = 0; i < formattedText.length; i++ ){
    if(formattedText[i] === " " && formattedText[i+1] !== " "){
        counter++;
    }

    if(formattedText[i] === " " && formattedText[i+1] === "e" && formattedText[i+2] === "t" && formattedText[i+3] === " "){
        numberOfWordEt++;
    }
}
if(formattedText.length > 0){
    counter++;
}

console.log("Number of words : "+counter);
console.log("Number of word 'et' : "+numberOfWordEt);


// Bonus 2 : 

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedString = "";
let reverseString = "";

for(let i = 0; i < phraseToCheck.length ; i++ ){
    if(phraseToCheck[i].toLowerCase() !== phraseToCheck[i].toUpperCase() ){
        cleanedString += phraseToCheck[i].toLowerCase();
    }
}

reverseString = cleanedString.split('').reverse().join('');

if(reverseString === cleanedString){
    console.log(`"${phraseToCheck}" is a palindrome`);
}else{
    console.log(`"${phraseToCheck}" is not a palindrome`)
}

console.log(cleanedString, reverseString);
