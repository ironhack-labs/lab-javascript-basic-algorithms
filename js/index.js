// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'John';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Alexandre';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
const lengthNameDriver = hacker1.length;
const lengthNameNavigator = hacker2.length;
 //The driver has the longest name
if (typeof hacker1 === 'string' && typeof hacker1 === 'string'){
    if(lengthNameDriver > lengthNameNavigator){
        console.log(`The driver has the longest name, it has ${lengthNameDriver} characters`);
    } //The navigator has the longest name
    else if (lengthNameDriver < lengthNameNavigator) {
        console.log(`It seems that the navigator has the longest name, it has ${lengthNameNavigator} characters`);
    } //Names have same length
    else {
        console.log(`Wow, you both have equally long names, ${lengthNameDriver} characters!`);
    }
} else {
    console.log('The name of one of the hacker is incorrect');
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//Capitalize
let nameDriverCap = hacker1.toUpperCase();
//Add space
let nameDriverCapSpace = '';
for (let i=0; i<lengthNameDriver; i++){
    nameDriverCapSpace += nameDriverCap[i] + ' ';
}
console.log(nameDriverCapSpace);


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseString(string){
    let reverseName = '';
    for (let i=string.length-1; i>=0; i--){
        reverseName += string[i];
    }
    return reverseName;
}

console.log(reverseString(hacker1));


//3.3 Depending on the lexicographic order of the strings, print:
const firstLetterDriver = hacker1[0];
const firstLetterNavigator = hacker2[0];

if(firstLetterDriver < firstLetterNavigator){
    console.log(`The driver's name goes first.`);
} else if (firstLetterDriver > firstLetterNavigator) {
    console.log(`Yo, the navigator goes first definitely.`);
} //Names have same length
else {
    console.log(`What?! You both have the same name?`);
}


// Bonus 1

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat aliquam magna vitae pellentesque. Sed tincidunt consectetur felis et laoreet. Vivamus et leo velit. Mauris bibendum nibh et nisi lacinia, sit amet posuere tellus finibus. Etiam finibus ligula ante, eu pellentesque mi pulvinar vel. In nisi lorem, rhoncus in molestie sit amet, rhoncus ac sapien. Cras accumsan sollicitudin vulputate. Proin placerat nisl a nulla viverra feugiat sed a libero. Pellentesque id commodo velit, non accumsan lectus. Nulla facilisi. Suspendisse ultricies non nulla eu hendrerit.
Donec facilisis magna enim, vitae vulputate lectus hendrerit sit amet. Sed fermentum molestie sapien et placerat. Pellentesque sit amet metus tincidunt, mollis ipsum vitae, bibendum massa. Morbi rhoncus fringilla enim, ac pharetra arcu accumsan vitae. Aliquam in mauris eu ligula sagittis dictum. Integer nec convallis lectus. Maecenas ornare magna elit, sit amet iaculis tortor feugiat at.
Curabitur vulputate, sem in ullamcorper laoreet, neque augue facilisis lacus, ut euismod nulla dui et erat. In suscipit sagittis diam, sit amet blandit quam. Fusce luctus purus odio, ac ultrices risus maximus a. Fusce ac ornare urna. Quisque at turpis quis leo condimentum volutpat. Vivamus mattis at nunc vestibulum scelerisque. Sed est urna, rutrum sit amet dolor ut, interdum auctor justo. Sed a lectus egestas, tempus dolor in, semper metus. Nulla a faucibus diam. Sed viverra eu metus ac facilisis. Donec massa mi, malesuada eu erat ultricies, molestie dictum dolor. Morbi neque libero, sollicitudin nec ante vel, luctus iaculis neque. Nulla rutrum dolor commodo lorem malesuada rutrum. Vestibulum efficitur nunc id diam ultricies aliquam eget ut ipsum. `

// Make your program count the number of words in the string
function countNumberOfWords(string){
    // There is always one more word than space
    let counter = 1;
    if (string[string.length-1] <= 'A'){
        counter --;
    }
    for (let i=0; i<string.length; i++){
        if (string[i] <= 'A' || string[i] === '\n'){
            counter ++;
        }
        if ((string[i] <= 'A' && string[i+1] <= 'A')){
            counter --;
        }
    }
    
    console.log(counter);
}

countNumberOfWords(paragraphs);

// Make your program count the number of times the Latin word et appears.
function countSpecificWord(string){
    let counter = 0;
    for (let i=0; i<string.length; i++){
        if(string[i] === 'e' && string[i+1] === 't' && string[i-1] <= 'A' && string[i+2] <= 'A'){
            counter ++;
        }
    }
    return counter;
}
console.log(countSpecificWord(paragraphs));


// Bonus 2

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
/*
    "A man, a plan, a canal, Panama!"
    "Amor, Roma"
    "race car"
    "stack cats"
    "step on no pets"
    "taco cat"
    "put it up"
    "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

function cleanString(string){
    let newString = '';
    string = string.toLowerCase();
    for (let i=0; i<string.length; i++){
        if (string[i] < 'a'){
            continue;
        } else {
            newString += string[i];
        }
    }
    return newString;
}
function isPalindrom(string){
    finalString = cleanString(string);
    if (finalString === reverseString(finalString)){
        console.log(`${string} is a palindrom`);
    } else {
        console.log(`${string} is not a palindrom`);
    }
}

isPalindrom(`No 'x' in Nixon`);
isPalindrom(`John`);

function isPalindromSecondOption(string){
    finalString = cleanString(string);
    let isPalindrom = true;
    for (let i=0; i<Math.trunc(finalString.length/2); i++){
        if (finalString[i] !== finalString[finalString.length-i-1]){
            isPalindrom = false;
        } else {
            isPalindrom = true;
        }
    }
    if (isPalindrom){
        console.log(`${string} is a palindrom`);
    }else {
        console.log(`${string} is not a palindrom`);
    }
}

isPalindromSecondOption('race car');
isPalindromSecondOption('John');
