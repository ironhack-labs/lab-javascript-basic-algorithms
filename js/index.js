//Iteration 1.1

let hacker1 = "Duarte";
//Iteration 1.2
console.log(`The driver's name is ${hacker1}`);
//Iteration 1.3
let hacker2 = "Thomas";
//Iteration 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3.1

let printName = "";
for (var i = 0; i < hacker1.length; i++) {
  printName += hacker1[i].toUpperCase() + " ";
}
console.log(printName);

// Iteration 3.2

let printNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  printNameReverse += hacker2[i];
}
console.log(printNameReverse);

//Iteration 3.3

let lexiOrder = hacker1.localeCompare(hacker2);

if (lexiOrder < 0) {
  console.log(`The driver's name goes first.`);
} else if (lexiOrder > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacinia sem. Aenean eu nibh vel sem lacinia euismod. Integer nec eros ac leo faucibus ultrices vel a tortor. In ullamcorper accumsan malesuada. Ut eget commodo arcu. Nulla sit amet iaculis quam. Nulla in tellus ut ex feugiat mattis nec eget justo. Aenean porta, odio in rutrum tempus, metus risus elementum nisl, non luctus odio lectus et ligula. Nulla venenatis interdum interdum. Quisque diam magna, commodo et volutpat eget, molestie eget tortor. Vivamus ac venenatis velit, nec vestibulum ligula. Nullam a massa congue, suscipit metus nec, ultrices lectus. Mauris commodo odio ut erat imperdiet, id tempor sapien auctor. Praesent ultricies sem eget enim rutrum convallis. Aliquam suscipit, nisl vitae ultricies iaculis, nisl ex venenatis ipsum, sed rutrum mauris lorem nec tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque et nunc ac vulputate. Nam turpis leo, facilisis ac ullamcorper sit amet, lacinia sed nibh. Proin aliquam eu diam et facilisis. Vestibulum efficitur elementum ex suscipit ullamcorper. Nulla facilisi. Nullam id mauris sed dolor iaculis rhoncus ut ac mauris. Quisque convallis tellus eu commodo condimentum. Maecenas interdum eleifend suscipit. In hac habitasse platea dictumst. Aliquam erat volutpat. Fusce vel aliquam ante. Suspendisse maximus pretium lacus, eget dapibus metus rhoncus et. Proin id orci interdum, pretium mauris sit amet, tempor ipsum. Pellentesque lobortis nunc eget porttitor laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur egestas quam quis ipsum mollis, sed interdum sem pretium. Fusce cursus non arcu et fermentum`;

// word count
var count = 0;

for (i = 0; i <= lorem.length; i++) {
  if (lorem.charAt(i) === " ") {
    count++;
    console.log(count + 1);
  }
}

// count the number of times the Latin word et

console.log(lorem.split(" et").length - 1);
