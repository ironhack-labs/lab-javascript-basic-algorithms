// Names and Input
let hacker1 = "Charpentier"
console.log("The driver's name is " + hacker1);

let hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length === hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
} else {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

// Print name
let lettres = ""

for(i = 0; i < hacker1.length; i++) {
    console.log(lettres += hacker1.charAt(i).toUpperCase() + " ")
}

for(i = hacker2.length; i >= 0; i--) {
    console.log(lettres += hacker2.charAt(i))
}

// Lexicographic order
if (hacker1.localeCompare(hacker2) > 0) {
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 0)  {
    console.log("What?! You both got the same name?");
} else {
    console.log("Yo, the navigator goes first definitely");
}

// Palindroms
var userString = prompt("Enter a string");

newString = "";
n = userString.length;
for(i = n-1; i >= 0; i--) {
    newString += userString.charAt(i);
} if (newString == userString) {
    console.log("This is a palindrome.");
} else {
    console.log("This is not a palindrome.")
        
}

// Lorem ipsum generator
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec erat vel nisl rhoncus ullamcorper. Vestibulum rhoncus ex et justo ultrices consequat. Etiam rutrum lectus et magna condimentum, suscipit tincidunt ante laoreet. Sed porta vestibulum urna nec suscipit. Etiam metus magna, imperdiet eget tortor et, porta sagittis nisi. Mauris arcu diam, interdum eget mi eget, efficitur dignissim urna. Curabitur ac metus tempor, lobortis odio ut, pretium massa. Nullam et libero et augue varius interdum. Quisque varius est in eleifend finibus. Cras nec libero scelerisque, commodo mi at, auctor lectus. Sed pulvinar quam eget dolor lacinia malesuada. Proin ornare euismod urna, et tincidunt erat accumsan a. Duis quis lacinia eros. In imperdiet tellus ante, volutpat varius ligula rutrum at. Aliquam suscipit lectus nunc, id ultricies ante pharetra fermentum. Mauris sed mi vitae urna lobortis condimentum a non odio. Vivamus faucibus diam at auctor ultricies. Integer leo urna, viverra elementum semper eget, consectetur sit amet diam. Suspendisse potenti. Phasellus vehicula sed ipsum sit amet egestas. Etiam ac egestas diam. Praesent ac urna ut lectus consequat scelerisque. Mauris gravida ante sit amet purus bibendum vulputate. Etiam lorem urna, venenatis et ex et, rutrum maximus turpis. Proin varius a felis non aliquet. Vestibulum ipsum nulla, commodo non blandit et, tempor at felis. Curabitur ullamcorper nisl a elit congue imperdiet. Etiam sed nulla at nisi feugiat scelerisque at sed diam. Ut ac eleifend enim, et suscipit ipsum. Aliquam erat volutpat. Phasellus fringilla auctor lorem, eget volutpat nisi egestas a. Nullam nisi velit, sodales vel tellus et, consectetur posuere mi. Nulla dignissim sem et accumsan tincidunt. Morbi tristique mollis neque, in pellentesque enim."

let counter = 1;
for (i=0; i < text.length; i++) {
 if (text.charAt(i) === " ") {
   counter += 1;
 }
}
console.log("The text contains " + counter + " words.");

var n = text.search("et");
console.log("Your text contains " + n + " times the word 'et'.");