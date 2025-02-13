//Iteration 1
let hacker1 = "Shanny"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Tony"
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Iteration 3
let hacker1Formatted = ""
for (let i = 0; i < hacker1.length; i++) {
    hacker1Formatted += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Formatted);

let hacker2Reversed = ""
for (let i = hacker2.length - 1; i >= 0; i --) {
    hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

//BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non felis vitae ante sagittis ullamcorper. Nullam congue consectetur tortor, gravida mattis nisl vulputate quis. Nulla ac libero hendrerit, dictum dolor eu, laoreet nisl. Donec ut leo pretium, vehicula justo in, rutrum sapien. Sed laoreet porttitor tellus eleifend facilisis. Quisque facilisis, lectus viverra eleifend convallis, ex neque sollicitudin nibh, ut blandit est neque interdum enim. Proin iaculis id justo sit amet feugiat. Pellentesque consectetur auctor ante ut finibus. Etiam rhoncus eleifend facilisis. Nullam eleifend facilisis justo, vitae ullamcorper justo fermentum pretium. Etiam mollis tortor at quam elementum luctus. Quisque sem quam, gravida nec ullamcorper vitae, fringilla ac nunc. Curabitur ornare sapien nec mauris fringilla, eu cursus diam volutpat. Sed a ante facilisis diam sodales dapibus a sed augue. Nullam nec nisl non velit rutrum cursus. Etiam venenatis elit eu risus cursus laoreet. Nunc vitae arcu nulla. Morbi pellentesque arcu non mollis suscipit. Sed et felis et leo placerat dictum. Proin ac hendrerit lorem, bibendum consectetur diam. Aenean vitae imperdiet velit. Quisque vitae arcu mi. Aliquam molestie rhoncus eros, quis scelerisque tortor gravida eu. Ut consectetur turpis a nunc posuere, imperdiet auctor metus aliquam. Vivamus vehicula sit amet nisl blandit posuere. Etiam quam elit, blandit quis accumsan quis, tincidunt id justo. Donec ac odio nec nulla dignissim consequat a in neque. Morbi lobortis vulputate eros, nec elementum magna imperdiet ac. Praesent dolor neque, tempor in luctus id, varius et nulla. Proin lacus mauris, lobortis ac vestibulum et, varius tincidunt metus. Etiam neque lacus, cursus quis imperdiet non, interdum id turpis. Aenean enim est, hendrerit vitae justo sit amet, dapibus vulputate purus. Proin vulputate imperdiet euismod.";

let words = longText.split(/\s+/);
let wordCount = words.length;
console.log(`Word Count: ${wordCount}`);

let etCount = 0;
let lowerText = longText.toLowerCase();
for (let i = 0; i < lowerText.length - 1; i++) {
  if (lowerText.substring(i, i + 2) === "et") {
    etCount++;
  }
}
console.log(`Occurrences of 'et': ${etCount}`);

//BONUS 2
let phraseToCheck = "taco cat"
let phraseReverse = ""

for (let counter = phraseToCheck.length -1; counter >=0; counter--){
    if(phraseToCheck[counter] === ""){
        continue
    }
phraseReverse += phraseToCheck[counter]
}

console.log(phraseReverse)