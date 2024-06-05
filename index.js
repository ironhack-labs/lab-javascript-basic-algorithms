// Iteration 1: Names and Input
const hacker1 = 'Najma';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Tijo';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `);
}
else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters `);
}
else if (hacker2.length === hacker1.length) {
    console.log(` Wow, you both have equally long names, ${hacker2.length} characters `);  

}


// Iteration 3: Loops
let updatedNameDriver = "";
for (let i=0 ; i<hacker1.length ; i++) {
    if (i < hacker1.length -1){
        updatedNameDriver += hacker1[i].toUpperCase() + " ";
    }
    else {
        updatedNameDriver += hacker1[i].toUpperCase();

    }
    
}
console.log(updatedNameDriver);

let reversedName = "";
for (let j= hacker2.length-1; j>=0; j--) {
    reversedName += hacker2[j];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");

}
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");

}

else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?");

}

// Bonus 01
const longText = `Lorem, consecettur et adipiscing elit. Donec porttitor, dui id fringilla tempor, neque erat viverra urna, suscipit interdum nisi leo eget mauris. Vestibulum eu dolor a ipsum fermentum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus elementum ullamcorper felis, sodales blandit mi porttitor et. Suspendisse tincidunt orci id urna ultricies maximus. Sed purus nisi, tempus in lacinia vel, scelerisque sed erat. Vivamus rhoncus ultrices aliquam. Donec cursus est ac euismod dignissim. Morbi ut erat eget ipsum aliquet feugiat id ac est. Nunc et euismod lacus, finibus gravida leo. Sed elit dui, ullamcorper in nisl sed, hendrerit condimentum neque. Quisque in dui eu dolor posuere sagittis. Cras bibendum elit sed iaculis pharetra. Pellentesque vitae ligula bibendum orci iaculis fringilla sit amet in diam. Integer hendrerit dolor eu quam bibendum, non tempor sem gravida.

Aliquam erat volutpat. Donec mattis est vitae rhoncus sodales. Vestibulum et felis sed eros congue faucibus. Ut sit amet ex tortor. Nunc viverra erat odio, non molestie nunc auctor vel. Praesent arcu ante, sodales eu semper sit amet, luctus id sapien. Nulla dapibus feugiat ornare. Nam volutpat ac arcu efficitur pellentesque. Nulla ultrices libero sed ligula aliquet interdum. Donec nec lacinia massa. Mauris quis bibendum augue. Nullam lobortis arcu sed dui pellentesque, vel consectetur dolor tincidunt. Phasellus vulputate orci libero, vitae varius justo aliquam sit amet. Sed ac feugiat erat, quis bibendum velit.

Nullam tempus lorem sit amet nunc consequat tincidunt. Phasellus ullamcorper ex a finibus vulputate. Ut auctor, erat pulvinar posuere sodales, magna sapien finibus orci, at scelerisque neque turpis sit amet massa. Suspendisse pretium mollis risus vitae lobortis. Integer non vulputate lacus. Vivamus nibh arcu, ornare nec justo non, condimentum pulvinar est. Nulla facilisi.` ;

let wordsCount = 1;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i]== " ") {
        wordsCount++;
    }

    if (longText[i] + longText[i+1] + longText[i+2] == " et") {
        etCount++;
    }

}      

console.log(wordsCount);
console.log(etCount);

// Bonus 02

const phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseCharacters = phraseToCheck.replaceAll(" ", '');
let reveresedCharacters = "";
let isPalindrome = false;

/* Advanced approach: by using regular expression that matches any character that is not an uppercase (A-Z) or lowercase (a-z) letter
phraseCharacters = phraseToCheck.replace(/[^a-zA-Z]/g, ''); */

function findPalindrome(phraseToCheck) {
    for (let i = 0; i<phraseToCheck.length; i++ ) {
        let char = phraseToCheck[i];

        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            continue;
          }
        else {
            console.log("its not an alphabet: ", char);
            phraseCharacters = phraseCharacters.replaceAll(char, '');
        }   
    }
    console.log(phraseCharacters);

    for (let i=phraseCharacters.length -1; i>=0; i--) {
        reveresedCharacters += phraseCharacters[i];
    }

    if ( phraseCharacters.toLowerCase()== reveresedCharacters.toLowerCase()) {
        isPalindrome = true;

    }


    return isPalindrome;


}
if (findPalindrome(phraseToCheck)) {
    console.log("Yes, its a Palindrome!");

}
else {
    console.log("Nop, its not a Palindrome!");
}
