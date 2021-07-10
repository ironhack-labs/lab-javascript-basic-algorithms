// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `hacker2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Driver's Name
let hacker1 = "Carlos";
console.log("The driver's name is " + hacker1);

// Navigator's Name
let hacker2 = "Henrique";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.


if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has" + " " + hacker1.length +  " " + "characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has" + " " + hacker1.length +  " " + "characters.");
} else if (hacker1.length === hacker2.length){
  console.log("Wow, you both have equally long names," + " " + hacker1.length +  " " + "characters.");
}

// Iteration 3: Loops
  
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" 

let lettersDriver = "";
let invertedNavigatorName = "";

for(let i=0; i < hacker1.length-1; i++) {
  lettersDriver += hacker1[i] + " ";
};
console.log((lettersDriver + hacker1.slice(-1)).toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
for(let i = hacker2.length-1; i >= 0; i--) {
  invertedNavigatorName += hacker2[i];
};
console.log(invertedNavigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0){
  console.log("What?! You both have the same name?")
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
let loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non semper dui. Praesent at quam iaculis tortor rhoncus congue. Proin dapibus ultrices eleifend. Quisque aliquam fringilla tellus, sed pellentesque felis tristique ac. Vivamus efficitur metus quis facilisis maximus. Phasellus pretium arcu sit amet diam tristique maximus. Duis mattis erat eros, ac fermentum enim rutrum sed. Donec justo odio, dignissim ut ligula quis, porta efficitur leo. Cras et purus lectus. Ut mattis felis nisi, id rutrum erat scelerisque vel. Aliquam erat volutpat. Curabitur consectetur rhoncus est, id sagittis turpis tristique in. Aenean ac felis semper, viverra lectus sed, auctor nibh. Phasellus pretium quis nisl eu euismod. Nunc enim ante, ultricies in purus at, accumsan luctus ligula. Curabitur vulputate porttitor leo, sed blandit eros. Vestibulum eleifend nulla eget magna tempor, ut condimentum orci consectetur. Quisque nec libero nec odio semper scelerisque sed nec quam. Donec quis elit ut ex aliquam placerat eget a nibh. Proin vulputate luctus sollicitudin. In id luctus velit. Vestibulum vel lectus eget massa maximus tempus. Sed non vulputate elit. Donec ac commodo eros. Mauris congue gravida orci ac laoreet. Praesent sollicitudin nulla vel urna auctor vehicula. Pellentesque in suscipit sapien. Cras et tempus turpis. Pellentesque eleifend elit porttitor consectetur varius. Fusce nec nisi felis. Nunc ut orci at lectus rutrum ullamcorper."

// Make your program count the number of words in the string.
function wordCount(loreIpsum) { 
  return loreIpsum.split(" ").length;
}
console.log(wordCount(loreIpsum));

// Make your program count the number of times the Latin word et appears.
function latinCount(loreIpsum) { 
  return loreIpsum.split("Latin").length;
}
console.log(latinCount(loreIpsum)-1);