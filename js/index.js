// Iteration 1: Names and Input
const hacker1 = 'Miguel';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Jaime';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// Iteration 3: Loops
let nameSeparated = '';
for (let i = 0; i < hacker1.length; i++) {
    nameSeparated += hacker1[i];
    if (i !== hacker1.length - 1) {
        nameSeparated += ' ';
    }
};
console.log(nameSeparated.toUpperCase());

let nameReversed = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    nameReversed += hacker1[i];
};
console.log(nameReversed);
/*Shorter way:
let splittedName = hacker1.split(''); 

let reversedArrayName = splittedName.reverse();

console.log(reversedArrayName.join(''));
*/

if (hacker1.localeCompare(hacker2) === 0) {
    console.log('What?! You both have the same name?');
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log("The driver's name goes first.");
};


//Bonus1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium eros orci, at sodales libero egestas at. Curabitur semper sollicitudin dolor, a fermentum augue vehicula a. Etiam quis odio lacus. Donec nulla nunc, vehicula nec dignissim id, bibendum nec sem. Vivamus eget nisl suscipit, semper justo a, pellentesque nunc. Donec at dictum tellus, at cursus sapien. Sed non hendrerit quam, a tristique ipsum. Morbi semper mauris vel pretium viverra. Aenean sagittis malesuada dui quis tincidunt. Suspendisse quam quam, rhoncus et mi in, dignissim pretium purus. Proin interdum sem velit, eu lobortis risus malesuada eget. Aenean eleifend nulla dolor. Proin accumsan, orci in congue finibus, purus enim placerat dui, ut commodo velit tellus nec nisl. Curabitur non nisl ac erat cursus tempor vitae vitae sapien. Nam blandit rutrum quam at posuere. Quisque a elementum sem. Nulla varius id augue at sollicitudin. Ut eget urna et nunc vehicula fermentum vel a ligula. Sed iaculis odio in felis venenatis, nec eleifend quam porttitor. Nulla non tincidunt ipsum. Integer ante tortor, suscipit id dui quis, dapibus dignissim neque. Sed tincidunt sapien ac porta rhoncus. Fusce eget sollicitudin felis, sit amet fringilla lectus. Proin et vehicula arcu. Donec a tempus turpis. Proin ornare diam ac pellentesque sagittis. Ut magna dolor, ornare et nisl sit amet, tincidunt dapibus sem. Curabitur tempor justo eget purus finibus, ut volutpat libero molestie. Donec hendrerit, diam id maximus pellentesque, risus lorem efficitur massa, eget mollis orci sapien et nibh.`;
let wordsCount = 0;
for (x = 0; x < loremIpsum.length; x++) {
    if (loremIpsum[x] === ' ') {
        wordsCount++;
    }
};
console.log(`Number of Words: ${wordsCount + 1}`);
//Shorter solution: console.log(`Words with Split ${loremIpsum.split(' ').length}`)

const etNum = loremIpsum.match(/ et /gi);
console.log(`'et' appears ${etNum.length} times in the test`);

//Bonus2
const palindrome = "A man, a plan, a canal, Panama!";
let rigthDirectionPalindrome = '';
let reversedDirectionPalindrome = '';

for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] === "," || palindrome[i] === " " || palindrome[i] === "!" || palindrome[i] === "?") {
        continue;
    }
    rigthDirectionPalindrome += palindrome[i];
    reversedDirectionPalindrome = palindrome[i] + reversedDirectionPalindrome;
}
const lowerCasedRigthDirectionPalindrome = rigthDirectionPalindrome.toLowerCase();
const lowerCasedReversedDirectionPalindrome = reversedDirectionPalindrome.toLowerCase();
if (lowerCasedRigthDirectionPalindrome == lowerCasedReversedDirectionPalindrome) {
    console.log("It is a palindrome");
}