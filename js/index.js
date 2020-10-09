// Iteration 1: Names and Input
const hacker1 = `Peter`;
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = `Jane`;
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/
console.log(hacker1.split(``).join(` `).toUpperCase());


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker2.split(``).reverse().join(``))

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */


if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely`);
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
} else {
  console.log(`What?! You both have the same name?`)
}


//Bonus 1: word count

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

let wordCount = 0;
const textArray = text.split(" ")

for (i = 0; i < textArray.length; i++) {
  wordCount++;
} console.log(wordCount)


