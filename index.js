// Iteration 1: Names and Input
let hacker1 = "Miguel";
console.log("The driver's name is: " + hacker1);
let hacker2 = "Saddam";
console.log("The navigator's name is: " + hacker2);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if(hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, XX characters!.");
}
// Iteration 3: Loops
//3.1
let capString = " ";
for(let i = 0; i < hacker1.length; i++) {
    capString += hacker1[i].toUpperCase() + " ";
    if (i == hacker1.lenth) {
        capString += hacker1[i];
    }
} 
console.log(capString);
//3.2
let capString2 = " ";
for(let i = hacker2.length - 1; i >= 0; i--) {
    capString2 += hacker2[i];
}
console.log(capString2);
//3.3
if(hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) > 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
let longText = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;

console.log(longText.split(" ").length);

console.log(longText.split("et").length);
 
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
let phraseToCompare = cleanPhrase.split("").reverse().join("");
if(cleanPhrase == phraseToCompare) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}
console.log(cleanPhrase);
console.log(phraseToCompare);





