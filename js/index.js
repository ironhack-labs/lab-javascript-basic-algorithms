// Iteration 1: Names and Input
let hacker1 = "Foo";
console.log(`The driver's name is ${hacker1} `);
let hacker2 = "Baz";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
let hacker1Spaced= "";
for (let i = 0; i < hacker1.length; i++){
    hacker1Spaced += hacker1[i].toUpperCase()+ " ";
}
console.log(hacker1Spaced);

let navigatorReversed = "";
for (let i = hacker2.length; i > 0 ; i--) {
    navigatorReversed += hacker2[i-1];
}
console.log(navigatorReversed);

let namesArray = [hacker1, hacker2].sort();
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
} else if (namesArray[0] === hacker1) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}


// BONUS
// 1

let loremString = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod ullamcorper fermentum. Nunc laoreet scelerisque tellus. Cras facilisis malesuada nulla, a iaculis leo imperdiet in. Quisque ac volutpat metus. Nunc sed commodo magna. Nam nec risus vel dui tempor aliquam. Duis nec eleifend sapien, sed porta sem. Ut consequat, orci at porta iaculis, risus nisi cursus quam, quis sodales diam arcu et augue. In finibus nulla quam, ac porttitor tellus imperdiet sed.\n Sed vestibulum ante quis erat ultricies, venenatis facilisis ante congue. Pellentesque hendrerit pulvinar sem, at molestie metus fermentum et. Suspendisse potenti. Aenean at sem ut tortor aliquam vestibulum. Sed vel massa in dolor facilisis vulputate ac quis urna. Suspendisse sit amet tincidunt ante. Etiam in lobortis urna. Nullam a velit sapien. Sed interdum orci justo, in bibendum erat rutrum id. Donec mattis ligula a lectus vulputate, ac aliquam ex mollis. Sed sit amet ex interdum, mollis tellus ut, imperdiet metus. Cras a urna condimentum, fringilla augue non, luctus est.\n Quisque quis mi enim. Sed non felis eleifend, dictum massa sed, consequat dolor. Duis feugiat nulla sed urna interdum mattis. Integer est purus, venenatis et facilisis sit amet, facilisis rutrum ipsum. Integer sagittis tincidunt ante, id pulvinar tellus gravida ac. Vivamus sapien ante, sagittis nec velit sit amet, hendrerit sodales turpis. Nunc eget elit vel dolor dapibus imperdiet.";

let counterWord = loremString.split(' ').length;
console.log(`${counterWord} words founded `); // 219 words

let counterEt = loremString.toLowerCase().split(' et ').length;
console.log(`${counterEt} " et " founded`); // 3 " et "


// BONUS 
// 2

let palindromeCheck = 0;
var phraseToCheck = "step on no pets".toLowerCase().replace(/\W/g, '');

for (let i = 0; i < phraseToCheck.length; i++) {
    palindromeCheck += phraseToCheck[i] === phraseToCheck[phraseToCheck.length-i-1];
}

console.log(palindromeCheck === phraseToCheck.length);
