console.log("I'm ready!");

// Iteration 1: Names and Input
/*1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/

const driverName = "Utku";
const navigatorName = "Hanna";

const hacker1 = `The driver's name is ${driverName}`;
console.log(hacker1);

const hacker2 = `The navigator's name is ${navigatorName} :)`;
console.log(hacker2);

// Iteration 2: Conditionals
/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (driverName.length > navigatorName.length) {
    console.log(
        `The driver has the longest name, it has ${driverName.length} characters.`
    );
} else if (driverName.length < navigatorName.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${navigatorName.length} characters!`
    );
}

// Iteration 3: Loops
/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

let capitalDriverName = "";

for (let i = 0; i < driverName.length; i++) {
    const char = driverName[i].toUpperCase();
    capitalDriverName += char + " ";
}
console.log(capitalDriverName);

let revNavigatorName = "";

for (let i = navigatorName.length - 1; i >= 0; i--) {
    const char = navigatorName[i];
    revNavigatorName += char;
}
console.log(revNavigatorName);

if (driverName.localeCompare(navigatorName) === -1) {
    console.log("The driver's name goes first.");
} else if (navigatorName.localeCompare(driverName) === -1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

/*Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id libero ac felis consequat hendrerit quis eget augue. Suspendisse luctus orci id nibh rutrum placerat. Aenean ultricies tincidunt condimentum. Nulla egestas, dui at posuere porttitor, lorem sapien aliquam tortor, nec accumsan tellus leo a quam. Sed arcu est, malesuada non ullamcorper placerat, maximus ut quam. Vivamus elit lectus, finibus non ante ut, pretium auctor elit. Mauris eget mauris massa. Suspendisse egestas ultrices nulla, sed imperdiet lectus volutpat vel. Nulla iaculis ornare sapien in vulputate. Donec sem mauris, tempor sed ipsum convallis, volutpat aliquam turpis. Etiam dapibus justo id massa rutrum aliquet. Proin porttitor ullamcorper ex nec tempor. Sed egestas mauris a dolor ultrices, ac interdum justo bibendum. Mauris venenatis hendrerit mauris quis suscipit. Nunc id diam nec turpis convallis aliquam fringilla ac odio. Suspendisse sed semper augue. Proin vitae aliquet magna, rhoncus scelerisque tellus. Phasellus ac elementum nisl. Nulla eu gravida dolor. Phasellus quis facilisis lorem. Donec in semper lacus. Pellentesque sit amet justo et mi tincidunt dapibus quis eget felis. Vestibulum urna urna, posuere at sollicitudin nec, congue ac purus. Maecenas convallis accumsan massa, sit amet sollicitudin turpis pellentesque ut. Nam commodo nunc nulla, sed semper massa eleifend eu. In augue ipsum, convallis finibus metus vel, bibendum scelerisque tortor. Duis et ultrices ipsum. Curabitur placerat pretium ex. Praesent ut purus pharetra libero mattis congue at in mi.";

const arrayOfWords = longText.split(" ");
const numberOfWords = arrayOfWords.length;
console.log(numberOfWords);

let Ets = [];
for (let i = 0; i < numberOfWords; i++) {
    const charEt = arrayOfWords[i];
    if (charEt.includes("et")) {
        Ets += charEt;
    }
}
let numberOfEt = Ets.length;
console.log(numberOfEt);

/*Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome.*/

const phraseToCheck = "Amor, Roma";

let straightWords = "";
let reversedWords = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i].toLowerCase().replace(",", "");
    straightWords += char;
}
console.log(straightWords);

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    const char = phraseToCheck[i].toLowerCase().replace(",", "");
    reversedWords += char;
}
console.log(reversedWords);

let isPalindrome = true;
for (let i = 0; i < straightWords.length; i++) {
    if (straightWords[i] !== reversedWords[i]) {
        isPalindrome = false;
    }
}

if (isPalindrome) {
    console.log("Wow! This is a Palindrome");
} else {
    console.log("Oops! This is not a Palindrome");
}
