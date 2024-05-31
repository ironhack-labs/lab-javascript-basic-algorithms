// Iteration 1: Names and Input
let hacker1 = "Lee";
let hacker2 = "Mikko";
console.log(`The driver’s name is ${hacker1}`);
console.log(`The driver’s name is ${hacker2}`);
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
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);
let navigatorName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorName += hacker2[j];
}
console.log(navigatorName);

if (hacker1 < hacker2) {
    console.log("The driver’s name goes first.")
}
else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue ut leo vitae faucibus. Vivamus felis enim, ullamcorper quis lorem at, malesuada placerat leo. Aenean volutpat ipsum urna, pharetra sodales diam rhoncus at. Sed volutpat libero non est bibendum eleifend. Morbi felis lectus, tincidunt vitae tristique eget, tempor non dolor. Vestibulum volutpat pulvinar ultricies. Cras quam mi, elementum et velit a, euismod varius orci. Ut fermentum odio neque, consequat placerat massa commodo lobortis.

Nunc pretium risus tempor neque pharetra, nec rhoncus purus laoreet. Proin eros nibh, euismod at finibus quis, ultrices in est. Nulla sed maximus purus. Cras vulputate vel eros quis mollis. Vivamus et hendrerit urna, sed sollicitudin leo. Sed tempor, eros at feugiat accumsan, quam tortor condimentum diam, sed egestas ipsum neque vitae leo. Praesent fermentum lectus dolor, a congue neque maximus eget. Pellentesque elementum leo commodo mi molestie posuere. Sed ornare ex et lectus suscipit vestibulum. Suspendisse neque mi, sollicitudin at ultrices a, sollicitudin ac augue. Phasellus sed ipsum maximus nulla pellentesque porta. Nam pellentesque purus vel elit eleifend mollis. Vestibulum cursus mollis ipsum et suscipit. Morbi ut blandit sem, ut semper mi. Fusce tincidunt est urna, non lobortis lorem pulvinar nec.

Donec fringilla nisi vel ligula eleifend eleifend. Donec efficitur tellus dapibus enim commodo facilisis. Mauris neque nisl, accumsan sit amet erat id, consequat fermentum magna. Mauris porta sit amet lacus ac imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam at pellentesque nunc. Donec sed eros hendrerit, aliquam ante ut, euismod tellus. Sed finibus metus at laoreet venenatis. Nulla pulvinar dui eu nisl semper egestas. Phasellus posuere sodales eros sit amet ullamcorper. Suspendisse porta ligula felis, non cursus lorem ornare sit amet. Integer id placerat dui.

`;
let k = 0;
let wordCount = 0;
let latinWordCount = 0;
let isItAWord = "";
let lowerCaseText = longText.toLowerCase();
for (let k = 0; k < lowerCaseText.length; k++) {
  if (lowerCaseText[k] !== "\n" || lowerCaseText[k] !== "\r") {
    isItAWord += lowerCaseText[k];
    if (
      lowerCaseText[k] === " " ||
      lowerCaseText[k] === lowerCaseText.slice(-1)
    ) {
      wordCount++;
      if (isItAWord === "et") {
        latinWordCount++;
      }
      isItAWord = "";
    }
  }
}
console.log(
  `The string inside longText variable has ${wordCount} words and the Latin word 'et' appears in the string ${latinWordCount} times.`
);