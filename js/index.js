// Iteration 1: Names and Input

const hacker1 = "raphaelle";
const hacker2 = "vincent";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let drLgth = hacker1.length;
// console.log(drLgth);
let nvLgth = hacker2.length;
// console.log(nvLgth);

if (drLgth > nvLgth) {
    console.log("The driver has the longest name, it has " + drLgth + " characters.")
}
if (drLgth < nvLgth) {
    console.log("It seems that the navigator has the longest name, it has " + nvLgth + " characters.")
}
if (drLgth === nvLgth) {
    console.log("Wow, you both have equally long names, " + drLgth + " characters!")
}

// Iteration 3-1: Loops

let result = "";

for (let i = 0; i < drLgth; i++) {
    result = result + " " + hacker1[i];
}

console.log(result.toUpperCase());

// Iteration 3-2: Loops

result = "";

var i = nvLgth - 1;
while (i >= 0) {
    result = result + hacker2[i];
    i--;
}

console.log(result);

// for (let i = drLgth - 1; i > 0; i--) {
//     result = result + " " + hacker1[i];
// }

// console.log(result.toUpperCase());

// Iteration 3-3: Loops

if (hacker1[0] > hacker2[0]) {
    console.log("The driver's name goes first.");
}
if (hacker1[0] < hacker2[0]) {
    console.log("Yo, the navigator goes first definitely");
}
if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?");
}

// Iteration bonus 1.2: Loops

var lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla vehicula consectetur. Fusce id dignissim odio, sodales imperdiet enim. Integer in semper arcu, eu vulputate lectus. Quisque sed velit vitae eros hendrerit porta vitae in dolor. Aliquam sollicitudin velit nulla, eu auctor massa efficitur semper. Donec eget tempor risus, ac mollis ex. Donec sit amet lobortis lectus. Fusce vehicula ac neque nec accumsan.";
var lorem2 = "Mauris varius a nunc eu vehicula. Fusce vitae velit quis justo viverra tempus vitae at nibh. Curabitur varius finibus sapien, et vehicula est elementum vel. Suspendisse id odio finibus, molestie leo vitae, dictum lectus. Nulla mollis turpis ante, scelerisque faucibus magna ultricies eu. Aenean malesuada velit ac risus posuere, et ultrices nunc feugiat. Cras imperdiet malesuada lectus sit amet consequat. Vestibulum mollis ac nibh tempor sollicitudin.";
var lorem3 = "Donec bibendum metus a velit aliquam, in tempus felis dictum. Quisque vulputate semper dui eget euismod. Nam sit amet felis convallis lacus blandit aliquet. Proin id bibendum ligula. Sed eget elit vitae nibh finibus sagittis. Nullam dictum quam at sem posuere, quis lobortis ligula laoreet. Suspendisse nec augue aliquet, auctor tellus eu, rhoncus arcu. Vestibulum dign";

var nmbwords = 1;

for (let i = 0; i < lorem1.length; i++) {
    if (lorem1[i] === " ") {
        nmbwords++;
    }
}

console.log("There are " + nmbwords + " word(s)");

nmbwords = 1;

for (let i = 0; i < lorem2.length; i++) {
    if (lorem2[i] === " ") {
        nmbwords++;
    }
}

console.log("There are " + nmbwords + " word(s)");

nmbwords = 1;

for (let i = 0; i < lorem3.length; i++) {
    if (lorem3[i] === " ") {
        nmbwords++;
    }
}

console.log("There are " + nmbwords + " word(s)");

// Iteration bonus 1.3: Loops

var compare = "";
nmbwords = 0;

for (let i = 0; i < lorem1.length; i++) {
    compare = lorem1[i] + lorem1[i + 1];
    if (compare === "et") {
        nmbwords++;
    }
}

console.log("There are " + nmbwords + " iteration(s) of the word *et*");

// Iteration bonus 2
var phraseToCheck = "race car";
var pTCclean = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    //remove space and special character from string
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) {
        pTCclean += phraseToCheck[i].toLowerCase();
    }
}

var isPalindrome = true;

for (let i = 0; i < pTCclean.length / 2; i++) {
    //check if character is equal, if not, it isn't a palindrome
    if (pTCclean[i] !== pTCclean[(pTCclean.length - 1) - i]) {
        isPalindrome = false;
    }
}

//console.log(pTCclean);

if (isPalindrome) {
    console.log("*" + phraseToCheck + "* IS a palindrome");
} else {
    console.log("*" + phraseToCheck + "* IS NOT a palindrome");
}