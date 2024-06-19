// Iteration 1: Names and Input

const hacker1 = "Senanu";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Arsen";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function longerName(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longer name, he has ${hacker1.length} characters.`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longer name, he has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters and ${hacker2.length} characters.`
    );
  }
}

console.log(`${longerName(hacker1, hacker2)}`);

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

const splittedString = hacker1.split("");
const capitalAlphabets = splittedString.map((char) => char.toUpperCase());

console.log(capitalAlphabets);

function reverseString(hacker2) {
  const strRev = hacker2.split("").reverse().join("");
  console.log(strRev);
}

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`${hacker1} comes before ${hacker2} in lexicographic order.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`${hacker2} comes before ${hacker1} in lexicographic order.`);
} else {
  console.log(`${hacker1} and ${hacker2} are equal in lexicographic order.`);
}

// Bonus Time!
// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis risus, 
                    sollicitudin et ex fringilla, fermentum pretium libero. Vestibulum eget imperdiet risus. 
                    Aenean ac tortor diam. Sed eu aliquam ante. Vivamus faucibus eleifend libero, at porta elit 
                    condimentum id. In luctus sem sapien, ac gravida nisl dapibus sed. Mauris sit amet tempor orci, 
                    quis tempor velit. Nunc tristique ut ipsum vel fringilla. Ut nec erat mi.

                    Mauris finibus feugiat scelerisque. Phasellus in elementum est. Integer id neque accumsan, 
                    molestie mi id, aliquam nisi. Ut ultricies dictum tellus. Nunc feugiat sem orci, nec vehicula 
                    lorem semper sit amet. Phasellus vitae tellus et nisl gravida volutpat sit amet a ex. Integer 
                    ac augue eget mauris pharetra fermentum sit amet id lorem. Curabitur rhoncus enim enim, vel sagittis 
                    eros egestas id. Praesent sit amet augue a nisi auctor blandit ac semper nulla. Nam ligula mauris, 
                    dapibus quis porta sit amet, semper eu est. Vestibulum ante ipsum primis in faucibus orci luctus et 
                    ultrices posuere cubilia curae; Morbi non mattis nunc. Sed in sem vulputate, vulputate erat in, posuere risus.

                    Donec sodales venenatis elit pharetra maximus. Sed ultrices ante vitae vestibulum porta. Pellentesque 
                    vestibulum ex nec pharetra elementum. Integer eleifend nulla venenatis ornare faucibus. Nunc vel lacus 
                    pellentesque dolor molestie accumsan placerat et sem. Suspendisse eu suscipit mauris, sed gravida enim. 
                    Praesent quam velit, sollicitudin ac odio sit amet, suscipit consequat dui. Vestibulum in elementum magna. 
                    Sed imperdiet venenatis eleifend. Nullam et sem ultricies, pulvinar justo at, consectetur lectus. Vestibulum 
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam at odio felis. Vestibulum 
                    eleifend fringilla aliquet.`;

function countWords(longText) {
  const words = longText.split(/\s+/);
  return words.length;
}

console.log(
  `The total number of words in longText are ${countWords(longText)}.`
);

function countEt(longText) {
  const occurrences = longText.split("et").length - 1;
  return occurrences;
}

console.log(countEt(longText));

//Bonus section

function isPalindrome(str) {
  let len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1]) return false;
  return true;
}
