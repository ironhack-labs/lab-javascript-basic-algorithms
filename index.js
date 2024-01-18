console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Mel";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mel";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

const driver = hacker1.toUpperCase().split("").join(" ");

console.log(driver);

const reverseHacker1 = "";
for (let i=hacker1.length - 1; i>=0; i--) {
    reverseHacker1 += hacker1[i];
 }
 console.log(reverseHacker1);


 if (hacker1.localeCompare(hacker2) <0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) >0) {
    console.log(
      "Yo, the navigator goes first definitely.")
  } else {
    console.log(
      "What?! You both have the same name?");
  }
  

// Bonus 1

const longText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ex massa. Curabitur non urna arcu. Nulla ac commodo sem. Proin leo sapien, mattis quis mauris tincidunt, dignissim bibendum lorem. Maecenas sem eros, volutpat in nulla sit amet, vehicula ullamcorper tortor. Duis imperdiet velit augue, non egestas sapien porttitor vitae. Nullam eros massa, sollicitudin sed pulvinar porta, faucibus fringilla ante. Integer nibh neque, vulputate nec cursus ut, congue eget dui. Donec mollis lectus varius, suscipit orci at, posuere metus. Vestibulum ut vestibulum purus. /nPhasellus sit amet nisi commodo, consequat tellus et, ultricies lacus. Nullam porta, velit et aliquet tempus, ante massa laoreet velit, in efficitur dolor purus non augue. Donec malesuada orci at commodo accumsan. Etiam tellus dui, blandit eget scelerisque id, pellentesque in mauris. Pellentesque tincidunt vitae mauris at blandit. Cras vel tristique dolor. Phasellus pellentesque massa eu ante blandit pellentesque vitae vel velit. /nCras fermentum, leo tristique laoreet accumsan, nulla metus tristique ex, eget malesuada ex est quis metus. Suspendisse consectetur leo non justo laoreet, non faucibus erat cursus. Quisque arcu turpis, vehicula sed neque eu, luctus dignissim libero. Aenean euismod facilisis vestibulum. Maecenas aliquam arcu at risus iaculis, congue varius ex facilisis. Donec nisl diam, rutrum consectetur quam et, condimentum tincidunt eros. Aliquam vel nisi nisi. Quisque lorem dolor, bibendum et aliquet sit amet, finibus vitae dui."'
console.log(longText.split(" ").length);

const latinWord = "et";

console.log(longText.split(latinWord).length - 1);

//Bonus 2

const phraseToCheck = "step on no pets";
let isPalindrome = true

for (let i = 0; i < phraseToCheck.length / 2; i++) {
  if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);