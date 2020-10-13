// Iteration 1: Names and Input
let hacker1 = "Sabela";
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Nina";
//	1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters! `
  );
}

// Iteration 3: Loops
//3.1
function upCaseSpace(str) {
  let newName = ``;
  for (let i = 0; i < str.length; i++) {
    newName += str.charAt(i).toUpperCase() + " ";
  }
  console.log(newName);
}
upCaseSpace(hacker1);

//3.2
function reverseString(str) {
  let newName = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newName += str.charAt(i);
  }
  console.log(newName);
}
reverseString(hacker1);

//3.3

if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tempus diam. Aliquam dapibus pharetra augue vitae auctor. Proin a nibh sit amet dui porttitor cursus eu et ex. Donec facilisis velit risus, sit amet accumsan nibh rhoncus vitae. Suspendisse purus ante, mollis sed tortor sed, convallis ultricies tellus. Vestibulum porttitor, sem lobortis dignissim ullamcorper, diam sapien convallis risus, non lacinia quam nibh et arcu. Phasellus ex est, gravida vel urna vel, pretium aliquam leo. Mauris convallis quis massa sed venenatis. Praesent egestas tortor non mi tincidunt feugiat. Fusce porta lacus eu sapien facilisis tincidunt. Pellentesque sed volutpat libero.

Proin nec sodales sapien, et porttitor elit. Pellentesque tristique lacus luctus mi dignissim, vel aliquam massa ornare. Praesent et ante bibendum, viverra leo a, congue ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices dolor nec egestas posuere. Vestibulum pharetra sem neque, eget condimentum sem eleifend congue. Quisque sagittis nisi vitae arcu ultricies finibus nec vel nisi. Sed a ex magna. Duis pellentesque lacus a cursus viverra. Phasellus dolor elit, bibendum a pharetra tempus, pretium ut sapien. Nunc sed efficitur libero. Quisque lobortis volutpat tortor, quis vulputate elit viverra consequat. Donec venenatis volutpat ante, eget fermentum justo tempor id. Phasellus diam dui, congue vel feugiat nec, dignissim in lectus.

Aliquam sagittis eu arcu eget fermentum. Suspendisse fringilla, lacus et tempor hendrerit, diam nisl ultricies diam, vel malesuada sapien nisi in tellus. Morbi mollis dapibus consequat. Phasellus mattis ultrices dolor, nec maximus est posuere vel. Donec sem turpis, varius sit amet tincidunt vitae, ullamcorper vitae orci. Etiam ultricies ligula eget aliquet auctor. Cras eleifend, ipsum in facilisis sodales, lorem ipsum tristique ipsum, vel blandit nulla est quis quam. Integer venenatis consectetur lectus in dictum. Etiam congue lorem eu consectetur lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in faucibus ex, non ornare risus. Phasellus eleifend diam a tempor dignissim. Ut placerat lobortis sem vel dignissim. Donec tincidunt ante nisi, eu porta lectus venenatis ut. Integer cursus dolor tortor, sed vestibulum metus maximus in.`;
// word count
function WordCount(str) {
  return str.split(" ").length;
}
console.log(WordCount(loremIpsum));

//et count
function etCount(str) {
  let et1 = str.split(" et ").length;
  let et2 = str.split(" et.").length;
  let et3 = str.split(" et,").length;
  let etTotal = et1 + et2 + et3;

  return etTotal;
}
console.log(etCount(loremIpsum));

//Bonus 2

function palindrome(str) {
  let newStr = str.toLowerCase().split("");

  for (var i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

palindrome("Amor Roma");
