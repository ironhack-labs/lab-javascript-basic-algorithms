// Iteration 1: Names and Input
/*1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY". */

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Maria";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
/* 2.1. Depending on which name is longer, print:*/
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
/* 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N". */
let hacker3 = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker3 += hacker1[i].toUpperCase() + " ";
}
console.log(hacker3);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:

/*The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/*Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut molestie ligula, eget posuere leo. Integer arcu dui, luctus id ipsum nec, tristique dictum odio. Aenean volutpat risus id felis consequat porttitor. Aliquam imperdiet tellus vel nunc placerat fringilla. In ut justo fringilla, luctus elit laoreet, dignissim lorem. Aliquam erat volutpat. Curabitur sed tellus egestas, consequat sem in, rhoncus justo. Quisque vel ligula nibh. Nulla facilisi. Maecenas aliquam ultricies dui. Sed bibendum lectus nibh, ut euismod diam volutpat ut. Donec dictum molestie enim et cursus. Donec justo ligula, feugiat sit amet maximus tempor, convallis et sem. Phasellus quis nisi laoreet, ultricies purus vitae, gravida metus. Cras nec pretium justo. Fusce lacus metus, luctus quis justo eu, porttitor dignissim mauris. Duis mattis vitae purus vitae gravida. Ut porttitor lectus a quam euismod, a viverra ipsum volutpat. Nunc mi ex, ornare in nisl sed, vulputate faucibus sapien. Morbi et nunc eleifend, convallis ante et, lacinia erat. Suspendisse pharetra a est at luctus. Maecenas luctus ornare imperdiet. Nunc posuere quis sem id sodales. Vestibulum sodales fermentum purus, et suscipit libero malesuada quis. Duis quis nibh et odio accumsan cursus. Suspendisse porta diam orci, id tempus mi ultrices ut. Aliquam in tempor purus. Aliquam at nulla in leo accumsan tristique eleifend id diam. Quisque neque nisl, sodales venenatis cursus vitae, dictum non magna. Nam in ipsum ac odio fringilla tincidunt. Sed eu est quis quam aliquam suscipit vel nec nibh. Pellentesque tincidunt nisl in quam elementum pharetra. Curabitur sit amet neque urna. Integer nec lorem nisl. Phasellus eu quam ac ante dapibus dignissim non vitae magna. Mauris eget eros lectus. Vestibulum placerat arcu quis risus dictum interdum. Cras et sollicitudin odio. Cras commodo porta ex. Vivamus lectus risus, gravida vitae malesuada ut, ultricies id lectus. Maecenas rhoncus nisi bibendum, molestie velit eu, luctus odio.";

let words = longText.split(" ");

console.log(words.length);

let count = 0;
for (let i=0; i<words.length; i++){
  if (words[i] === "et"){
    count++;
  }
}

console.log(count);

