// Iteration 1: Names and Input
console.log("--------ITERATION 01-----------");
console.log("-------------------");
let hacker1;
let hacker2;
hacker1 = "Luffy";
hacker2 = "Nami";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

console.log("-------------------");
console.log("-------------------");



// Iteration 2: Conditionals
console.log("--------ITERATION 02-----------");
console.log("-------------------");
if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    );
  }
  console.log("-------------------");
  console.log("-------------------");


  hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    ) 
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    ) 
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    ); 
console.log("-------------------");
console.log("-------------------");

// Iteration 3: Loops
console.log("--------ITERATION 03-----------");
console.log("-------------------");

let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {
  reservedName += hacker1[i].toUpperCase() + " ";
}
console.log("Using a for loop");
console.log(reservedName);


console.log("-------------------");
console.log("-------------------");


let reverseNameForOf = ""; 
for (const letter of hacker2.split("").reverse()) {
  reverseNameForOf += letter; 
}
console.log(reverseNameForOf);


console.log("-------------------");
console.log("-------------------");



if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first."); 
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}



console.log("-------------------");
console.log("-------------------");

//bonus1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam vulputate. Enim sed faucibus turpis in eu. Eget nulla facilisi etiam dignissim diam. Dignissim suspendisse in est ante in nibh. Diam in arcu cursus euismod quis. Erat velit scelerisque in dictum non consectetur. Sagittis id consectetur purus ut. Ut venenatis tellus in metus vulputate eu scelerisque. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Gravida quis blandit turpis cursus. Velit scelerisque in dictum non. Erat imperdiet sed euismod nisi porta. Semper feugiat nibh sed pulvinar proin gravida. Quis eleifend quam adipiscing vitae proin. In hac habitasse platea dictumst quisque sagittis purus. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Vitae auctor eu augue ut lectus arcu. Quis eleifend quam adipiscing vitae proin sagittis nisl. Quam pellentesque nec nam aliquam. Congue nisi vitae suscipit tellus mauris. Nec dui nunc mattis enim ut tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eu augue ut lectus arcu bibendum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Duis tristique sollicitudin nibh sit amet. Amet facilisis magna etiam tempor orci eu lobortis. Tristique senectus et netus et malesuada fames. Dignissim convallis aenean et tortor at risus. Sed risus ultricies tristique nulla aliquet. Est ultricies integer quis auctor elit sed vulputate. Convallis posuere morbi leo urna molestie at. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Id donec ultrices tincidunt arcu non. Ut consequat semper viverra nam libero justo. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Vel facilisis volutpat est velit egestas. Porttitor rhoncus dolor purus non enim praesent. Aliquet enim tortor at auctor. Ultrices gravida dictum fusce ut placerat orci. Fames ac turpis egestas maecenas pharetra. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Integer malesuada nunc vel risus. Amet nisl purus in mollis nunc.";

const longTextWordArr = longText.split(" ");

let wordCount = 0;
let etCount = 0;

wordCount = longTextWordArr.length;

for (let i = 0; i < longTextWordArr.length; i++) {
  if (longTextWordArr[i] === "et") {
    etCount++;
  }
}

console.log(wordCount);
console.log(etCount);





console.log("-------------------");
console.log("-------------------");

//bonus2

function isPalindrome(str) {

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
 
  return cleanStr === cleanStr.split('').reverse().join('');
}

const palindromes = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon"
];


palindromes.forEach(phrase => {
  console.log(`Is "${phrase}" a palindrome?`, isPalindrome(phrase));
});

