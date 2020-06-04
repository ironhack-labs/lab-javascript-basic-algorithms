// Iteration 1: Names and Input
var hacker1 = "Kevin Hernandez";
var hacker2 = "Liz Diaz";

console.log(`"The driver's name is ${hacker1}."`);
console.log(`"The navigator's name is ${hacker2}."`)

console.log("------------------------------");

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
else if (hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

console.log("------------------------------");

// Iteration 3: Loops
//3.1 uppercase and space out letters
var capsArry = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) capsArry += hacker1[i].toUpperCase()
    else capsArry += hacker1[i].toUpperCase() + " ";
}
console.log(capsArry);

//3.2 reverse array function
function reverseStr(str) {
    let reverseArry = "";
    for (let i = str.length - 1; i > -1; i--) {
        reverseArry += str[i];
    }
    return reverseArry;
}
console.log(reverseStr(hacker2));

console.log("------------------------------");

//3.3 lexicographical order
if (hacker1 > hacker2) console.log(`The driver's name goes first.`)
else if (hacker1 < hacker2) console.log(`Yo, the navigator goes first definitely.`)
else console.log(`What?! You both have the same name?`)

console.log("------------------------------");

//Bonus #1
var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu accumsan tellus. Mauris ut mi tempor, ullamcorper ipsum in, imperdiet mi. Proin porttitor mattis ligula, sed aliquet augue feugiat a. Maecenas ac bibendum ligula. Ut ut ultrices elit. Aenean laoreet felis quis lectus lobortis, nec dictum ipsum pretium. Integer sit amet interdum ante. Suspendisse eu ultrices purus. Proin vitae ex vitae dui vulputate varius non nec risus. Proin feugiat eleifend est, nec rhoncus lectus. Nam venenatis lectus sit amet leo vulputate, at pellentesque eros facilisis. Nullam id ipsum eu enim consectetur semper at id nunc. Maecenas malesuada orci accumsan libero bibendum imperdiet. Fusce tempus nibh ac dolor vulputate, ut hendrerit libero egestas. Morbi semper odio ac mi interdum, vel tempus tortor cursus. Morbi cursus tempor mauris, ac scelerisque dolor vulputate eget.

Etiam tempor, dui at blandit mattis, eros nulla porttitor justo, eu tempus diam massa id odio. Fusce lorem quam, bibendum ut justo vitae, posuere hendrerit erat. Curabitur tempus eu tellus nec bibendum. Vivamus in porta magna. In sagittis felis a nisi luctus, vel sodales dolor lacinia. Ut ac tristique metus, viverra sodales leo. Mauris pulvinar arcu ac nulla mollis, quis euismod nunc interdum. Suspendisse convallis efficitur tellus quis euismod. Sed eu urna ut velit tempus consectetur. Etiam orci felis, placerat vel nulla at, malesuada mattis quam. Nunc mauris urna, suscipit in efficitur ut, porta a tortor. Nulla lacinia accumsan fermentum. Quisque lectus leo, tincidunt in porta vel, commodo eu sapien. Ut maximus ex non porttitor condimentum. Integer porta magna lorem, a dictum eros lacinia a. Phasellus eu elementum urna.

In id molestie lacus, sit amet rhoncus velit. Et turpis odio, accumsan at lectus sit amet, rhoncus pharetra neque. Vivamus vel imperdiet tellus. Donec vitae enim sed magna pulvinar scelerisque a sed dolor. Aenean eleifend mi justo, non sodales velit semper sit amet. Donec aliquet faucibus neque, a iaculis arcu efficitur eget. Nulla vitae vestibulum nunc, id viverra nibh. Sed molestie lectus magna, semper vulputate felis semper nec.`

//word count of the lorem paragraphs
function wordCount(quote) {
    var quoteArry = quote.split(" ");
    return (quoteArry.length);
}
console.log(`The three lorem paragraths contained ${wordCount(lorem)} words.`);

// "et" count in lorem paragraphs
function etCount(quote) {
    let count = 0;

    let newQuote
    for (let char of quote) {
        if (char === "," || char === ".") char = "";
        newQuote += char.toLowerCase();
    }

    let newQuoteArry = newQuote.split(" ");

    for (let word of newQuoteArry) {if (word === "et") count += 1}
    return (count);
}
console.log(`The word "et" appeared ${etCount(lorem)} times.`);

console.log("------------------------------");

//Bonus #2
let phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(phrase) {
    phrase = phrase.replace(/\W/g, ''); // /\w/ targets all non "word" characters and "g" allows for a glodal search throughout the string.
    let reversePhrase = reverseStr(phrase);
    return (reversePhrase.toLowerCase() === phrase.toLowerCase())
}
console.log(`The phrase: "${phraseToCheck}". ${isPalindrome(phraseToCheck) ? "Is" : "Is not"} a palindrome.`);
