// Iteration 1: Names and Input

let hacker1 = "Carol";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Filipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let newHacker1 = ""
for (i=0; i<hacker1.length; i++){
    newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHacker1)

let reverseName = ""
for (i=hacker2.length-1; i>=0; i--){
    reverseName += hacker2[i];
}
console.log(reverseName);

if ( (hacker2.localeCompare(hacker1)) === 1 ){
    console.log("The driver's name goes first.")
}
else if ( (hacker2.localeCompare(hacker1)) === -1 ){
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?")
}


// Bonus time
// 1)
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in mattis mauris. Donec sit amet lacus at quam sodales sollicitudin at nec tortor. Nunc sodales laoreet dui, iaculis fermentum elit iaculis et. Donec posuere nisi nec neque rutrum aliquam vitae vitae nisl. Morbi vitae magna auctor, mollis massa sed, sollicitudin mi. Donec porttitor pulvinar urna. Curabitur venenatis, tortor vel efficitur tincidunt, massa orci malesuada libero, vehicula consectetur augue tortor tincidunt diam. Phasellus consequat orci iaculis elit aliquet facilisis. Sed eleifend arcu sit amet interdum pharetra. Proin et elit id erat suscipit ultrices et iaculis sapien. Proin tortor dui, vulputate et mauris non, placerat dapibus ligula. Praesent elementum fermentum mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam bibendum faucibus dolor, eget mollis risus euismod vel. Suspendisse vitae pretium libero. Etiam eget ligula nec diam mollis venenatis finibus a felis. Etiam urna diam, ornare et nibh ac, rutrum ornare justo. In sit amet urna fermentum, suscipit massa non, feugiat purus. Aliquam aliquam finibus nisi, eu facilisis turpis commodo sit amet. Praesent vulputate dui id varius porttitor. Nulla faucibus semper maximus. Ut accumsan turpis in odio malesuada fermentum. Curabitur aliquam ante vitae magna fermentum dictum. Phasellus sit amet purus rhoncus, mattis justo eu, pellentesque tellus. Duis viverra tellus eu est pellentesque, in hendrerit ex elementum. Pellentesque et ultrices enim, at fringilla risus. Integer vel commodo magna. Ut sed maximus nibh. Nam gravida eget odio sit amet hendrerit. Etiam egestas lobortis erat ac accumsan. Donec tincidunt tincidunt metus eu euismod. Nulla tincidunt hendrerit odio.
`
let totalWords = 0;
for (i=0; i<longText.length; i++){
    if (longText[i] === " "){
        totalWords += 1;
    }
}
totalWords += 1;
console.log(totalWords)


let count = 0;
for (i=0; i<longText.length; i++){
    let twoChars = longText[i] + longText[i + 1];
    if (twoChars === "et"){
        count++;
    }
}
console.log(count)


// 2)
const phraseToCheck2 = "A man, a plan, a canal, Panama!"
const stringToCheck = phraseToCheck2.toLowerCase().replace(/[^a-z0-9]/g, '');

// Make a reverse string
let reversePhrase = ""
for (i=stringToCheck.length -1; i>=0;i--){
    reversePhrase += stringToCheck[i]
}

// Make a loop for count how many index are different
// If the indez are diffent we add 1
let countNotPalindrome = 0
for (i=0; i<stringToCheck.length; i++) {
    if (stringToCheck[i] !== reversePhrase[i]){
        countNotPalindrome ++;
    }
}

// Check if the statements is Palindrome
if (countNotPalindrome !== 0){
    console.log("No, isn't a Palindrome")
}
else {
    console.log("Yes, is a Palindrome")
}