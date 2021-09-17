// Iteration 1: Names and Input
const driver = "Karla";
const navigator = "Philipp";

console.log(`the driver's name is ${driver}.`);
console.log(`the navigator's name is ${navigator}.`);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `The navigator has the longest name, it has ${navigator.length} characters`
  );
} else {
  console.log(`The both are equally long names, ${driver.length} characters`);
}

// Iteration 3: Loops

let driverInUpperCase = "";
let navigatorInReverse = "";

for (let i = 0; i < driver.length; i++) {
  driverInUpperCase += driver[i].toUpperCase() + " ";
}
console.log(driverInUpperCase);

for (let i = navigator.length - 1; i >= 0; i--) {
  navigatorInReverse += navigator[i];
}
console.log(navigatorInReverse);

if (driver > navigator) {
  console.log("The driver's name goes first.");
} else if (driver < navigator) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus
const paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus risus, auctor et lacus ut, mollis semper risus. Nulla ullamcorper bibendum tellus. Praesent pulvinar nulla enim, at tempor lorem pretium eget. Aliquam erat volutpat. In maximus mauris vel tortor accumsan, ac euismod orci volutpat. Donec ornare, nibh in pulvinar tristique, turpis odio pellentesque tellus, eget bibendum nisl dui vel ligula. Praesent finibus arcu vel neque pellentesque viverra. Duis felis libero, tincidunt ac felis sed, accumsan porttitor neque. Ut sed egestas lacus. Etiam at molestie elit, eget finibus ex. Nulla et sapien nunc, iaculis sed varius id, pulvinar id nisi. Cras faucibus, risus non finibus suscipit, nisi sem vehicula arcu, sed aliquam sem nisi non velit. Integer pretium diam leo, at aliquam nibh lacinia quis. Sed sodales porta tellus nec finibus. Cras dictum nisl arcu, non consequat nisl vulputate in. Vestibulum arcu nisl, congue rutrum ornare quis, blandit euismod ante. Duis sed condimentum arcu. Aenean varius hendrerit enim vel finibus. Nulla eget blandit turpis. Donec lorem ex, iaculis dictum est a, euismod tempus urna. Suspendisse potenti. Fusce at justo rhoncus, dapibus lorem et, sollicitudin neque. Praesent condimentum viverra tincidunt. Sed tristique ipsum aliquam odio ultrices tincidunt. Nam dignissim nunc ut consequat mollis. Curabitur gravida ante vitae urna rhoncus, ut tempus quam tincidunt. Pellentesque convallis neque eget lectus accumsan ornare. Quisque lacinia bibendum malesuada. Duis nec est non est tempus vehicula. Pellentesque in pulvinar dolor. Donec luctus, leo at lacinia vehicula, lorem mauris vestibulum libero, et pellentesque dolor tortor non mauris.";

let wordCount = 0;
let etCount = 0;
for (i = 0; i <= paragraphs.length; i++) {
  let isSpaceBetweenWords = paragraphs[i] === " ";
  if (isSpaceBetweenWords) {
    wordCount++;
  }
  const isWordEt =
    paragraphs[i] === "e" &&
    paragraphs[i + 1] === "t" &&
    (paragraphs[i - 1] === " " || paragraphs[i - 1] === ".") &&
    (paragraphs[i + 2] === " " || paragraphs[i + 2] === ".");
  if (isWordEt) {
    etCount++;
  }
}
//add +1 to count for the last word
wordCount++;

console.log("Paragraph has " + wordCount + " words.");
console.log("The Latin word 'et' occurs " + etCount + " times.");
