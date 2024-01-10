// Iteration 1: Names and Input
const hacker1 = "Deniz";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "my friend's cat"

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
  else {
    console.log(`Wow, you both have equally long names, XX characters!`)
  }

// Iteration 3: Loops
const spacedDriverName = hacker1.split('').join(' ').toUpperCase();
console.log(spacedDriverName);

const reversedNavigatorName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorName);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus
const longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas condimentum lacus, et commodo elit condimentum ut. Praesent non luctus eros. Etiam congue tincidunt orci ultricies suscipit. Nullam quam orci, maximus sed elit eget, suscipit lacinia mi. Aenean placerat nibh vel nisl consequat, aliquam dapibus sem commodo. Curabitur volutpat ornare enim a pellentesque. Suspendisse placerat consequat dui nec semper. Integer a urna vitae nibh rutrum aliquet sed id mi. Morbi hendrerit felis sit amet nunc ornare, a sagittis dui dignissim.Vivamus sodales sem mi, quis tincidunt orci congue non. Ut mattis luctus facilisis. Nulla auctor magna malesuada faucibus malesuada. Aenean vel arcu interdum, aliquet dolor vel, pretium ex. Nunc sed tempor elit. Mauris mollis ante a velit feugiat, sit amet ullamcorper ante porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non placerat sapien, ut consectetur justo. In iaculis eu nisi et rutrum. Suspendisse rutrum tristique tincidunt. Cras at congue nisl, id lacinia ante. Vivamus nulla elit, lacinia in auctor quis, eleifend quis velit. Ut laoreet at ante ac congue. In vel felis condimentum, vestibulum sem et, rhoncus arcu."

console.log(longText.length)

const count = (longText.match(/et/g) || []).length;
console.log(count);

const phraseToCheck = "A man, a plan, a canal, Panama!";
const lowerCasePhrase = phraseToCheck.toLowerCase();

let isPalindrome = true;
for (let i = 0; i < lowerCasePhrase.length / 2; i++) {
  if (lowerCasePhrase[i] !== lowerCasePhrase[lowerCasePhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`"${phraseToCheck}" is a palindrome: ${isPalindrome}`);
