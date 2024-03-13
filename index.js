/* Iteration 1: Names and Input
    1.1 Create a variable hacker1 with the driver's name.
    1.2 Print "The driver's name is XXXX".
    1.3 Create a variable hacker2 with the navigator's name.
    1.4 Print "The navigator's name is YYYY".
*/
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Foobert";
console.log(`The navigator's name is ${hacker2}`);


/* Iteration 2: Conditionals
    2.1. Depending on which name is longer, print:
    - The driver has the longest name, it has XX characters. or
    - It seems that the navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}




/* Iteration 3: Loops
    3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
    3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
    3.3 Depending on the lexicographic order of the strings, print:

    The driver's name goes first.
    Yo, the navigator goes first, definitely.
    What?! You both have the same name?
*/
let hacker1Capitalized = "";
for (let i = 0; i < hacker1Length - 1; i++) {
    hacker1Capitalized += `${hacker1[i].toUpperCase()} `;
}
hacker1Capitalized += hacker1[hacker1Length - 1].toUpperCase();
console.log(hacker1Capitalized);

let hacker2Reversed = "";
for (let i = hacker2Length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];    
}
console.log(hacker2Reversed);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}



/* Bonus 1:

Go to the [lorem ipsum generator](https://www.lipsum.com/) website and:

- Generate 3 paragraphs. Store the text in a new string variable named longText.
- Make your program count the number of words in the string.
- Make your program count the number of times the Latin word et appears.
*/
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit mattis lacinia. Sed non tellus sit amet odio porta eleifend. Etiam ornare fringilla massa, et vestibulum nunc condimentum ac. Vestibulum sagittis nisi ac eros imperdiet tristique. Maecenas volutpat ipsum et bibendum euismod. Aliquam aliquet nisl eget nisi vehicula dictum. Vivamus sit amet aliquam ante. Mauris a mi a ante sollicitudin euismod. Mauris mollis congue tortor, ut faucibus orci semper eget.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus facilisis felis id sapien maximus tincidunt. Etiam commodo suscipit tortor vitae finibus. Integer rhoncus tristique augue, quis sodales diam pharetra ac. Proin pellentesque purus sit amet sodales maximus. Sed interdum massa in mi venenatis, non viverra ex tempor. Suspendisse dapibus, ligula quis ultrices eleifend, est erat tincidunt dui, eu suscipit quam massa eget dolor. Phasellus semper mattis diam id finibus. Morbi gravida vel urna a gravida. Nunc nisl turpis, rutrum vel risus in, aliquam ultrices nunc. Maecenas lacus ex, rutrum vitae vehicula eget, eleifend non augue. Sed dapibus nec enim a sollicitudin.

Ut tristique egestas nibh, sit amet imperdiet lacus suscipit ut. Donec bibendum, nisi non scelerisque scelerisque, eros metus vulputate sem, in fringilla odio sapien et ligula. Suspendisse rhoncus neque malesuada vulputate pharetra. Vivamus efficitur leo nec congue iaculis. Proin fringilla, lorem sed auctor congue, lorem quam ullamcorper quam, non ullamcorper orci risus sit amet purus. Maecenas ultrices, nisi sit amet gravida egestas, est orci tempus justo, eu blandit lorem est in nulla. Cras vestibulum diam non eros lobortis, in malesuada eros congue. Nam eget tempor mi. In turpis est, varius in dui sit amet, placerat mollis nulla.`;
const targetGeneralWordCount = 273;
let generalWordCount = 0;
let specialWordCount = 0;
let specialWord = "et";
// for (let i = 0; i < longText.length; i++) {
//     if (longText[i] === " " || longText[i] === "\n") {
//         generalWordCount++;
//     }

// }
// generalWordCount++;

 
let isWord = false;

for(let i=0;i<longText.length;i++ ){
    if(longText[i] !== ' ' && longText[i] !== `\n`){
        isWord = true;
    } 
    else if(isWord ){
        generalWordCount++;
        isWord = false;   
    }




    if (longText.slice(i, i + specialWord.length) === specialWord) {
        specialWordCount++;
    }
}

if(isWord){
    generalWordCount++;
}

console.log(`The text has ${generalWordCount} words. The word "${specialWord}" appears ${specialWordCount} times.`);




/* Bonus 2:

    Create a new variable, phraseToCheck, containing some string value. 
    Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

    "A man, a plan, a canal, Panama!"
    "Amor, Roma"
    "race car"
    "stack cats"
    "step on no pets"
    "taco cat"
    "put it up"
    "Was it a car or a cat I saw?"
    "No 'x' in Nixon"
    
*/
const phrase = `Was it a car or a cat I saw?`
function checkIfPalindrome(phrase) {
    
    let cleanedPhrase = "";
    for (let i = 0; i < phrase.length; i++){
        if (phrase[i] >= 'A' && phrase[i] <= 'z'){
            cleanedPhrase += phrase[i].toLowerCase();
        }
    }
    
    let isPalidrom;
    for (let i=0;i<cleanedPhrase.length/2;i++){
        if(cleanedPhrase[i] === cleanedPhrase[cleanedPhrase.length-i-1]){
            isPalidrom = true;
        }
        else {
            return isPalidrom = false;
        }
    }
    return isPalidrom;
}

console.log(checkIfPalindrome(phrase))
