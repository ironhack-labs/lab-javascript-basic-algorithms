// Iteration 1: Names and Input
let hacker1 = "Marina";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Lourdes";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1
let result = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i == hacker1.length - 1) {
    result += hacker1[i].toUpperCase();
  } else {
    result += hacker1[i].toUpperCase() + " ";
  }
}

console.log(result);

// 3.2
// forma 1 con for
let result2 = [];
let hacker2Array = hacker2.split("");

for (let i = hacker2Array.length - 1; i >= 0; i--) {
  result2.push(hacker2Array[i]);
}
console.log(result2.join(""));

// forma 2 con reverse
console.log(hacker2.split("").reverse().join(""));

// 3.3

let order = hacker1.localeCompare(hacker2);
console.log(order);

if (order == 0) {
  console.log("What?! You both have the same name?");
} else if (order == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("The driver's name goes first");
}

//Bonus 1

let ph1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let ph2 =
  "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

let ph3 =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

console.log(ph1.split(" ").length);
console.log(ph2.split(" ").length);
console.log(ph3.split(" ").length);

console.log(ph1.indexOf("et"));
