// Iteration 1: Names and Input

// 1
const hacker1 = "Julia";
console.log("The driver's name is " + hacker1) //Driver variable declared
const hacker2 = "Fernando";
console.log("The navigator's name is " + hacker2) //Navigator variable declared

// Iteration 2: Conditionals
const hacker1Length = hacker1.length; // Driver's name length is printed
const hacker2Length = hacker2.length; // Navigator's's name length is printed


// Conditionals to determine which name is longer
if (hacker1.length > hacker2.length){ // a bigger than b
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
}

else if (hacker1.length < hacker2.length){ // a smaller than b
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
}

else { // last option is if they are the same, therefore no need to define it.
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}


// Iteration 3: Loops
// 3.1
let spacedHacker1 = ""; // declare variable as an empty string

// loop through driver's name (Julia) 
for (let i = 0; i <hacker1.length; i++){
  spacedHacker1 += hacker1[i].toUpperCase()+ " "; // take each character and uppercase it and add a space after
}
console.log(spacedHacker1);

// 3.2
let reversedHacker2 = ""; // declare variable as an empty string

for (let i = hacker2.length -1; i >= 0 ; i--){  // reverse loop through the navigator's name (Fernando)
    reversedHacker2 += hacker2[i]; // take each charachter and add it to the next one
}
console.log(reversedHacker2);

// 3.3

// Compare the names. JavaScript compares strings lexicographically, meaning it compares their "alphabetical order" based on the character codes. 
// If one string comes before the other alphabetically, it will have a lower "weight" (value). The string with the lower "weight" comes first.
if(hacker1 < hacker2){ 
console.log("The driver's name goes first.");
}

else if(hacker1 > hacker2){
console.log("Yo, the navigator goes first, definitely.");
}

else if(hacker1 === hacker2){
console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nibh vitae ipsum cursus auctor nec et elit. Sed ut nisl erat. Mauris felis ipsum, eleifend non iaculis quis, rutrum at metus. Nunc viverra ultrices risus vel fermentum. Maecenas blandit volutpat lorem non fringilla. Pellentesque eu sagittis nibh. Morbi blandit urna quis libero tristique, dapibus sodales mauris suscipit. Morbi consectetur arcu eget risus semper euismod. Maecenas risus augue, elementum at tellus a, feugiat commodo sem. Aenean nisi nulla, aliquet sed eleifend vitae, vestibulum vel purus. Pellentesque orci urna, eleifend eget fermentum quis, rhoncus aliquet neque. Morbi elementum mollis est, a varius justo congue eu. Suspendisse potenti. Vestibulum quis libero dapibus mauris consequat egestas id sed felis. Vivamus consectetur commodo posuere. In eu tristique arcu.

Aliquam consectetur sagittis lectus a laoreet. Vivamus ullamcorper dolor id turpis ultrices, non interdum massa commodo. Pellentesque metus erat, vulputate sit amet nunc sit amet, rhoncus pharetra massa. Morbi commodo ultrices erat in rhoncus. Aliquam erat volutpat. Ut eget risus et est sagittis placerat. Duis lacinia massa id nunc euismod pretium. Donec sapien arcu, porta in feugiat sit amet, vulputate nec dui. In rhoncus mollis volutpat. Nullam gravida orci a quam bibendum, at pretium arcu sagittis. Vestibulum gravida purus id tortor pharetra, et hendrerit lorem congue.

Donec imperdiet nisl vel dolor commodo, ac mattis turpis blandit. Nullam mattis pulvinar leo et efficitur. Duis porta justo diam, tempor euismod eros rutrum ut. Aliquam aliquet cursus dapibus. Pellentesque vestibulum erat ut nibh vulputate lobortis. Proin sed mattis enim. Etiam in enim posuere diam facilisis ullamcorper. Etiam porttitor ultrices ligula non lobortis. Suspendisse potenti. Nullam condimentum erat nec viverra viverra. Phasellus consequat nunc id lorem sollicitudin, vitae faucibus ligula luctus. Donec lorem risus, convallis in nisl vitae, euismod vestibulum nulla. Vestibulum ornare et neque sit amet consequat. Nam vitae pharetra erat, vitae pulvinar quam. Fusce vel nisl viverra mauris imperdiet maximus ullamcorper id est. Donec non imperdiet odio.`

let wordCount = 1; // we start with 1 because the last word does not have a space

for (let i = 0; i < longText.length; i++) {  
  if (longText[i] == " " ) { // it identifies the word as a collection of characters that are before the space " "
          wordCount++; // adds the words to the count, which is declared with a number
         }
}
console.log(wordCount);


// Bonus 2

//We know that a palindrome is the same word but reveresed. This means that the half starting is the same as the half at the end (reveresed). We can compare the beginning and the reveresed end.
const string = "rAce Car";
let stringLowerCased = string.toLowerCase(); //Lowercase all letters so that they match

// Loop through the stringLowerCased backwards and skip spaces
let reversed = "";
for (let i = stringLowerCased.length - 1; i >= 0; i--) {
    if (stringLowerCased[i] !== " ") {  // Skip spaces in the reversed string
        reversed += stringLowerCased[i];
    }
}

// Loop through the stringLowerCased forward, to be able to compare the word, and skip spaces
let noSpaceString = "";
for (let i = 0; i < stringLowerCased.length; i++) {
    if (stringLowerCased[i] !== " ") {  // Skip spaces in the original string too
        noSpaceString += stringLowerCased[i];
    }
}

if (noSpaceString === reversed) {
    console.log(true);  // It's a palindrome
} else {
    console.log(false);  // It's not a palindrome
}


// console.log(stringLowerCased) // string lowecased
// console.log(reversed) // string lowecased reversed without spaces
// console.log(noSpaceString) //string lowecased without spaces
