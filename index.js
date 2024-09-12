"use strict";

// TEXT FOR BONUS TASK
const longText =
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat libero, consectetur eu justo vel, 
hendrerit lobortis urna. Nunc non efficitur ante. Quisque purus turpis, lacinia quis sem ac, viverra 
auctor lacus. Maecenas varius interdum mauris et aliquam. Curabitur accumsan erat eu nibh suscipit pretium. 
Nam ullamcorper nisl ante, in molestie augue facilisis ut. Sed ullamcorper sed mi quis molestie. Fusce mi magna, 
finibus at hendrerit in, accumsan nec tortor. Vivamus id risus eget nisi tincidunt aliquam in feugiat elit. Cras
tempor, mauris nec efficitur lacinia, nisl sapien ornare nunc, nec tempus tellus lectus sed massa. Maecenas mauris
nibh, vehicula non Latin vehicula sed, molestie sit amet urna. Nam ac ligula sem. Suspendisse eu arcu sollicitudin, tempor
nibh non, fringilla arcu. Vivamus pellentesque sagittis luctus. Suspendisse et mauris faucibus, lacinia leo vel, 
lacinia nunc.

Mauris scelerisque enim arcu, ut vehicula sem sodales et. Etiam dui sapien, interdum sit amet posuere a, 
malesuada at erat. Curabitur Latin elementum risus ipsum, at tincidunt nibh sagittis at. Lorem ipsum dolor sit 
amet, consectetur adipiscing elit. Phasellus pellentesque, enim ut consectetur convallis, est diam pulvinar 
magna, eu aliquet arcu orci nec ipsum. Integer eleifend nulla a pretium pharetra. Maecenas bibendum scelerisque 
eros, et dignissim urna blandit mollis. Vivamus facilisis nisl vitae aliquet mollis. Phasellus venenatis imperdiet 
justo ac varius. Duis nec purus velit. Pellentesque elementum ultrices orci, at lacinia nulla porttitor id. Mauris 
enim ante, congue eget molestie ut, sodales ut nisi. Duis eleifend neque a sem bibendum, ut condimentum urna suscipit. 
Aliquam laoreet nunc at tempus egestas. In non commodo mauris. Praesent dui purus, interdum interdum consequat et, pretium ac erat.

Cras rutrum leo id tortor dictum facilisis. Ut vestibulum sapien quis enim tincidunt semper. Nulla vitae maximus neque, 
ultricies interdum nisl. Nulla facilisi. Integer pellentesque sodales quam sed aliquet. Aenean efficitur ligula eget 
purus pellentesque dapibus Latin cursus a nisi. Nullam at est lacus. Aenean bibendum in sem et ornare. Aenean arcu dui, sodales 
consequat cursus eget, convallis ac est. Aenean quis rhoncus massa. Vivamus bibendum fringilla est id vestibulum. Nullam hendrerit 
felis in eros varius, in posuere nulla tempus. In hac habitasse platea dictumst. Phasellus mollis fermentum purus in vehicula.
`

// Iteration 1: Names and Input
const hacker1 = "Walter";
const hacker2 = "Jessy";

console.log(`The driver's name is ${hacker1}`);
console.log(`THe navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
// 3.1:
console.log(hacker1.toUpperCase().split("").join(" "));


// 3.2:
//hacker1.split("").reverse().join("")

let newHacker1 = "";

for(let i = hacker1.length - 1; i >= 0; i--)
{
    newHacker1 += hacker1[i]
}

console.log(newHacker1);


// 3.3:
let namesSorted = [hacker1, hacker2].sort();
namesSorted[0] === namesSorted[1] ? console.log("What?! You both have the same name?") : (namesSorted[0] === hacker1 ? console.log("The driver's name goes first.") : console.log("Yo, the navigator goes first, definitely."));


//Bonus 1:

function wordsCounter(text)
{
    let counterLetters = 0;
    let counterWords = text.split(" ").length;
    let counterLatin = text.split("Latin").length - 1;

    for(let i of text.replaceAll(" ", ""))
    {
        counterLetters += i.length
    }

    console.log(counterWords)

    console.log(`The text has ${counterLetters} letters, ${counterWords} words and the word "Latin" appears ${counterLatin} times`)
}
wordsCounter(longText);


//Bonus 2:
let phraseToCheck = "Murder for a jar of red rum";

function checkPalindrome(phrase)
{
    if(phrase.toLowerCase()[0] === phrase.toLowerCase().slice(-1))
    {
        console.log("Yes, it's a Palindrome");
    }
    else
    {
        console.log("No, it's not a Palindrome");
    }
}

checkPalindrome(phraseToCheck);