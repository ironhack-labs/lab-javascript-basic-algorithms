// Iteration 1: Names and Input
const hacker1 = "José";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Santa";
console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals
const hasLongerName = () => {
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
};

hasLongerName();

// Iteration 3: Loops

console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker2.split("").reverse().join(" "));

// Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

const sortHackers = () => {
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
};

sortHackers();

// Bonus 1
const longText =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const wordCount = longText.split(" ").length;
console.log(wordCount);

const etCount = longText.split("et").length - 1;
console.log(etCount);

//bonus 2

const phraseToCheck = "step on no pets";

const isPalindrome = (phrase) => {
  for (let i = 0; i < phrase.length / 2; i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(phraseToCheck));

