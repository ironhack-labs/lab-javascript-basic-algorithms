// Names and Input
let hacker1 = "Franck";
console.log(`The drivers name is ${hacker1}`);
let message = "Gief navigator's name";
let hacker2 = prompt(message);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length)
  console.log(
    `The Driver has the longest name it has ${hacker1.length} characters `
  );
if (hacker1.length < hacker2.length)
  console.log(
    `The Navigator has the longest name, it has ${hacker2.length} characters `
  );
if (hacker1.length === hacker2.length)
  console.log(
    `wow, you got equally long names, ${hacker1.length} characters !!`
  );

//Loops

let result = [];
for (let i = 0; i < hacker1.length; i++) {
  result.push(hacker1.charAt(i).toUpperCase(hacker1.charAt(i)));
}
console.log(result.join(" "));
//ehh
console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

if (hacker1.toLowerCase() < hacker2.toLowerCase())
  console.log(`The driver's name goes first`);
else if (hacker1.toLowerCase() > hacker2.toLowerCase())
  console.log(`Yo, the navigator goes first definitely`);
else if (hacker1.toLowerCase() == hacker2.toLowerCase())
  console.log(`What?! You both got the same name?`);

//Bonus
//9.
let userInput = prompt("Message please");
let changedInput = userInput.replace(/[\s\W]/gi, "");

if (
  userInput
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/[\s\W]/gi, "") ===
  changedInput
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
)
  console.log("Yiip this is  a palindrome");

//10.
// Lorem ipsum generator

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec neque scelerisque, fringilla justo a, rhoncus odio. Integer ultricies massa quis libero tincidunt consectetur. Praesent at felis posuere, faucibus arcu quis, tincidunt lacus. Maecenas commodo ac velit vel scelerisque. Suspendisse scelerisque justo et nunc porttitor semper. Fusce erat ligula, tincidunt eget egestas at, euismod a ligula. Suspendisse eleifend, nisl non aliquam eleifend, justo turpis maximus sapien, quis suscipit quam nunc id nunc. Integer tristique tincidunt est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim quis quam aliquam rutrum. Suspendisse nec nunc tincidunt, posuere sapien et, lacinia nibh. Ut in fermentum massa. Morbi consectetur in lorem sed maximus. Cras at ipsum iaculis, interdum purus vitae, facilisis metus. Etiam maximus odio a erat sodales consectetur.";
let lorem2 =
  "Praesent quis commodo felis, quis interdum ipsum. Aliquam porta quam a augue tincidunt, in tincidunt magna consequat. Praesent magna diam, pellentesque id lorem id, malesuada efficitur nisi. Vivamus sed libero placerat, fermentum justo eu, ornare elit. Phasellus tempus neque in mi consequat, eleifend ultrices tortor vehicula. Aliquam suscipit, mauris eu ornare malesuada, mauris neque lacinia nunc, nec lobortis enim ligula non elit. Sed congue ultrices dui a scelerisque. Fusce metus turpis, interdum dictum nisl sodales, malesuada tempus nisl. Proin lacinia magna sed urna vehicula, quis lacinia neque bibendum. Duis dignissim lorem id purus venenatis sagittis. Proin eu sapien placerat, hendrerit massa nec, malesuada velit.";
let lorem3 =
  "Cras eget auctor libero. Maecenas a ullamcorper ex, et egestas enim. Phasellus fermentum fringilla semper. Nulla facilisi. Sed ac viverra est. Donec venenatis, erat non gravida vulputate, magna diam blandit arcu, convallis maximus purus arcu dapibus massa. Nulla condimentum quam lacus. Nullam ac sem pellentesque, sollicitudin quam non, viverra elit.";

let all = lorem + lorem2 + lorem3;
console.log(all.split(" ").length);

let tab = all.split(" ");

function findOccurrence(str, tab) {
  let clone = [...tab];
  let index = tab.indexOf(str);
  let count = 0;
  while (index !== -1) {
    count++;
    clone.splice(index, 1);
    index = clone.indexOf(str);
  }
  return count;
}

console.log(findOccurrence("et", tab));
