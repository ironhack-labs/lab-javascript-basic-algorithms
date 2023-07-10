
// Iteration 1: Names and Input
hacker1 = "João Borrega";
console.log(`The driver's name is ${hacker1}`)

hacker2 = "Ana Pires";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1 > hacker2) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1 < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName)

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
  }
console.log(reverseName);

// Bonus 1:

const phrases = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed porttitor mi. Proin ac interdum dui. Proin suscipit elementum odio non lacinia. Ut facilisis sit amet nisi id tempor. Fusce erat arcu, pulvinar in semper et, rhoncus et ex. Duis fringilla aliquet lorem non dapibus. Integer nulla justo, condimentum ut ex vel, lacinia ornare justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ac est sed dui rutrum tempor a et arcu.

In metus turpis, viverra eu gravida vel, aliquet in magna. Donec quis tellus leo. Nulla sagittis leo eu ante tristique aliquet. Mauris aliquet a massa at placerat. Quisque eget quam imperdiet ex aliquam porttitor vitae vel ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sagittis non dolor a condimentum. Cras nec sollicitudin mauris, ac vehicula magna. In hac habitasse platea dictumst. Etiam interdum consequat sapien.

Duis euismod odio et ullamcorper rhoncus. Donec congue in erat sed mattis. Duis aliquet at elit a elementum. Fusce ultrices nulla id purus blandit ultricies quis eget sem. Fusce aliquam consequat mollis. Nam varius lobortis eros, facilisis blandit ex semper eget. Curabitur placerat placerat fermentum. Etiam imperdiet ornare consequat. In efficitur posuere est, a mattis elit varius eget.`

// This is to make just a single string
let longText = "";

for (let i = 0; i < phrases.length; i++) {
    longText += phrases[i] + " ";
}

// This is to count the number of words in the string
let wordCount = 0;
let words = longText.split(" ");
for (let j = 0; j < words.length; j++) {
  if (words[j] !== "") {
    wordCount++;
  }
}
console.log("Number of words: " + wordCount);

// This is to count the number of times "et" appears (case-insensitive)
let etCount = 0;
for (let k = 0; k < words.length; k++) {
  if (words[k].toLowerCase() === "et") {
    etCount++;
  }
}
console.log("Number of times 'et' appears: " + etCount);



// Bonus 2

