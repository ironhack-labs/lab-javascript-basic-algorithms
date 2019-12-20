// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Jaime";

// 1.2 Print `"The driver's name is XXXX"`.

console.log("The driver's name is " + hacker1);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = prompt("What's your name?");

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + XX + " characters!.");
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let nameSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpace += hacker2[i].toUpperCase() + ' ';
}

console.log(nameSpace);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let nameOrder = "";
for (i = hacker2.length -1; i >= 0; i--) {
    nameOrder += hacker2[i];
}
console.log(nameOrder);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1 > hacker2) {
    console.log('The driver´s name goes first')
} else if (hacker1 < hacker2) {
    console.log('The navigator goes first definitely')
} else {
    console.log('What?! You both got the same name?')
}

//Bonus Time
//Bonus 1:
//Go to lorem ipsum generator and:

//Generate 3 paragraphs.Store the text in a variable type of string.

let textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at est sit amet lorem tempor viverra quis sit amet elit. Ut efficitur consequat odio, eget egestas est cursus quis. Nullam egestas, nisi sed sodales bibendum, sapien massa placerat elit, et euismod lectus leo at felis. Etiam tempus diam est, imperdiet laoreet diam venenatis a. In hac habitasse platea dictumst. Sed hendrerit enim vulputate sollicitudin scelerisque. Nam auctor id sem vitae placerat. Nullam congue mollis mi, et porttitor odio efficitur vel. Ut vehicula ante non massa rutrum hendrerit. Donec imperdiet vel mi at posuere.Fusce vulputate tempor justo, ut pulvinar ipsum dapibus at. Quisque mauris augue, lacinia a arcu sit amet, cursus porttitor turpis. Integer eget diam in neque cursus dignissim a in nibh. Vestibulum faucibus enim finibus, finibus nulla eget, auctor nibh. Aenean nec risus varius, elementum orci et, rutrum tellus. Fusce nisl felis, consequat ut tortor non, venenatis dictum leo. Sed iaculis dolor at dictum maximus. Donec mollis tristique laoreet. Quisque vel imperdiet urna, id accumsan ante. Donec eu facilisis tortor. Curabitur hendrerit mauris urna. Praesent gravida augue in iaculis convallis. Integer cursus dolor lacus.Fusce consectetur sagittis risus in cursus. Aliquam at vehicula dolor. Integer non convallis mauris. Sed efficitur imperdiet neque, non maximus nulla pulvinar id. Ut semper, ligula at interdum congue, neque orci lobortis ligula, vitae hendrerit felis erat eget enim. Quisque consequat turpis orci, et rutrum purus ornare ac. Duis quis varius velit. In commodo nunc tellus, a blandit urna interdum a. Mauris vulputate tempus sapien eu laoreet. Aliquam erat volutpat. Ut eleifend sem nulla, pharetra semper magna blandit et. Mauris condimentum mi ac erat varius malesuada. Sed a suscipit odio, id suscipit ligula. Cras in eros ultrices, euismod est id, molestie tortor. Nulla blandit ligula eu nisi placerat, vel commodo urna iaculis.";

//Make your program count the number of words in the string.

let arrayWords = textLorem.split(" ")
// console.log(arrayWords) To know if it's working correct the arrayWords
console.log(arrayWords.length);

//Make your program count the number of times the Latin word et appears.

let countEt = 0
for (i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].includes("et")) {
        countEt++;
    }

}
console.log(countEt)

//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value.Write a code that will check if the value we assigned to this variable is a Palindrome.Here are some examples of palindromes:

let phraseToCheck = "Car sac";
let phraseToCheckLower = phraseToCheck.toLowerCase();
let phraseToCheckLowerNoSpaces = phraseToCheckLower.replace(" ", "")

let reversePhraseToCheck = "";
for (i = phraseToCheckLowerNoSpaces.length - 1; i >= 0; i--) {
    reversePhraseToCheck += phraseToCheckLowerNoSpaces[i];
}
if (phraseToCheckLowerNoSpaces === reversePhraseToCheck) {
    console.log("It's a Palindrome");
} else {
    console.log("It's not  a Palindrome");
}

