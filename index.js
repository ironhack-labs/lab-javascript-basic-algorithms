// Iteration 1: Names and Input
const hacker1 = "Dani";
console.log("The driver's name is " + hacker1);
const hacker2 = "Bryan";
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length + "characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has" + hacker2.length + "characters.");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops
const nameSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSeparated += hacker1[i];
}

const nameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i];
}

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 = hacker2) {
    console.log("What?! You both have the same name?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac metus ac tortor ornare pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec metus congue, tempor dui in, cursus eros. Proin et nisl felis. Fusce sed justo pellentesque lectus mattis ultrices. Sed pretium urna at auctor rutrum. Nam egestas consectetur arcu, ac fermentum turpis imperdiet in.

Nullam ac tincidunt nibh, nec viverra metus. Nullam convallis fringilla libero efficitur finibus. Nunc nec malesuada quam. Suspendisse a ultrices ligula, nec rhoncus est. Nulla magna ante, facilisis sit amet molestie ac, elementum vel magna. Phasellus molestie congue consequat. Praesent ullamcorper a nulla eu sollicitudin. Praesent blandit ac quam sed rutrum. Vestibulum in malesuada purus. Aliquam quis tellus non erat interdum scelerisque. Duis commodo est vitae velit condimentum sodales. Donec in consectetur justo, id dictum velit. Cras justo velit, sodales at finibus vitae, consequat ultricies magna. Vivamus nibh lacus, consequat in lacinia at, placerat at libero. Mauris porta, augue ac ullamcorper tempor, nulla libero consequat massa, ac pretium justo libero bibendum felis. Integer et finibus nisi, ut venenatis justo.

Ut pharetra interdum lectus in varius. Suspendisse rutrum urna sit amet tempus aliquam. Vestibulum mattis nisl in mauris imperdiet consequat. Nullam sollicitudin quam in suscipit pharetra. In non dictum sem, vitae interdum elit. Ut faucibus blandit quam eu sollicitudin. Nulla vitae erat a tortor consequat hendrerit nec in risus. Curabitur eget iaculis magna. Nam euismod, turpis sit amet gravida cursus, ligula metus rutrum arcu, vel volutpat metus est a lectus. Quisque auctor leo a lobortis ullamcorper. Phasellus id ante dui. Nam sollicitudin vel tortor facilisis elementum.`;

const wordCount = longText.split(" ").length;

const etCount = longText.split("et").length - 1;

let phraseToCheck = "race car";

let cleanPhrase = phraseToCheck.replace(/\W/g, '').toLocaleLowerCase();

let reversedPhrase = "";

const ifPalindrome = true;

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += cleanPhrase[i];
}

if (cleanPhrase === reversedPhrase) {
    console.log("It's a palindrome!");
} else {
    console.log("It's not a palindrome.");
}
