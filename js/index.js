// Iteration 1: Names and Input
const hacker1 = "Nelly";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Maxime";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker2.length > hacker1.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}
// Iteration 3: Loops
let res = "";
for (const letter of hacker1) {
  res += letter.toUpperCase() + " ";
}
console.log(res);

// let res2 = "";
// for (const letter of hacker2) {
//   res2 += letter
// }
// res2=res2.split("").reverse().join("")
// console.log(res2)

// A FINIR
// for (let index = hacker2.length - 1; index >= 0; index--) {
//   console.log(hacker2[index]);
// }

// let i = 0;
// while (hacker1[i] > hacker2[i]) {
//   i++;
//   console.log(i);
// }
// for (let i = 0; i < hacker1.length; i++) {
//   for (let j = 0; j < hacker2.length; j++) {
//     if (hacker1[i] > hacker2[j]) {
//       console.log("The driver's name goes first.");
//       break;
//     } else if (hacker1[i] < hacker2[j]) {
//       console.log("Yo, the navigator goes first definitely.");
//       break;
//     } else {
//       console.log("What?! You both have the same name?");
//       break;
//     }
//   }
//   console.log(i);
// }
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

// Iteration 4
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit dolor eget convallis consectetur. Donec posuere elementum justo, quis fringilla dui ornare sit amet. Nullam nisi dolor, semper sit amet magna sed, sollicitudin tincidunt nunc. Integer porta elit id gravida semper. Phasellus porta massa dapibus ligula placerat sollicitudin. Donec et rhoncus lorem. Curabitur vestibulum venenatis est, quis tristique sapien molestie congue. Vivamus posuere sagittis lorem. Aenean vulputate nunc in risus interdum, ut sollicitudin tortor tempus. Integer vel metus nisi. Morbi cursus, nisl bibendum malesuada feugiat, risus felis auctor felis, non tincidunt odio lectus nec neque. Integer elit mauris, placerat at nulla nec, tempus pretium orci. Sed id nibh quis dui pretium volutpat sed at mauris. Vivamus venenatis eu mi nec posuere. Nullam vel velit id nisl auctor congue quis at magna. Nunc dignissim cursus ex, non fermentum dui hendrerit non. Aenean eget lobortis massa, eu sollicitudin urna. Vestibulum ut massa nec risus eleifend eleifend. Fusce vehicula pretium gravida. Proin convallis volutpat feugiat. Sed tincidunt, nulla mattis dictum iaculis, mauris enim pretium nisl, a luctus purus purus vel neque. Quisque sed malesuada mi. Donec mollis lectus in nibh pretium rhoncus. Suspendisse blandit lacus nec imperdiet pharetra. Cras facilisis nunc eu nisi fringilla, a posuere magna blandit. Duis vitae diam metus. Nullam iaculis turpis eget magna dignissim, sed mattis nisi porttitor. Maecenas ut arcu quis nunc ullamcorper vehicula. Curabitur scelerisque mi aliquet nisi sollicitudin, eu fringilla nibh condimentum. Sed a sapien gravida, blandit lectus luctus, porta quam. Pellentesque sollicitudin velit et mattis luctus. Sed laoreet dapibus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque scelerisque lobortis luctus. Praesent vel purus tempus, fringilla velit a, viverra tellus. Aliquam posuere porttitor velit et vulputate. Mauris eget egestas elit. Nullam tincidunt leo quis lectus vulputate, nec porttitor ante tincidunt. Praesent congue tortor nulla.";

function howManyLatinWords(latinSentence) {
  let withoutPonct = latinSentence.replace(",", "");
  let arrayLatin = withoutPonct.split(" ");
  let wordsCount = 0;
  let etCount = 0;
  for (i = 0; i < arrayLatin.length; i++) {
    if (arrayLatin[i] == "et") {
      wordsCount += 1;
      etCount += 1;
    } else {
      wordsCount += 1;
    }
  }
  return `The sentence has ${wordsCount} words, and among them ${etCount} "et".`;
}

console.log(howManyLatinWords(lorem));
