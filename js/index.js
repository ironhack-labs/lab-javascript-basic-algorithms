console.log("I am ready!");

// Iteration1
let hacker1 = "James";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Peter";
console.log(`The navigator's name is ${hacker2}`);

// Iteration2
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration3

let newDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver.trim());

let newNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigator += hacker2[i];
}
console.log(newNavigator);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus1

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices orci at posuere venenatis. Aliquam facilisis iaculis scelerisque. Duis eget dui gravida, tincidunt ligula at, imperdiet sapien. Nunc tempus lacus at volutpat varius. Ut eget dui ut sem efficitur elementum at eget purus. Integer at leo ut dui consectetur elementum. Etiam tempus mauris sit amet lorem semper molestie. Phasellus a ipsum id urna posuere hendrerit. Morbi finibus quam eu odio volutpat volutpat sit amet placerat nisi. Quisque congue et sem vel feugiat. Donec a mauris eleifend felis dignissim tincidunt et ut justo. Curabitur nec nunc in massa luctus semper vitae et velit. In semper libero odio, at hendrerit diam sollicitudin id. Pellentesque dictum purus eget augue sagittis euismod. Proin blandit posuere elit, sit amet dapibus tortor iaculis sit amet. Nunc non elit in nisi mattis malesuada. Aliquam non semper massa. Proin velit est, consequat a nunc sit amet, laoreet condimentum tortor. Vivamus blandit, arcu in viverra cursus, nulla sapien porta quam, at convallis tortor nibh non orci. Pellentesque fringilla convallis libero, eget porttitor leo euismod at. Sed vehicula mattis ligula, non faucibus justo viverra eu. Pellentesque sollicitudin ultricies fermentum. In hac habitasse platea dictumst. Sed sit amet nulla sodales, fermentum est in, pulvinar est. Nulla tincidunt massa massa, non placerat felis vulputate eget. Maecenas arcu lacus, porta et tempor porttitor, volutpat eu elit. Pellentesque non finibus lacus, feugiat volutpat turpis. Donec luctus, libero a elementum tincidunt, velit magna viverra magna, vitae egestas lacus nisi nec mauris. Mauris varius arcu vitae sapien fermentum, ut congue tellus ultricies. Ut lacinia sem et nisi congue, eget congue est tempor. Donec ex augue, convallis in magna eget, sagittis iaculis magna.";

let numWords = paragraph.split(" ").length;
console.log(numWords);

let countOccurrences = 0;
paragraph.split(" ").forEach((word) => {
  if (word === "et") {
    countOccurrences++;
  }
});
console.log(countOccurrences);

// Bonus2

let stringToCheck = "Sugus";
stringToCheck = stringToCheck.toLowerCase();

let reversedString = stringToCheck.split("").reverse().join("");

if (stringToCheck === reversedString) {
  console.log("The word is a palindrome!");
} else {
  console.log("It is not a palindrome!");
}
