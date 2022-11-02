// Iteration 1

let hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Armando";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters `
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3.1

let printOut = "";

for (let i of hacker1) {
  printOut += i.toUpperCase() + " ";
}

console.log(printOut);

// Iteration 3.2
let reverseName = "";

for (let x = hacker2.length - 1; x >= 0; x--) {
  reverseName += hacker2[x];
}

console.log(reverseName);

// Iteration 3.3

if (hacker2.localeCompare(hacker1) > 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.localeCompare(hacker1) < 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// BONUS

let myParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate lacus sit amet fermentum fermentum. Suspendisse non magna in nisl laoreet imperdiet a mattis leo. Quisque id sodales felis. Phasellus id lobortis dui. Vestibulum in ante vitae diam tempus pulvinar viverra eu ex. Pellentesque porttitor commodo egestas. Nam gravida non nisl at lobortis. Fusce tempor pulvinar metus, a ornare metus efficitur a. Mauris eget sem nibh. Maecenas augue tortor, elementum non quam et, ullamcorper consectetur diam.

Aliquam ullamcorper magna at tincidunt dapibus. Nam gravida orci non sapien pretium lacinia. Morbi maximus purus vitae lacus porttitor congue. Donec luctus consequat metus et posuere. Sed dictum est at nunc vestibulum, eu sodales nibh malesuada. Etiam faucibus imperdiet maximus. Sed tristique pharetra lacus et placerat. Vestibulum sodales lacinia lectus. Aenean viverra hendrerit odio, in pulvinar elit sagittis eu. Integer sed convallis nibh, vel pellentesque felis.

Nunc non lectus eu felis accumsan eleifend quis vitae nisl. Phasellus felis purus, dapibus eget erat eget, feugiat venenatis massa. Etiam odio nunc, vulputate malesuada lectus eu, mollis tristique arcu. Cras luctus est at dui lacinia, nec fringilla urna imperdiet. Phasellus commodo mollis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut molestie mauris leo, in rutrum tortor varius eu. Phasellus sed tortor vel lorem bibendum fermentum ac in turpis. Duis ullamcorper ipsum id ante aliquam, ut consectetur urna feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at libero ac est pretium vulputate. Nunc a metus id sapien lacinia cursus. Fusce sit amet ligula in sapien posuere aliquam et molestie purus.`;

let numOfWords = myParagraphs.split(" ").length;

console.log(`Number of Words: ${numOfWords}`);
console.log(myParagraphs.indexOf("et"));

// Bonus 2

let myString = "Something else".replace(" ", "").toLowerCase();
let myStringReversed = "";

for (let i = myString.length - 1; i >= 0; i--) {
  myStringReversed += myString[i];
}

console.log(`is it a Palindrome?  ${myString === myStringReversed}`);
