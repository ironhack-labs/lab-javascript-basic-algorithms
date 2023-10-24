// Iteration 1: Names and Input
const hacker1 = "Robben";
console.log (`The driver's name is ${hacker1}`);

const hacker2 = "Johnathan";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length}characters.`) 
  } else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else { console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
const lastIndex = hacker1.length - 1; 
for (let i = 0; i <= lastIndex; i++) {
  const char = hacker1[i];
    console.log(char);
}

let upperCase = "";
for (let i = 0; i <= lastIndex; i++){
  upperCase += hacker1[i].toUpperCase() + " ";
  }
console.log(upperCase);

let reverseCase = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  const char2 = hacker1[i];
  reverseCase += char2;
}
console.log(reverseCase);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }

//BONUS 1
const para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
const para2 = "Sed vel varius sapien, pellentesque fermentum velit. Aliquam cursus quam sem, quis luctus augue porttitor ut. Aenean ut ullamcorper ante. Sed sodales lorem ornare elementum commodo. Nullam eu diam sit amet mauris aliquam scelerisque. Vivamus libero sapien, aliquet ut est et, lobortis placerat mauris. Integer vulputate auctor turpis. Quisque justo dolor, posuere a lacinia eget, accumsan at ex. Integer egestas volutpat neque, non tincidunt nulla tempus tempor. Vestibulum et blandit urna, sit amet iaculis tellus."
const para3 = "Nunc sed est sed turpis blandit maximus non eu magna. Curabitur viverra ac felis non imperdiet. Curabitur congue ipsum vitae arcu auctor, at euismod massa luctus. Proin quis mattis augue. Quisque dapibus tempus dui, id condimentum felis rhoncus sit amet. Integer condimentum nibh consectetur consectetur mattis. Curabitur id nulla sit amet arcu semper feugiat. In eu iaculis quam. Pellentesque volutpat posuere risus a scelerisque."

//part 1
const longText = para1 + para2 + para3;
console.log(longText);

//part 2
for (let i = 0; i < longText.length; i++) {
  const countWords = longText.split(" ");
  console.log(countWords);//206
  }

//part 3
let lettersEt = 0;
for (let i = 0; i < longText.length -1 ; i++) {
  const substring = longText.substring(i, i + 2);
    if (substring === "et"){
    lettersEt++;
  }
  }
  console.log(lettersEt);

//BONUS 2
const phraseToCheck = "eye";
let reversedPhrase = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--){
  reversedPhrase += phraseToCheck[i];
  
  if(phraseToCheck === reversedPhrase) {
  console.log("It is a Palindrome");
} else {
  console.log("It is not a Palindrome")
}
}




