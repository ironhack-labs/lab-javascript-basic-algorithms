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

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales blandit erat, nec volutpat mauris tempus at. Nunc a porta felis. Curabitur sodales in nunc ac scelerisque. Donec pharetra lorem ligula, vitae venenatis justo suscipit ut. Aenean placerat lorem sit amet ex euismod, non imperdiet risus tincidunt. Sed in justo fringilla velit eleifend rhoncus. Sed tellus dui, bibendum sit amet leo in, auctor congue neque. Suspendisse nisi ipsum, lacinia et felis quis, luctus consequat ligula. Fusce eget velit sit amet orci mattis porttitor. In et aliquet turpis, a dignissim nulla. Vivamus dictum egestas quam eget euismod. Proin eu magna id dui maximus accumsan quis eu dui. Suspendisse condimentum arcu in neque viverra viverra. Fusce interdum sollicitudin sem, sed vestibulum lectus. Nulla euismod rhoncus nisl a luctus. Phasellus orci nunc, rutrum a consectetur suscipit, auctor quis massa. Curabitur at lacus posuere, vulputate erat a, lobortis eros. Praesent eleifend lorem neque, sit amet elementum dui lacinia a. Etiam sed venenatis odio, et ultricies est. Duis euismod posuere magna ut egestas. Suspendisse ornare nec dolor vel fringilla. Etiam dapibus varius dictum. Cras vitae lectus eget augue volutpat vestibulum. Ut ornare lacinia elit, quis consequat dolor consequat in. Nam fermentum auctor mi, vel pretium libero finibus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut ultrices nisi. Vestibulum lobortis ut ipsum sed semper. Vestibulum ac lorem vulputate velit tincidunt dictum. Donec non varius purus, et tempus est. Duis vel finibus ipsum, non efficitur urna. Vivamus lacus eros, imperdiet at massa nec, porta ornare dolor. Ut feugiat turpis at dui cursus tincidunt. Vestibulum placerat lacus sapien, at tincidunt ante suscipit sit amet. Nam at tincidunt urna, id varius purus. Donec vel tortor ac tortor luctus semper vitae eu nisi. Suspendisse pretium ligula in pharetra sollicitudin. Vestibulum vel ex et tortor ullamcorper aliquam ut eu ligula. Aliquam maximus varius neque, eu tempus nisi eleifend id. Proin eget placerat ligula, nec accumsan neque. Curabitur dignissim lectus id nulla interdum auctor. Phasellus non rutrum nisi, pretium interdum elit. Mauris sapien elit, rutrum ac sem aliquet, accumsan ullamcorper velit. Etiam condimentum ipsum in eros eleifend faucibus sed ac dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

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