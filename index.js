// Iteration 1: Names and Input

const hacker1 = "Renan";
const hacker2 = "Andreia";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver ${hacker1} has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The driver ${hacker2} has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let hackerSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  hackerSpace = hackerSpace + `${hacker1[i].toUpperCase()} `;
}
console.log(hackerSpace);

let reverseHacker = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker = reverseHacker + `${hacker2[i]}`;
}
console.log(reverseHacker);

if (hacker1 === hacker2) {
  console.log("What, you both have the same name?");
}
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`${hacker1}'s goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log(`Yo, ${hacker2} goes first, definitely.`);
    break;
  }
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium nunc ac purus egestas posuere. Ut at sapien ac mauris iaculis elementum. Ut ornare tincidunt augue, eu efficitur orci vestibulum in. Proin nec leo faucibus, porttitor dui at, euismod arcu. Integer fringilla ut justo vitae interdum. Donec semper aliquam consequat. Phasellus tempor fringilla sodales. Pellentesque id tempus nisl. Praesent orci enim, imperdiet sed justo et, aliquam sollicitudin tortor. Etiam ut faucibus orci. Curabitur et nulla feugiat nibh efficitur viverra vitae eget diam. In consectetur feugiat nulla, sed semper mi placerat eu. Ut rutrum sodales est nec viverra. Nunc in egestas dolor. Ut dictum non diam in cursus. Nullam at ex eleifend, vulputate leo eleifend, euismod orci. Donec sed tempor odio. Cras id tellus nunc. Suspendisse id elit id risus tincidunt tempor quis vel libero. Mauris vitae arcu ac ante eleifend porttitor quis sit amet lacus. Proin sed tellus nibh. In ac lectus nunc. Proin nec tincidunt tortor. Suspendisse volutpat velit a felis posuere feugiat. Sed vestibulum fringilla nunc eget fringilla. Quisque in cursus tellus. Aliquam nec nulla odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate nisi nunc, ut gravida diam gravida et. Nullam feugiat arcu sed enim imperdiet ultrices. Maecenas congue nibh sed nisl semper consequat. Cras faucibus elementum quam in tempus. Integer a neque eu quam accumsan lobortis. Nulla sit amet dolor ac tellus volutpat tincidunt.";

function WordCount(longText) {
    return longText.split(" ").length;
}
console.log(WordCount(longText));

let count = 0;
for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText [i + 1];
    if (twoChars === "et") {
        count++;
    }
console.log("count: ", count);
}