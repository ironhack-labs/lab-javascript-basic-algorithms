// Iteration 1: Names and Input
const hacker1 = "John";

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Jane";

console.log(`The driver's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, both ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

const nameWithCapitals = hacker1.toUpperCase();

console.log(nameWithCapitals);

let hackerReversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  hackerReversed += hacker1[i];
}
console.log(hackerReversed);

const orderName = hacker1.localeCompare(hacker2);

if (orderName === -1) {
  console.log("The driver's name goes first.");
} else if (orderName === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (orderName === 0) {
  console.log("What?! You both have the same name?");
}

let longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
`;

console.log(longText.split(" ").length);
console.log(longText.split(" et ").length - 1);

let phraseToCheck = `We can save the world
                    I cannot believe that
                    The world is doomed`;

let reversedPhrase = phraseToCheck.split("").reverse().join("");
console.log(reversedPhrase);
