console.clear;
var driver = "yacine";
console.log("the driver name is " + driver);
var navigatore = prompt("enter Navigator Name");
console.log("the navigator's name is " + navigatore);

if (driver.length > navigatore.length) {
  console.log(
    "the driver has the longest name, it has" + driver.length + "characters"
  );
} else if (driver.length < navigatore.length) {
  console.log(
    "the navigator has the longest name, it has" +
      navigatore.length +
      "characters"
  );
} else {
  console.log(
    "wow! you both got equally long names" + navigatore.length + "carachters"
  );
}
result = "";
result2 = "";
for (let i = 0; i < driver.length; i++) {
  result = result + " " + driver[i];
  result2 = result2 + driver[driver.length - i - 1];
}
console.log(result);
console.log(result2);

lexico = driver.localeCompare(navigatore);
switch (lexico) {
  case 1:
    console.log("Navigator is first");
    break;
  case -1:
    console.log("yo the driver goes first ");
    break;
  default:
    console.log("what! you have the same name");
    break;
}

var phrase = prompt("enter your phrase");
console.log("Print " + phrase);
phraseNoSpace = phrase
  .replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .toLowerCase();
console.log(phraseNoSpace);
let i = 0;
while (
  phraseNoSpace[i] === phraseNoSpace[phraseNoSpace.length - i - 1] &&
  i < (phraseNoSpace.length - 1) / 2
) {
  i++;
}
console.log(i);
if (i === Math.floor(phraseNoSpace.length / 2)) {
  console.log("this is palindrome");
} else {
  console.log("not palindrome");
}
var loremString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet est nec lacus rhoncus luctus. Praesent eu vulputate sem. Sed ut aliquet justo. Praesent ex ligula, consequat scelerisque sodales sodales, maximus id purus. Aliquam id pellentesque est, et tempor ipsum. Duis quis neque vitae justo ultrices ultricies. Morbi vitae vulputate libero. Sed ut ornare magna, sed feugiat ligula. Phasellus interdum mi ac libero iaculis tristique Aliquam finibus ante sed augue vehicula bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Vestibulum lacus velit, sollicitudin id blandit at, pharetra pharetra tellus. Aenean rutrum, velit tincidunt placerat interdum, ex sapien lobortis eros, sit amet volutpat arcu justo sagittis magna. Proin a gravida elit. Ut id tempor leo. Nulla eu fringilla ligula, quis volutpat mauris. Maecenas sit amet maximus dui, eu sagittis ligula. Donec auctor facilisis nibh, et posuere nisl vestibulum eleifend. Vivamus libero ante, ultricies sit amet volutpat eget, dignissim a metus. Curabitur elementum, felis quis semper fermentum, est purus ullamcorper enim, vel accumsan lacus metus ac neque. In quis ipsum sodales, ullamcorper leo eget, sollicitudin tortor. Cras cursus placerat laoreet. Quisque semper vehicula tempor. Aenean ac velit urna. Cras a velit magna. Donec erat mi, mattis semper dui non, aliquet venenatis lectus. Nam tempor est in aliquet varius. Donec nec facilisis arcu. Vestibulum eget justo ligula. Fusce sollicitudin maximus quam eu feugiat. Donec dictum id metus vel tristique. Donec et sapien viverra tellus ultrices finibus. Vestibulum elementum rhoncus metus, sed hendrerit enim dapibus a.";

var wordCount = 1;
var charCount = 0;

while (charCount < loremString.length - 1) {
  if (loremString[charCount] === " ") {
    wordCount++;
  }
  charCount++;
}
console.log(wordCount);

var wordcountET = 0;
var charcountET = 0;

while (charcountET < loremString.length - 5) {
  if (loremString.substring(charcountET, charcountET + 4) === " et ") {
    wordcountET++;
  }
  charcountET++;
}
console.log(wordcountET);
