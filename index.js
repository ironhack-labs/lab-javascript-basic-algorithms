// Iteration 1: Names and Input
const hacker1 = "Julia";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Nubia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver = hacker1.length;
console.log(driver);
let navigator = hacker2.length;
console.log(navigator);

if (driver > navigator) {
  console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (driver < navigator) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator} characters`,
  );
} else {
  console.log(`Wow, you both have equally long names, ${driver} characters!`);
}

// Iteration 3: Loops
let driverName = hacker1;
const splitName = driverName.split("").join(" ").toUpperCase();
console.log(splitName);

const reverseName = driverName.split("").reverse().join(" ").toUpperCase();
console.log(reverseName);

const travellers = ["Juliana", "Barbara", "Nubia"];
travellers.sort();
console.log(travellers);

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies molestie augue. Sed viverra turpis varius metus blandit hendrerit. Sed nec ornare tellus, vel venenatis mauris. Proin venenatis diam sit amet risus vulputate, quis semper justo pharetra. Nullam est velit, convallis sed fringilla sit amet, laoreet hendrerit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum scelerisque eleifend est, sed commodo dolor vestibulum sed. Etiam vestibulum nec dui at pharetra. Vivamus iaculis dapibus enim.

Vestibulum vel metus in sapien vulputate tincidunt eget at eros. Morbi eleifend elementum maximus. Cras pellentesque ligula ac accumsan malesuada. Nam porta, metus consectetur tempor consequat, mauris leo hendrerit elit, ac maximus augue nisl id nisi. Aliquam ultrices lacinia ante, eu eleifend nunc mollis sed. Etiam at lorem in orci condimentum facilisis id ac mi. In hac habitasse platea dictumst. Nulla sagittis dolor ut velit facilisis laoreet. Nulla facilisi. Morbi a lacus sit amet ex elementum aliquet. Duis eros nisi, eleifend sit amet cursus quis, finibus sed libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam efficitur nisl vel nisi dapibus, scelerisque laoreet metus dictum. Suspendisse potenti.

Maecenas auctor commodo massa, ac tristique mauris. Donec gravida maximus mauris eget accumsan. Aliquam eros mauris, tristique in augue id, pretium vulputate mi. Nulla a nisi sed tellus aliquet imperdiet quis eget neque. Proin scelerisque, sapien a imperdiet tempus, odio leo semper turpis, scelerisque sollicitudin metus erat a risus. Nulla facilisi. Morbi rutrum aliquam magna, non ultricies urna. In hac habitasse platea dictumst. Phasellus semper justo et suscipit dictum. Fusce et nunc id nisi pretium lobortis.`;

let words = longText.split(" ");
let wordCount = words.length;
console.log(wordCount);

let myWord = "et";
let etCount = longText.split(myWord).length;
console.log(etCount);

// Bonus 2

const travel = ["Juliana", "Barbara"];
travel.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

console.log(travel);
