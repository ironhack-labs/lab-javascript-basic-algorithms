// Iteration 1: Names and Input
const hacker1 = "Fred";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Patrick";
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

console.log(hacker1.toUpperCase().split("").join(" "));

const reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend ipsum ut libero tempus, in elementum diam tincidunt. 
Phasellus molestie enim eget lacus dictum scelerisque. Aliquam vel nisl vel lorem euismod posuere. Maecenas dui mauris, lobortis quis iaculis a, 
consequat in mauris. Quisque odio augue, varius nec aliquet vel, dictum sed massa. Vestibulum ante ipsum primis in faucibus orci luctus et 
ultrices posuere cubilia curae; Nam vel ex tellus.

Vivamus vestibulum volutpat augue, a tincidunt leo. Cras id hendrerit erat. Maecenas quis aliquet nunc, non vehicula metus. Nulla venenatis dictum leo, 
a volutpat quam consequat sit amet. In varius nisi vel purus rutrum vehicula. Ut non nunc ac elit dapibus euismod a non eros. Nam egestas vehicula mi 
in commodo. Mauris vel vestibulum lorem, sit amet vehicula nulla. Donec tincidunt eu arcu in mattis.

Ut pulvinar sapien non sem consequat placerat. Sed scelerisque, risus fringilla ullamcorper aliquet, risus erat sollicitudin dolor, vel pharetra orci 
lorem commodo lorem. Morbi tincidunt nunc vitae pharetra interdum. In hac habitasse platea dictumst. Phasellus justo est, semper eget velit eget, 
dictum facilisis urna. Vestibulum varius fermentum sem, et cursus enim rhoncus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

let text = longText.split(" ");
console.log(text.length);

let count = text.filter((word) => word === "et").length;
console.log(count);

// class_practice

for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
