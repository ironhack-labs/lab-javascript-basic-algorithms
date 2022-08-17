// Iteration 1: Names and Input
let hacker1 = "Diego";
let hacker2 = "Constantine";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker2.length > hacker1.length
  ? console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    )
  : console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
// Iteration 3: Loops

//Print drivers name capitalized and separated by commas
console.log([...hacker1].join(" ").toUpperCase());
//Print navigators name in reverse
console.log([...hacker2].reverse().join(""));
//Lexicographic order
hacker1.localeCompare(hacker2) < 0
  ? console.log("The driver's name goes first.")
  : hacker1.localeCompare(hacker2) > 0
  ? console.log("Yo, the navigator goes first definitely.")
  : console.log("What?! You both have the same name?");

//Bonus 1

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quam vel odio ultricies mattis. Sed vitae lacus et velit bibendum sagittis vitae eget augue. Duis commodo, sem ac convallis condimentum, tellus urna sollicitudin nisl, id ullamcorper purus elit et purus. Pellentesque dignissim convallis lacus sed rutrum. Vestibulum nec congue dolor. Proin vestibulum at odio et dapibus. Suspendisse sollicitudin pellentesque posuere. In tincidunt, dui et efficitur molestie, ante dui laoreet turpis, et condimentum orci augue ut tortor. Sed mollis rutrum nisi, in iaculis nunc lobortis quis. In vulputate diam vitae nibh bibendum fringilla. Nam ac tempor ex. Morbi dignissim faucibus est, elementum mattis purus condimentum a. Vestibulum augue quam, accumsan eleifend lobortis et, consequat et turpis. Ut efficitur, magna in tristique viverra, libero libero commodo velit, nec tempor lorem lorem at massa. Nullam at dignissim libero. Etiam quis volutpat enim. Donec blandit enim eget velit malesuada, ut malesuada nisl finibus. Duis a dolor non magna vehicula efficitur quis a erat. Proin vulputate, mauris in sodales vehicula, elit purus feugiat dolor, vel accumsan velit libero sed tortor. Vestibulum elit massa, finibus et tortor quis, scelerisque tincidunt risus. Mauris pharetra tincidunt dui, et sollicitudin ipsum sollicitudin malesuada. Nulla velit nibh, dapibus in orci vitae, condimentum efficitur erat. Quisque vehicula pellentesque ipsum, vitae fringilla diam. Donec sed lacus pretium, volutpat risus a, volutpat nibh. Vivamus finibus, augue nec ultrices viverra, neque eros sagittis eros, eget congue mi nisl sit amet odio. Quisque leo est, hendrerit vitae augue nec, vulputate interdum lacus. Proin quam magna, condimentum eu felis nec, aliquet venenatis lacus. Proin dignissim, odio sed mollis sagittis, enim nisi placerat urna, in sollicitudin erat velit placerat ligula. Suspendisse potenti. Maecenas egestas sit amet nisi in laoreet. Suspendisse ullamcorper ornare ipsum, eu dapibus est sagittis eget. Nam cursus facilisis libero facilisis lobortis. Praesent sagittis quis purus sed sollicitudin. Donec in bibendum lectus. Mauris eget hendrerit justo. Nulla placerat lectus orci, eget pellentesque nulla sagittis sit amet. Phasellus blandit sit amet turpis in scelerisque. Nulla gravida quis velit pretium pharetra. In viverra felis tortor, id accumsan arcu porta semper.";
//Count the number of words in the lorem string
console.log(
  `Number of words in the lorem paragraphs is: ${lorem.split(" ").length}`
);
//Count the number of times et appears
let countNum = (sentence) => {
  let num = 0;
  sentence
    .replace(/[,./]/g, "")
    .split(" ")
    .forEach((n) => {
      if (n === "et") {
        num += 1;
      }
    });
  return num;
};

console.log(`Et appears ${countNum(lorem)} in the lorem text`);

//Bonus 2

//Check if string is a palindrome
let phraseToCheck = "A man, a plan, a canal, Panama!";

console.log(
  `Is the string a palindrome: ${
    phraseToCheck
      .replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
      .toLowerCase() ===
    phraseToCheck
      .replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
      .split("")
      .reverse()
      .join("")
      .toLowerCase()
  }`
);
