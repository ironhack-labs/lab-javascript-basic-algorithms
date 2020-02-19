// Iteration 1: Names and Input
let hacker1 = "Daniel";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bruno";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let name = '';
for (let i = 0; i < hacker1.length; i += 1) {
  name += hacker1[i].toUpperCase() + ' ';
}
console.log(name);

function reverseString(str) {
    let newStr = '';
    for (let u = 0; u < str.length; u += 1) {
        newStr += str[str.length - 1 - u];
    }
    return newStr;
}

console.log(reverseString(hacker2));


if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

//BONUS 

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra purus nulla, et iaculis arcu finibus ut. Ut est velit, efficitur vel dictum et, malesuada in est. Maecenas imperdiet metus ut diam blandit tincidunt. Cras efficitur lobortis pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum finibus elit quis dolor pharetra, ut luctus tortor porttitor. Praesent dictum imperdiet dictum. Ut sollicitudin efficitur diam, consectetur tristique libero sodales maximus. In pharetra purus sit amet justo suscipit posuere. Nullam tincidunt cursus dolor, id pellentesque massa fermentum quis. Sed nisi leo, interdum id laoreet vitae, luctus at quam. Suspendisse eget ipsum nec mi molestie egestas at eget enim. Quisque egestas ipsum nisl, eu luctus purus tempus nec. Duis ac blandit sapien. Praesent eu condimentum turpis, vitae luctus metus.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed placerat posuere nisl ac pulvinar. Nunc id ligula accumsan, finibus nisl vitae, lobortis nibh. Suspendisse potenti. Mauris nunc metus, vehicula a mi sit amet, fermentum maximus magna. Donec quis libero sit amet elit vulputate vestibulum. Duis nec tincidunt massa, quis gravida nisl. Cras suscipit velit pretium elementum laoreet. Cras imperdiet est at eleifend condimentum. Nunc tincidunt viverra dapibus. Vivamus facilisis convallis ullamcorper. Quisque ultricies, sapien viverra ultricies sagittis, velit nunc maximus sapien, ac convallis arcu dui fermentum erat. Donec fringilla lacinia ornare. Aliquam tempus luctus cursus. Mauris mattis, tellus eget venenatis varius, ligula enim eleifend turpis, eget porttitor lectus arcu et urna.

Pellentesque faucibus vitae lectus sit amet viverra. Mauris interdum mattis porta. Curabitur porttitor nisi et augue accumsan, nec tempor nibh lacinia. Suspendisse eget venenatis dui. Maecenas dapibus dapibus suscipit. Nulla ut felis lacinia eros lobortis consequat et accumsan elit. Maecenas ligula dui, sagittis sed pellentesque in, tempus dictum augue. Duis est dolor, malesuada vel arcu at, pretium dignissim quam. Morbi et ligula condimentum, interdum massa in, ornare arcu. Maecenas cursus dapibus sapien vitae vehicula. Nullam in nunc dignissim, commodo nulla ultricies, sodales lectus. Sed interdum nibh vehicula neque pellentesque, sit amet egestas nisl congue.`;

lorem = lorem.replace(/\s\s+/g, ' ');

let indexSpace = 0;
let words = 0;
let indexEt = 0;
let ets = 0;

while (indexSpace != -1) {
  indexSpace = lorem.indexOf(" ", indexSpace + 1);
  words += 1;
}
console.log(`${words} words`);

while (indexEt != -1) {
    indexEt = lorem.indexOf("et ", indexEt + 1);
    ets += 1;
}
console.log(`${ets} ets`);

// PALINDROME

let palindrome1 = "A man, a plan, a canal, Panama!";
let palindrome2 = "Amor, fdfdeessRoma";
let palindrome3 = "race car";
let palindrome4 = "step on no pets, they are cute";


let phraseToCheck = '';

function palindrome (str) {
    for (x = 0; x < str.length; x +=1) {
        if (str[x] === ' ' || str[x] === ',' || str[x] === '.' || str[x] === "'" || str[x] === "!" || str[x] === "?") {
            continue;   
        }
        phraseToCheck += str[x];
        phraseToCheck = phraseToCheck.toLowerCase();
    }
    if (phraseToCheck === reverseString(phraseToCheck)) {
        console.log(`"${str}" is a palindrome`);
    } else {
        console.log(`"${str}" is not a palindrome`);
    }
    phraseToCheck = '';
}

palindrome(palindrome1);
palindrome(palindrome2);
palindrome(palindrome3);
palindrome(palindrome4);