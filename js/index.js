// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Victoria";

console.log(`"The driver's name is ${hacker1}."`);
let hacker2 = "Elsa";

console.log(`"The navigator's name is ${hacker2}."`);

// Iteration 2: Conditionals

let hacker1length = hacker1.length;
let hacker2length = hacker2.length;

if (hacker1length > hacker2length) {
  console.log(
    `The driver has the longest name, it has ${hacker1length} characters.`
  );
} else if (hacker2length > hacker1length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker2length}.`);
}

// Iteration 3: Loops

let printName = "";
for (let i = 0; i < hacker1length; i++) {
  printName += hacker1[i].toUpperCase();
  if (i !== hacker1length - 1) {
    printName += " ";
  }
}
console.log(printName);

let printName2 = "";
for (let i = hacker2length - 1; i >= 0; i--) {
  printName2 += hacker2[i];
}
console.log(printName2);

if (hacker2.localeCompare(hacker1) > 0) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) < 0) {
  console.log("Yo, the navigator goes firs defintely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus.1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ante ligula, porttitor rutrum sem euismod in. Cras non ultrices nisi, quis rhoncus mi. Curabitur imperdiet ligula non feugiat lobortis. Pellentesque fringilla, nibh sed maximus viverra, dui odio rutrum urna, vitae hendrerit nulla velit vitae est. Ut sit amet leo non sem luctus rutrum. Fusce sagittis lectus quis diam consequat dignissim. In quis dapibus lectus. Suspendisse potenti. Donec tempor placerat diam, sed fringilla nulla scelerisque id. Nulla blandit neque nibh. Suspendisse sit amet lacus lobortis erat cursus lobortis. Etiam sit amet ante pellentesque sapien aliquam ultricies nec id urna. Nunc feugiat placerat est, eleifend elementum tellus semper sit amet. Ut nec dictum metus, eget elementum nulla. Vestibulum eget nulla id massa tincidunt interdum at eget mauris. Duis lacinia urna nisl, non malesuada nisi condimentum sed. Etiam non vulputate odio. Nunc iaculis eros justo. Aliquam mollis nibh sed sagittis fermentum. Pellentesque cursus quis nulla eu consectetur. Maecenas elementum blandit faucibus. Mauris tincidunt vulputate consectetur. Nullam tincidunt, elit at bibendum egestas, nunc elit sodales nibh, scelerisque condimentum lorem risus ut arcu. In sit amet commodo sem. Pellentesque eget lacinia leo. Sed sagittis rutrum odio in finibus. Nulla ultrices, elit eleifend convallis tincidunt, tellus mauris auctor augue, et placerat sem purus sed est. Aenean sit amet mi et elit consectetur congue. Praesent facilisis convallis lacinia. Aliquam erat volutpat. Nulla et turpis viverra, euismod risus eu, dapibus felis. Pellentesque neque libero, elementum ut dapibus a, porta sit amet mi. Aliquam quis malesuada eros, a efficitur justo. Mauris nec mauris condimentum, rutrum velit in, consequat lorem. Integer varius nunc in metus molestie rutrum. Nullam rutrum magna nec est ultricies, non blandit erat placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`;

let splitted = loremIpsum.split(" ");

let arrayCounter = splitted.length;

console.log(arrayCounter);
console.log("'et' appears " + loremIpsum.match(/et/g).length + " times.");

//Bonus.2

let phraseToCheck = "phrase to check";
phraseToCheck = phraseToCheck.replace(/ /g, "");

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheck[i];
}
