// Iteration 1: Names and Input
let hacker1 = "Alice";
const textDriver = "The driver's name is ";
console.log(textDriver + hacker1);
let hacker2 = "John";
console.log(textDriver + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);

}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}
if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet, ante non pharetra sodales, nunc lacus finibus lacus, sit amet finibus lacus ante eget quam. Mauris consequat auctor enim, eu pretium lorem convallis vel. Praesent ultrices feugiat egestas. Aenean sit amet est ex. Proin tincidunt semper dignissim. Proin fermentum volutpat libero, in varius risus tempus ac. Integer egestas enim et odio viverra auctor. Nullam libero nisi, fermentum vitae suscipit et, porttitor ut ante. Pellentesque mi nunc, porta vitae consectetur eget, varius ut tellus.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vitae ullamcorper justo, non rhoncus urna. Nulla dapibus est venenatis viverra fringilla. Sed et est id magna dictum convallis. Nunc at congue enim, sit amet pellentesque est. Sed id placerat quam, sed interdum risus. Etiam vitae ante sagittis, semper lorem sit amet, lacinia risus. Quisque ut lobortis libero. Morbi feugiat convallis convallis. Donec euismod vitae lorem in aliquet. In hac habitasse platea dictumst. Curabitur dapibus ex erat, a mattis urna feugiat id. Fusce dictum augue non malesuada faucibus. Nullam placerat vestibulum tellus vitae viverra. Aliquam consequat auctor odio, eu semper felis.
Vivamus at fringilla ante. Vivamus quis volutpat lacus. Curabitur a turpis lacinia, vestibulum enim eget, interdum ipsum. Proin fermentum lectus vel ex iaculis molestie. Suspendisse sit amet malesuada diam. Quisque facilisis ac massa in fringilla. In vitae libero purus. Sed rhoncus arcu nec metus facilisis facilisis. Aliquam hendrerit placerat quam egestas rhoncus. Maecenas consectetur nunc ante, at pretium diam iaculis ac. Mauris a posuere mauris, a hendrerit nisl. Ut mi massa, vulputate vel pellentesque sed, aliquam non leo. Cras non nunc non nulla eleifend eleifend eu sit amet felis.`;
let wordCount = 0;
let latinWordCount = 0;
let Arry = longText.split(" ");
wordCount = Arry.length - 1;
for (let i = 0; i < Arry.length; i++) {
    if (Arry[i] === "et") {
        latinWordCount++;
    }
}
console.log(`The text contains ${wordCount + 1} words.`);
console.log(`The text contains ${latinWordCount} occurrences of the Latin word et.`);

// Bonus 2
let phraseToCheck;
phraseToCheck = "put it up";
let y = phraseToCheck.length - 1;
console.log(phraseToCheck.length);
for (let i = 0; i <= phraseToCheck.length / 2 - 1; i++) {
    console.log(phraseToCheck[i]);
    console.log(phraseToCheck[y]);
    if (phraseToCheck[i].toUpperCase !== phraseToCheck[y].toUpperCase) {
        console.log("It's not a palindrome");
        break
    }
    y--;
}
console.log(y);
if (y === ((phraseToCheck.length / 2) - 1)) {
    console.log("It's a palindrome");
}
