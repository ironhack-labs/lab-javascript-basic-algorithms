// Iteration 1: Names and Input

let hacker1 = "chus";
let hacker2 = "claudi";
let driver;
let navigator;

if (hacker1.length > hacker2.length) {
    driver = hacker1;
    navigator = hacker2;
    console.log(`The driver's name is ${driver}`);
} else if (hacker2.length > hacker1.length) {
    driver = hacker2;
    navigator = hacker1;
    console.log(`The driver's name is ${driver}`);
} else {
    console.log(`Wow, you both have equally long names, ` + hacker1.length + ` characters!`)
}

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
    console.log(`The driver is ${driver}, has the longest name, it has ${driver.length} characters`);
} else if (navigator.length > driver.length) {
    console.log(`The navigator is ${navigator}, has the longest name, it has ${navigator.length} characters`);
} else {
    let character = hacker1.length;
    console.log("Wow, you both have equally long names, " + character + " characters!")
}


// Iteration 3: Loops

let nameSpace = (driver.toUpperCase().split('').join(' '));

console.log(nameSpace);

let nameReverse = (navigator.split('').reverse().join(''));

console.log(nameReverse);

if (driver.length > navigator.length) {
    console.log(`The driver's name goes first.`);
} else if (navigator.length > driver.length) {
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1:

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis risus sit amet orci iaculis, eget fringilla turpis imperdiet. Cras tempus, turpis ut pellentesque lacinia, ante enim aliquam orci, nec sodales massa eros id ligula. Quisque eget quam vehicula, luctus ligula congue, consequat est. Donec eget lacinia orci. Nullam imperdiet vehicula enim nec efficitur. Donec iaculis tincidunt sapien, facilisis faucibus leo vulputate vitae. Nulla accumsan rutrum ultricies. Sed sodales felis in erat malesuada aliquam. Sed molestie, lacus id fringilla rutrum, justo enim tempus tortor, quis varius ligula nibh quis quam. Curabitur condimentum eget urna ac suscipit. Mauris mattis, risus non pharetra condimentum, purus neque viverra metus, sed commodo eros lectus eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi tellus, efficitur quis lacus ac, aliquet ultrices metus. Nullam tempus odio ut purus pellentesque consectetur. Mauris rutrum velit sed augue finibus hendrerit.";
paragraph += "Suspendisse sit amet erat pulvinar, porttitor mi ut, congue nisl. Nunc pulvinar libero libero, in auctor sem elementum vel. Integer finibus, urna feugiat auctor vestibulum, odio arcu gravida lorem, non pellentesque ligula lectus a mi. Nullam vestibulum, urna et rutrum posuere, erat mi semper ex, eu cursus libero massa sit amet tellus. Fusce vulputate nulla nec massa finibus luctus. Praesent ac vehicula metus, ac feugiat arcu. Vestibulum quis risus a dui pretium semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed nulla eros. Pellentesque eu vestibulum arcu. Vestibulum suscipit, erat vel accumsan volutpat, dolor purus accumsan nibh, quis dapibus ipsum sapien vel ex. Mauris quis aliquam nisi. Suspendisse at lacinia diam. Sed in dictum elit.";
paragraph += "Etiam sed laoreet urna, non bibendum tortor. Nullam varius velit vitae sem sodales, ut ullamcorper augue finibus. Curabitur consectetur massa sit amet ultricies fringilla. Sed aliquet lectus hendrerit, efficitur enim in, maximus arcu. Nullam volutpat et diam at consectetur. Fusce consequat erat vitae magna consectetur mattis. Phasellus fringilla maximus ullamcorper. Nunc feugiat massa tristique neque lacinia euismod a sed erat. Mauris nulla erat, pellentesque ac placerat eget, commodo sed lectus. Nullam elit tellus, dignissim eu ipsum sit amet, vehicula blandit lacus. Phasellus bibendum sodales nulla ac ullamcorper."


let words;
let wordEt = [];

words = paragraph.split(" ");

console.log(`The number of words in the string is ` + words.length);

for (var i = 0; i < paragraph.length; i++) {
    if (paragraph[i].toLowerCase() === "a") {
        wordEt.push(i);
    }
}

console.log(`The number of words -et- in the string is ` + wordEt.length);

// Bonus 2:

let phraseToCheck = "step on no pets";

let phraseToCheckReverse = (phraseToCheck.split('').reverse().join(''));

if (phraseToCheck == phraseToCheckReverse) {
    console.log(`-${phraseToCheck}- is a Palindrome`);

} else {
    console.log(`-${phraseToCheck}- not is a Palindrome`);
}