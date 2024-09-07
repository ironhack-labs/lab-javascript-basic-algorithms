// Iteration 1: Names and Input

const hacker1 = "Erian";
console.log("The driver´s name is", hacker1);

const hacker2 = "Kateryna";
console.log("The navigator´s name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let nameInCaps = "";

for (i = 0; i < hacker1.length; i++) {
    nameInCaps += hacker1[i] + " ";
}
console.log (nameInCaps.toLocaleUpperCase());

let reversedName = "";

for (i = hacker2.length -1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log (reversedName);


if (hacker1.localeCompare(hacker2) < 0) {
    console.log ("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log ("Yo, the navigator goes first, definitely.");
} else {
    console.log ("What?! You both have the same name?");
}


//////// BONUS /////////



let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas sem at tellus lobortis, ac blandit ex dapibus. Aenean vel leo id lacus venenatis dignissim at sed magna. In hac habitasse platea dictumst. Nunc posuere molestie ipsum, vel aliquet est vehicula posuere. Duis ornare nulla ac ligula lobortis sollicitudin. Nullam eu purus ut mi euismod porttitor. Integer molestie egestas lorem, ac pretium est luctus ut. Nulla in eros elit. Nam suscipit molestie finibus. Curabitur sed nunc feugiat, finibus sapien ullamcorper, bibendum nibh. Pellentesque et libero eget arcu dictum laoreet. Duis elementum scelerisque blandit. Fusce finibus commodo lectus at ullamcorper. Sed malesuada iaculis ex, in pharetra sem ornare non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nibh vel mauris porttitor luctus sed a libero. Sed lacinia, nisl id mollis ullamcorper, augue est aliquet tellus, luctus mattis magna ligula eu justo. Nunc ultrices in enim ut tincidunt. Cras at venenatis diam. Etiam aliquet nunc id nisl malesuada consectetur. Vivamus tempor dignissim rhoncus. Aliquam porttitor ut diam ac pharetra. Mauris fringilla gravida tortor, id vulputate lacus egestas quis. Morbi non felis augue. Nulla finibus non nibh faucibus venenatis. Sed at diam neque. Mauris posuere imperdiet turpis nec suscipit. Nulla nibh metus, vulputate a odio quis, scelerisque hendrerit ex. Quisque gravida convallis tellus sit amet tempor.";


console.log (longText.length);

    let totalSoFar = 1;
    for (i = 0; i < longText.length; i++)
        if (longText[i] === " ") {

            totalSoFar += 1;
        }

console.log (totalSoFar);


let words = longText.split(/\s+/);
let etWordCount = 0;

for (i = 0; i < words.length; i++)
    if (words[i] === "et") {
        etWordCount += 1;
    }

    console.log (etWordCount);


///////////// BONUS 2 //////////////

// let phraseToCheck = "Was it a car or a cat I saw";

// for (i = 0; i < phraseToCheck.length; i++)
//     for (j = phraseToCheck.length - 1; j >= phraseToCheck; j--) {
//     if (phraseToCheck[i] == phraseToCheck[j]) {
//         console.log ("The phrase is a palindrome");
//     }
// }


let phraseToCheck = "Was it a car or a cat I saw?";
let cleanedPhrase = "";
let reversedPhrase = "";

for(i = 0; i > phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    if(char >= "a" && char <= "z") {
        cleanedPhrase += char;
    }
}

for (i = phraseToCheck.length - 1; i >= 0; i--) {
    let char = phraseToCheck[i].toLocaleLowerCase();
    if (char >= "a" && char <= "z") {
        reversedPhrase += char;
    }
}

if (cleanedPhrase === reversedPhrase) {
    console.log("The phrase is a palindrome");
} else {
    console.log("The phrase is not a palindrome");
}