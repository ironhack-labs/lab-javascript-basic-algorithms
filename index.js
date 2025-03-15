// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops
const hacker1 = "pouria";
console.log(`the drivers name is ${hacker1}`);
const hacker2 = "viktoria";
console.log(`the navigator is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `wow, you both have equally long names, ${hacker1.length} character`
  );
}

const upperCasedName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCasedName);

const reversedName = hacker2.split("").reverse().join("");
console.log(reversedName);

const sameNameResults =
  hacker1 === hacker2
    ? "what?! you both have same name?"
    : "names are not the same";
console.log(sameNameResults);

const longText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. `;

const longTextLength = longText.length;
console.log(longTextLength);

let count = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.includes("et")) {
    count++;
  }
  return count;
}
let newCount = count;
console.log(newCount);

const checkPhrase = "A man, a plan, a canal, Panama";

const cleanedStr = checkPhrase.toLowerCase().replace(/[^a-z0-9]/g, "");
let isPalindrome = true;

for (let i = 0; i < cleanedStr.length / 2; i++) {
  if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${checkPhrase} is a palindrome.`);
} else {
  console.log(`${checkPhrase} is not a palindrome.`);
}
