// Iteration 1: Names and Input

let hacker1 = "Nora";
//console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jason";
//console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

let upperCaseName = "";
for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseName);

console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// Iteration 3: Loops

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let loremEpsom = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut quam vel metus tristique volutpat. Donec tristique dignissim felis in mollis. In tempus leo eget ullamcorper porttitor. Duis rhoncus lectus eget magna semper pretium. Pellentesque mattis augue turpis, id commodo odio malesuada quis. Aenean ullamcorper varius fringilla. Curabitur mi nisi, vehicula pharetra maximus ut, dignissim nec urna. Quisque dapibus tempor libero, vel sagittis mi tincidunt ut.

Curabitur eu dui id ipsum pharetra cursus. Fusce pellentesque, magna eget venenatis maximus, sapien neque aliquam tortor, eget congue tellus elit a augue. Sed tristique tempus quam ut cursus. Mauris mollis leo id elit ultricies, et consectetur ligula pretium. Mauris aliquet venenatis neque, luctus malesuada leo tempor at. Nunc accumsan convallis sapien, eget viverra felis lacinia nec. Fusce odio sapien, porttitor sed justo quis, sodales bibendum nibh.

Sed in metus vitae tortor varius viverra. Nullam eget risus dignissim mi efficitur efficitur. Duis cursus massa porta mauris placerat tincidunt. Nam non porta arcu. Vestibulum luctus venenatis dolor, nec mollis eros commodo eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec finibus tempor felis, quis rhoncus arcu tempor ut. Nunc malesuada enim et elit condimentum egestas eget sit amet tellus. Vivamus massa dui, volutpat eget lacinia sed, convallis in orci. Vivamus consequat sit amet massa eu pretium. Aliquam tempus congue dui, at luctus quam ornare sed. Quisque orci elit, vestibulum varius luctus at, imperdiet eget risus. Integer dignissim porttitor tortor. Curabitur ultricies sapien id maximus volutpat.`;

let spaceCount = 1;
for (let i = 0; i < loremEpsom.length; i++) {
  if (loremEpsom[i] === " " || loremEpsom[i] === "\n") {
    spaceCount++;
  }
}
console.log(spaceCount);

let etFinder = 0;
let etCount = loremEpsom.split(" ");
for (let i = 0; i < etCount.length; i++) {
  if (etCount[i] === "et" || etCount[i] === "Et") {
    etFinder++;
    console.log(etCount[i]);
  }
}

console.log(etFinder);
