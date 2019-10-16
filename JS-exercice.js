// iteration 1 names & input

var hacker1 = "Marie";
console.log("The driver's name is " + hacker1);

var hacker2 = "Pablo";
console.log(`The navigator's name is ${hacker2}`);

// iteration 2 conditions

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
    "Wow, you both got equally long names " + hacker2.length + " characters"
  );
}

// iteration loops
// 3.1
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  str += hacker1.toUpperCase()[i] + " ";
}
console.log(str);

// 3.2
let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);

// 3.3

var a = hacker1.charAt(0);
var b = hacker2.charAt(0);
if (a < b) {
  console.log("The driver's name goes first");
} else if (a > b) {
  console.log("Yo, the navigator goes first definitly ! ");
} else {
  console.log("What you both got the same name !");
}

// Bonus time

var text1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var text2 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

var text3 =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum";

function countWords(text) {
  var sum = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      sum += 1;
    }
  }
  return sum;
}
console.log(countWords(text3));

// bonus time 2

function countEt(text) {
  var sum = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "e" && text[i + 1] === "t") {
      sum += 1;
    }
  }
  return sum;
}
console.log(countEt(text3));
