// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1= 'Laura';
let hacker2= 'Lovro';

console.log(`The drivers name is ${hacker1}!`);
console.log(`The navigators name is ${hacker2}!`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length < hacker2.length) {

    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!!`)

}

// Iteration 3: Loops
let driverUpper = '';
for (let i = 0; i < hacker1.length; i++) {
    let characters = '';
    characters = hacker1.charAt(i).toUpperCase();
    driverUpper = driverUpper.concat(characters, ' ');
}
console.log(driverUpper);
let navRev = '';
for (let i = hacker2.length; 0 <= i; i--) {
    let characters = '';
    characters = hacker2.charAt(i);
    navRev = navRev.concat(characters);
}
console.log(navRev);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name??")
}
// Bonus 1
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium erat interdum, elementum risus ac, lacinia neque. Aliquam a pellentesque augue. Sed ut lectus vulputate, varius dolor id, vulputate tellus. Phasellus a ligula quis sapien interdum dignissim. Cras accumsan ante quis tristique lacinia. Fusce consequat nisl quis aliquet mattis. Aliquam posuere aliquam metus, id molestie massa sodales sed. Aenean in pretium lectus. Aenean commodo semper scelerisque. Pellentesque venenatis libero quis fermentum consectetur. Pellentesque quis velit iaculis, commodo augue sit amet, commodo sapien. Pellentesque a sagittis turpis, ut varius nisi. Quisque aliquam dolor at felis auctor, pellentesque feugiat tortor suscipit. Suspendisse potenti. Phasellus pretium mattis quam, quis accumsan lorem pellentesque in. Aliquam rutrum venenatis velit id accumsan. Mauris a erat nibh. Donec a luctus felis. Maecenas non ultrices turpis. Suspendisse elementum a dolor non dictum. Donec sed mauris finibus, tincidunt dolor a, suscipit nisi. Etiam a faucibus erat, sed efficitur nunc. Pellentesque eget sagittis nibh, tincidunt mattis metus. Proin vulputate magna at lorem mollis convallis. Duis tincidunt felis nulla, tincidunt luctus ex ultricies nec. Etiam aliquam eros velit, ac convallis dolor gravida nec.';


let wordCount = 0;
for (let i = 0; i < loremIpsum.length; i++) {
    // count all the spaces in string
    if (loremIpsum.charAt(i) === ' ') {
        wordCount += 1;
    }
}
// wordCount +1 because there are no spaces in beginning or end of string
console.log(`Words: ${wordCount + 1}`);

//Bonus 2
let phraseToCheck = "No 'x' in Nixon";
let phraseReverse = '';

// removing all extra characters and spaces
// putting to lowerCase
phraseToCheck = phraseToCheck.toLowerCase();

while (phraseToCheck.includes(',')) {
    phraseToCheck = phraseToCheck.replace(',', '');
}
while (phraseToCheck.includes('!')) {
    phraseToCheck = phraseToCheck.replace('!', '');
}
while (phraseToCheck.includes(' ')) {
    phraseToCheck = phraseToCheck.replace(' ', '');
}
while (phraseToCheck.includes('?')) {
    phraseToCheck = phraseToCheck.replace('?', '');
}
while (phraseToCheck.includes("'")) {
    phraseToCheck = phraseToCheck.replace("'", "");
}

//reversing phrase to check
for (let i = phraseToCheck.length; 0 <= i; i--) {
    let characters = '';
    characters = phraseToCheck.charAt(i);
    phraseReverse = phraseReverse.concat(characters);
}

let isPalindrome = true;
for(var i=0; i < (phraseReverse.length)/2; i++){ 
    if(phraseReverse[i] !== phraseReverse[phraseReverse.length-i-1]){ 
      isPalindrome = false;
    }
  }
  if (isPalindrome) {
    console.log('It is palindrome! Oh yeah!')
  } else {
    console.log('Not a palindrome. ')
  }