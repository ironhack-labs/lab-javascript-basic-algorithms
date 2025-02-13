// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jessica";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

// 3.2
let reverse = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
    reverse += hacker1[j];
}
console.log(reverse);

// 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices maximus ipsum at faucibus. Quisque id sapien ac mauris rhoncus sodales bibendum sed purus. Sed varius in turpis et porta. Integer aliquam, turpis ut dapibus porta, tellus justo maximus turpis, id ullamcorper sapien justo sed justo. Fusce tincidunt dignissim tellus, et molestie sem venenatis faucibus. Ut varius quam non viverra laoreet. Nullam quis risus vel nibh finibus lacinia. Vestibulum a dapibus magna, id ultrices mauris. Vestibulum id erat risus. Vivamus sed laoreet eros. Donec eget nibh vitae orci accumsan maximus non id sem. Ut in nisl mollis, pretium erat et, egestas risus. Mauris quis suscipit mi. Aliquam accumsan dignissim tincidunt. Mauris eget dui nec nisl tincidunt iaculis et non sem. Suspendisse sed tempor sapien, at blandit orci. Mauris scelerisque aliquet elit, nec scelerisque enim dignissim sit amet. Maecenas eu sapien est. Nam quis euismod arcu. Nam id imperdiet lorem. Nunc velit elit, fermentum quis turpis a, condimentum tincidunt sapien. Duis ornare nisl in enim tincidunt, vitae varius justo sollicitudin. Cras dignissim tempor tellus id euismod. Integer venenatis ultrices orci. Ut viverra vulputate erat, molestie fermentum nisi sollicitudin ut. Donec ultricies nibh massa, vel euismod metus ullamcorper vel. Praesent eget ultrices nulla. Ut sit amet augue enim. Nullam cursus, massa a mollis lobortis, massa nisi convallis tortor, ac posuere risus dui nec lacus. Sed feugiat arcu convallis gravida gravida. Sed commodo lorem sed neque luctus, vitae blandit est vehicula. Quisque sollicitudin cursus leo et pharetra. Morbi vitae aliquam nisl."

console.log(longText.split(" ").length);

let count = 0;
for (let k = 0; k < longText.length - 1; k++) {
    if (longText[k] === "e" && longText[k + 1] === "t") {
        count++;
    }
}
console.log(`The number of et in the paragraph is ${count}`);

// Bonus 2  
const phraseToCheck = prompt("Enter a phrase:");
let newPhrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let reversePhrase = "";
for (let l = newPhrase.length - 1; l >= 0; l--) {
    reversePhrase += newPhrase[l];
}
if (newPhrase === reversePhrase) {
    console.log("The phrase is a palindrome.");
} else {
    console.log("The phrase is not a palindrome.");
}