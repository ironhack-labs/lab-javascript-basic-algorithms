//Iteration 1: Names and Input
//----------------------------
//Create a variable `hacker1` with the driver's name.
var hacker1 = "Andrei";
//Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
//Create a variable `hacker2` with the navigator's name.
var hacker2 = "Anthony";
//Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
//----------------------------
/*Depending on which name is longer, print: 
The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
};
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
};

//Iteration 3: Loops
//--------------------------

//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

var hackerOne = "";
for (var i = 0; i < hacker1.length; i++) {
    hackerOne = hackerOne + hacker1[i].toUpperCase() + " ";
}
console.log(hackerOne)
//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

var hackerTwo = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    hackerTwo = hackerTwo += hacker2[i]
}

console.log(hackerTwo)

/*Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
};
if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first definitely.`)
};
if (hacker1[0] === hacker2[0]) console.log(`What?! You both have the same name?`);


/*Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
*/

var paragraphs = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tempus massa, in fringilla odio. Etiam congue volutpat libero ac eleifend. Nullam porttitor, mauris ultrices vulputate rutrum, nibh ligula scelerisque orci, et lacinia velit sapien sit amet massa. Ut faucibus dapibus fermentum. Suspendisse consequat mattis libero at sollicitudin. Vestibulum ultricies consectetur feugiat. Vestibulum cursus ante sit amet dolor porttitor, quis egestas metus vehicula. Vivamus venenatis felis placerat tempus elementum. Nunc sagittis velit nunc, eget congue ipsum scelerisque id. In hac habitasse platea dictumst. Donec placerat ipsum id sapien pulvinar vulputate at non sem. Morbi tristique congue odio, vel fringilla purus. Donec diam massa, ultrices non vestibulum eget, consectetur finibus velit. Vestibulum quis faucibus mi. Nulla non tristique sapien. Cras eget ligula non quam viverra maximus. Ut semper felis non condimentum accumsan. Nulla magna elit, rutrum eget malesuada in, pharetra ut eros. Vestibulum volutpat, ex eu efficitur efficitur, justo erat pellentesque est, vitae consequat erat sapien ut dui. Nunc volutpat sed orci eget hendrerit. Ut lorem tellus, faucibus a varius sed, fermentum a arcu. Fusce venenatis nisi id quam faucibus, vitae consectetur mi mattis. In consequat congue neque vitae bibendum. Nam bibendum condimentum molestie. Mauris quis auctor elit, vitae rhoncus odio. Duis in lobortis massa. Mauris nec tincidunt orci. Curabitur sollicitudin nibh accumsan ultricies scelerisque. Donec rhoncus egestas molestie. Donec molestie venenatis mattis. Proin luctus condimentum aliquam. Fusce a quam purus. Donec dignissim, lacus nec molestie fringilla, sapien elit eleifend nisi, eu pharetra urna arcu non velit.";

var numberWords = 0;

for (var m = 0; m < paragraphs.length; m++) {
    if (paragraphs.charAt(m) === ' ') {
        numberWords++;
    }
}

console.log(`Number of words: ${numberWords + 1}`);

//Make your program count the number of times the Latin word et appears.

var wordsEt = 0;

for (var m = 0; m < paragraphs.length; m++) {
    if (paragraphs.charAt(m) === ' ' && paragraphs.charAt(m + 1) === 'e' && paragraphs.charAt(m + 2) === 't' && paragraphs.charAt(m + 3) === ' ') {
        wordsEt++;
    }
}

console.log(`Number of words Et: ${wordsEt}`);

/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.*/

var phraseToCheck = "Was it a car or a cat I saw?";
var phraseReverse = "";
var phraseToCheckTwo = "";
var phraseReverseTwo = "";

for (var i = phraseToCheck.length - 1; i >= 0; i--) {
    phraseReverse = phraseReverse += phraseToCheck[i]
};


for (var i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === ' ') {
        phraseToCheckTwo = phraseToCheckTwo + phraseToCheck[i].replace(" ", "");
    } else phraseToCheckTwo = phraseToCheckTwo + phraseToCheck[i];
};

phraseToCheckTwo = phraseToCheckTwo.replace("?", "");
phraseToCheckTwo = phraseToCheckTwo.replace("!", "");
phraseToCheckTwo = phraseToCheckTwo.toLowerCase();


for (var i = 0; i < phraseReverse.length; i++) {
    if (phraseReverse[i] === ' ') {
        phraseReverseTwo = phraseReverseTwo + phraseReverse[i].replace(" ", "");
    } else phraseReverseTwo = phraseReverseTwo + phraseReverse[i];
};


phraseReverseTwo = phraseReverseTwo.replace("?", "");
phraseReverseTwo = phraseReverseTwo.replace("!", "");
phraseReverseTwo = phraseReverseTwo.toLowerCase();


if (phraseToCheckTwo === phraseReverseTwo) {
    console.log(`Phrase is a Palindrome`);
} else { `Sorry. Try again!` };



