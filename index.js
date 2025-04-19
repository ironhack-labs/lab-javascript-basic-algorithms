// Iteration 1: Names and Input

const hacker1 = "Lupe";
console.log("The driver's name is " + hacker1);

const hacker2 = "Tomás";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has 
                ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driverNameCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameCaps.trim());

let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: lorem ipsum
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum sodales dolor. Vivamus quis laoreet elit. Fusce ut interdum risus. Duis sapien leo, interdum sed dapibus nec, ullamcorper vestibulum leo. Quisque lobortis tincidunt vestibulum. Etiam tristique dui justo, et consequat nibh auctor a. Sed varius hendrerit risus, in blandit nibh facilisis non.

Curabitur massa purus, venenatis et venenatis id, commodo in arcu. Mauris sagittis justo sit amet vestibulum congue. Proin porttitor enim quis libero aliquam dapibus. Etiam maximus et nunc a dapibus. In lectus sapien, fermentum vulputate libero vitae, gravida hendrerit mi. Aenean consectetur, magna ac condimentum sagittis, lectus ligula luctus lorem, sit amet euismod mi dui a leo. Praesent varius elit justo, vel maximus turpis rutrum ut. Morbi tempor eget augue vitae pellentesque. Integer sed dui eu felis pulvinar vulputate. Proin ut leo risus. Proin condimentum sed felis ultrices feugiat. Vestibulum sollicitudin sodales risus quis fringilla. Nullam ultrices lorem sit amet libero ultrices, id rutrum ex placerat. Suspendisse convallis urna id orci eleifend, nec gravida purus semper. Suspendisse volutpat egestas turpis. Proin ac sem id odio tincidunt consequat sit amet ut eros.

In varius a tortor id sollicitudin. Aenean laoreet dolor aliquam lorem consectetur, et vulputate ligula sollicitudin. In massa elit, placerat ut erat in, viverra cursus diam. Proin laoreet finibus feugiat. Aenean aliquet ultricies nulla vitae fringilla. Proin ex nibh, bibendum vehicula accumsan at, sollicitudin eu arcu. Vestibulum consectetur velit in tincidunt posuere.`;

let wordCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] == " ") wordCount++;
  else {
    continue;
  }
}
console.log(wordCount);
let etcount = 0;
for (let i = 0; i < longText.length; i++) {
  const char = longText[i] + longText[i + 1];
  if (char === "et") {
    etcount++;
  }
}
console.log(etcount);

// Bonus 2:
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (rev == str) {
    return true;
  }
  return false;
}

let str1 = "A man, a plan, a canal, Panama!";
let str2 = "Amor, Roma";
let str3 = "step on no pets";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
