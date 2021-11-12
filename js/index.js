// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Erico';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Andre';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
   console.log(` Wow, you both have equally long names, ${hacker2.length} characters!.`) 
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newHacker1 = ''
hacker1 = hacker1.toUpperCase()
for(let i=0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " "
}
console.log(newHacker1)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNavigatorsName = '';

for (let i = hacker2.length - 1; i >= 0; i -= 1){
    reverseNavigatorsName += hacker2[i]
};

console.log(reverseNavigatorsName);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */


if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
}
    else if (hacker1 > hacker2) {
        console.log(`Yo, the navigator goes first definitely.`)
} 
    else {
     console.log(`What?! You both have the same name?`)   
}


/*
Bonus 1:
Go to lorem ipsum generator and:
* Generate 3 paragraphs. 
* Store the text in a variable type of string.
* Make your program count the number of words in the string.
* Make your program count the number of times the Latin word "et" appears.
*/

const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium fusce id velit ut tortor pretium viverra. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Malesuada pellentesque elit eget gravida cum sociis. Sodales ut etiam sit amet nisl. Nunc vel risus commodo viverra. Nulla aliquet enim tortor at auctor urna nunc id cursus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.

Eget mi proin sed libero enim. Turpis egestas integer eget aliquet nibh. Ultrices tincidunt arcu non sodales neque. Vulputate ut pharetra sit amet. Risus nullam eget felis eget nunc lobortis. Est sit amet facilisis magna etiam tempor orci eu lobortis. Adipiscing elit duis tristique sollicitudin nibh. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Urna id volutpat lacus laoreet non. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Et malesuada fames ac turpis egestas. Vitae elementum curabitur vitae nunc sed velit dignissim. A erat nam at lectus urna duis convallis convallis tellus. Amet justo donec enim diam vulputate. Volutpat maecenas volutpat blandit aliquam etiam. Hendrerit dolor magna eget est lorem. In massa tempor nec feugiat nisl pretium fusce. Viverra vitae congue eu consequat ac felis donec et odio. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Consectetur purus ut faucibus pulvinar elementum integer.

Aliquet nibh praesent tristique magna sit. Proin libero nunc consequat interdum varius. Lorem mollis aliquam ut porttitor leo a. Urna condimentum mattis pellentesque id. Tellus in metus vulputate eu scelerisque felis imperdiet. Dolor morbi non arcu risus quis varius quam quisque id. Sit amet dictum sit amet justo donec enim diam vulputate. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Felis bibendum ut tristique et egestas quis. Sed viverra tellus in hac habitasse platea.`
// Create a array with the words of paragraphs
let words = paragraphs.split(' ');
// Create the counters
let countWord = 0;
let countWordsEt = 0;
// Create a loop to count the words
for (let index = 0; index < words.length; index++) {
    countWord += 1;
    //Create an if statemant to check the specificy word "et" 
    if (words[index] === "et" || words[index] === "et.") {
        countWordsEt += 1;
    }
}



console.log(countWord);
console.log(countWordsEt);


/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
*/

let phraseToCheck = "Was it a car or a cat I saw?"
let reverseName = '';
let newPhrase = '';

// Rewrite the phrase without space and reversed and storage in reverseName.
for (let i = phraseToCheck.length - 1; i >= 0; i -= 1){
    
    
    if (phraseToCheck[i] === "?" || phraseToCheck[i] === "!" || phraseToCheck[i] === "." || phraseToCheck[i] === "," || phraseToCheck[i] === " ") {
        
        continue;
    } else {
       
        reverseName += phraseToCheck[i];
    }
};

console.log(reverseName);

//  Rewrite the phrase without space and storage in newPhrase.
for (let index = 0; index < phraseToCheck.length; index += 1) {
    
    if (phraseToCheck[index] === "?" || phraseToCheck[index] === "!" || phraseToCheck[index] === "." || phraseToCheck[index] === "," || phraseToCheck[index] === " ") {
       
        continue;

    } else {
        
        newPhrase += phraseToCheck[index];

    }
    
}

console.log(newPhrase);


// Compare the newPhrase and reverseName to know if is a Palindrome.

if (newPhrase.toLowerCase() === reverseName.toLowerCase()) {

    console.log("The phrase is a palindrome.");
} 
    else {
     console.log("The phrase isn't a polindrome");
}