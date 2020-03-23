//1: Names and Input

const hacker1 = "avtandil";
console.log(`the driver's name is ${hacker1}`);
const hacker2 = "daniela";
console.log(`the navigator's name is ${hacker2}`);
//2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `it seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let str = "";
for (i = 0; i < hacker1.length; i++) {
  str = str + " " + hacker1[i].toUpperCase();
}
console.log(str);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
hacker2.split("");
console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);
//3.3 Depending on the lexicographic order of the strings, print

if (hacker1 < hacker2) {
  console.log(`The ${hacker1} goes first`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
//Bonus1

let text =
  " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
 text = text.split(" ").length;
 console.log('The text has: ' + text + ' words')

