// Iteration 1: Names and Input

const hacker1 = "Marie";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Max";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  } else if (hacker1.length === hacker2.length && hacker1[i] === hacker2[i]) {
    console.log(`What?! You both have the same name?`);
  }
}

// Bonus 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquam nunc, vitae aliquam nunc nisl vitae nunc.";
const words = longText.split(" ");
console.log(words.length);

let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("et")) {
    count++;
  }
}

console.log(count);

// Bonus 2

function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (!isAlphabet(str[start])) {
      start++;
      continue;
    }
    if (!isAlphabet(str[end])) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/**
 * 
 * "A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
 * 
 * ***/

console.log(isPalindrome("race car"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("marie"));
