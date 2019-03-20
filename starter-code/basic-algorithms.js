// Names and Input
//1.
var hacker1 = "Juan";
//2.
console.log("The driver's name is " + hacker1);
//3.
var hacker2 = prompt("What's the navigator's name?");
//4.
console.log("The navigator's name is " + hacker2);

//Conditionals
//5.
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, the navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "Wow, you both got equally long names, " + hacker1 + " characters!!"
  );
}

//Loops
//6.
var result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1.toUpperCase()[i] + " ";
}
console.log(result);

//7.
var result1 = "";
for (let i = hacker2.length; i--; ) {
  result1 += hacker2[i];
}
console.log(result1);

//8.
if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
// Bonus
//9;
var palindrome = prompt("Write anything");

var result2 = "";
for (let i = 0; i < palindrome.length; i++) {
  result2 += palindrome[i];
}

var result3 = "";
for (let i = palindrome.length; i--; ) {
  result3 += palindrome[i];
}

console.log(result2);
console.log(result3);

var result2Ameliore = result2.replace(/[\W]/gi, "");
// .split(" ")
// .join("");
console.log(result2Ameliore);

var result3Ameliore = result3
  .replace(/[\W]/gi, "")
  .split(" ")
  .join("");
console.log(result3Ameliore);

if (result2Ameliore.toLowerCase() === result3Ameliore.toLowerCase()) {
  console.log("yes it's a palindrome");
} else {
  console.log("no it's not a palindrome");
}

//10.
var par =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque ut tenetur minima perspiciatis qui, totam sed amet consequatur nemo et incidunt, dolores at tempore illum inventore impedit doloremque distinctio ab. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vitae harum, aperiam id consectetur ex odit quis optio quo distinctio quam cumque perspiciatis aspernatur deleniti minus a iusto obcaecati ipsa! Lorem ipsum dolor sit et, amet consectetur adipisicing et elit. Necessitatibus maiores, ipsa consequuntur voluptas sapiente illo. Illum delectus distinctio, officiis aliquam quos sit temporibus dolore voluptate aut, mollitia repellendus beatae cupiditate.";

var parArray = par.replace(/[\W]/gi, " ");
var parArray2 = parArray
  .replace(/  +/g, " ")
  .split(" ")
  .filter(String);

for (let i = 0; i < parArray2.length; i++) {
  console.log(i + 1 + " : " + parArray2[i]);
}

console.log(parArray2.length);

var numOfEt = 0;
for (let i = 0; i < parArray2.length; i++) {
  if (parArray2[i] === "et") {
    numOfEt++;
  }
}
console.log(numOfEt);
