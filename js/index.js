// Iteration 1: Names and Input
let hacker1 = "Marcela";
let hacker2 = "Alba";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

const hacker1 = "Marcela";
const hacker2 = "Alba";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};
// Iteration 3: Loops

let driver = hacker1.split("");
//console.log(driver);

for(i = 0; i < driver.length; i++){
  driver[i] = driver[i].toUpperCase();
}
console.log(driver.join(" "));

let navigator = hacker2.split("");
//console.log(navigator);
console.log(navigator.reverse().join(""))

let lexicon = hacker1.localeCompare(hacker2);
//console.log(lexicon);


if(lexicon < 0){
  console.log(`The driver's name goes first`);
} else if (lexicon > 0){
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log ('What?! You both have the same name?');
};

//Bonus 1 

let loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur, enim eget laoreet iaculis, dolor augue pharetra enim, ac rutrum mi lacus sit amet nulla. Suspendisse imperdiet iaculis odio vestibulum blandit. Aliquam id ornare tellus, et cursus dui. Phasellus nec aliquet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis dapibus sapien. Vestibulum vestibulum quam fringilla massa pretium porta. Phasellus eget enim congue, rhoncus odio ut, tristique justo. Praesent pulvinar dui a sapien hendrerit, vitae consequat tellus bibendum. Sed feugiat leo ut ligula interdum, sed hendrerit lorem pharetra. Vivamus ullamcorper, metus eu interdum vulputate, urna ipsum fringilla lacus, vitae gravida neque urna ac odio. Nam efficitur nibh eget lectus commodo, vel vulputate sem sagittis. Integer dictum nisi odio, id hendrerit sapien accumsan sit amet. Integer mollis mauris sit amet nunc blandit posuere. Nunc tincidunt est nisl, in elementum metus tincidunt ultricies. Ut eget neque lorem. Integer nec posuere ligula, sit amet scelerisque eros. Donec quis tellus nulla. Nam sit amet eros lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget pulvinar velit. Nunc vel velit euismod, lobortis neque id, consequat metus. Pellentesque vestibulum nisi ut malesuada faucibus. Sed eu cursus velit. Fusce id sapien commodo, sagittis arcu vel, interdum dui. Aliquam laoreet at elit sit amet molestie. Nunc commodo arcu sit amet tellus dapibus, at vestibulum eros consectetur. Quisque nec nisi tincidunt risus viverra scelerisque ut tincidunt ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales arcu iaculis feugiat elementum. Proin aliquet volutpat quam, non efficitur augue ultricies a. Donec eu pellentesque arcu. Nam turpis felis, viverra sit amet purus sit amet, pulvinar auctor ante. Morbi ac justo tortor. Nunc aliquet id leo sodales pharetra."

let words = loren.toLowerCase();
words = loren.split(" ");
//console.log(words);

let wordEt = 0;

for (i = 0; i < words.length; i++){
  if (words[i] == "et" || words[i] == "et." || words[i] == "et," ){
    wordEt++;
  }
};

console.log(wordEt);


// Bonus 2

let phraseToCheck = "step on no pets";
phraseToCheckLower = phraseToCheck.toLowerCase().replace(/[\W_]/g, '');


console.log(phraseToCheckLower);

let palindromes; 
for (i = 0; i < phraseToCheckLower.length/2; i++){
  if(phraseToCheckLower[i] !== phraseToCheckLower[phraseToCheckLower.length -1 - i]){
    palindromes = "NOT a palindrome"
    break;
  } else {
    palindromes = "It is a palindrome!";
  }
};

console.log(palindromes);
