// Iteration 1: Names and Input
let hacker1 ="Tim"
console.log("The driver's name is " + hacker1);

let hacker2 = "Lari"
console.log("The navigator's name is " +  hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
//3.1
const str= hacker1;
let spacedName = " ";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}

console.log(spacedName);



//3.2

let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);


//3.3
let driver = hacker1
let navigator = hacker2
if (driver < navigator) {
  console.log ("The driver's name goes first.");
} else if (driver > navigator) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


//bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.

Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. 
Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.

Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. 
Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. 
Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.`;
const wordCount = longText.split(/\s+/).filter(word => word.trim() !== "").length;
console.log("Number of words:", wordCount);

const etCount = (longText.match(/\bet\b/g) || []).length;
console.log("Occurrences of 'et':", etCount);

console.log("Number of words:", wordCount);
console.log("Occurrences of 'et':", etCount);

//bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";


let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        cleaned += char;
    }
}


let isPalindrome = true;
for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It's a palindrome!");
} else {
    console.log("It's not a palindrome.");
}