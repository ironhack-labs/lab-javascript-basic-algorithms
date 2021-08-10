// Iteration 1: Names and Input

let hacker1 = "Edu";
let hacker2 = "Pep";

// console.log(`The navigator's name is ${hacker2}`)

// console.log(hacker1.length)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver ${hacker1} has the longest name,  it has  ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The driver ${hacker2} has the longest name,  it has  ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, has  ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

//3.1

let hacker1Upper = hacker1.toUpperCase();
// console.log(hacker1Upper)

for (let i = 0; i <= hacker1Upper.length; i++) {
  console.log(hacker1Upper[i]);
}

//3.2

for (let i = hacker1Upper.length - 1; i > -1; i--) {
  console.log(hacker1Upper[i]);
}

// let hacker1Reverse = hacker1.split("").reverse()
// console.log(hacker1Reverse.join(""))

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's ${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The the navigator ${hacker2} goes first.`);
} else console.log(`What?! You both have the same name?`);

// bonus 1
let loremString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed auctor erat. Nulla hendrerit, diam in cursus gravida, purus leo fermentum est, eu auctor augue quam id enim. Praesent vitae luctus ex. Nullam fringilla tempor risus. Etiam et dolor egestas, fermentum ipsum ac, ornare nulla. Duis rhoncus mi at massa finibus porttitor. Ut nec gravida odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper velit tempus eleifend blandit. Nullam porttitor, metus aliquet ullamcorper lacinia, sapien libero blandit ipsum, ac viverra libero arcu vitae odio. Fusce ac lorem nisl. Cras scelerisque vehicula quam, sed volutpat odio vulputate vitae. Suspendisse eleifend varius eros eu imperdiet. Fusce at ipsum eu lacus vestibulum semper. Sed et neque et ligula mollis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sollicitudin mi at lorem laoreet dictum. Quisque vulputate commodo pretium. Morbi euismod ex at nisi interdum tempor. Mauris commodo lobortis fermentum. Vivamus pretium lacinia sem, in gravida tellus molestie et. Nulla non turpis mauris. Morbi sed suscipit est. Phasellus et ligula id massa hendrerit feugiat non quis leo. Nullam vitae magna leo. Pellentesque scelerisque, nunc eget tempor sodales, ligula erat laoreet leo, et sodales mi nunc eget ipsum. Morbi purus diam, venenatis nec consectetur ac, auctor quis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris enim nisi, consequat quis finibus in, efficitur eu sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae elit ut ipsum condimentum mollis. Sed feugiat arcu placerat vehicula molestie. Nullam iaculis ultrices nunc. Donec sollicitudin nisi justo, cursus elementum mauris fermentum vitae. Nulla suscipit dui id eros suscipit, ut luctus felis commodo. Nulla eget ipsum nibh. Vestibulum posuere, quam non tincidunt cursus, ligula nisi consequat nunc, quis faucibus odio erat sit amet felis. Vestibulum pellentesque ac est et tristique. Praesent dapibus tortor sed porttitor suscipit. Vestibulum tincidunt euismod vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;";

console.log(loremString.split(" ").length);

//bonus 2

let phraseToCheck = "step on no pets";

console.log(phraseToCheck.split(""));

console.log(phraseToCheck.split("").reverse());

if (phraseToCheck.split("") == phraseToCheck.split("").reverse()) {
}
