// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Ale";
console.log("The driver's name is " + hacker1);

let hacker2 = "Ben";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker2.length + " characters."
  );
}

// Iteration 3: Loops

let newDriversname = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriversname += `${hacker1[i]} `;
}
console.log(newDriversname.toUpperCase());

/*
for (let i = 0; i < hacker1.length; i++){ 
  console.log (hacker1[i].toUpperCase()+" ");
}*/

// 3.2 nhoJ

let reversedName = hacker1;

let reversedString = reversedName.split("").reverse().join("");
console.log(reversedString);
function reverseString(str) {
  return str;
}

//3.3 Lexoicographic order

console.log (hacker1, hacker2)

function lexoFunction (p1, p2) {
  if (p1 === p2) {
    console.log("What?! You both have the same name?");
  }
  else if (p1 > p2){
    console.log("The driver's name goes first.");
  }
  else if (p1 < p2) {
    console.log("Yo, the navigator goes first definitely. ");
  }
}
console.log(lexoFunction(hacker1, hacker2))

*/

// Bonus

let paragraph1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus enim vel consectetur lobortis. Duis ac tellus sed odio pharetra tempor. Proin ultrices justo eu auctor lacinia. Cras erat enim, porttitor euismod convallis eget, mollis eu massa. Donec sollicitudin risus eget sem facilisis faucibus. Fusce a auctor justo. Pellentesque auctor velit et dapibus vestibulum. Proin sed libero ut mauris laoreet tincidunt in ac nulla. Donec in diam suscipit, rutrum odio id, mollis velit. Curabitur nec ligula nec augue consectetur congue eget dignissim erat. Nunc quis mi condimentum, vestibulum nunc vel, dictum nunc. Pellentesque facilisis blandit augue, ut malesuada quam ultricies in. Vestibulum a tortor eu eros dictum dignissim et at nisl. Suspendisse volutpat gravida purus ac sollicitudin.";

let paragraph2 =
  "Ut euismod diam hendrerit, pretium mi vel, egestas nunc. Nunc sed eros non ante condimentum dictum et condimentum mi. In venenatis pellentesque dolor, nec elementum nunc tempor sed. Etiam sodales odio dolor, in eleifend dolor mollis sit amet. Nam laoreet porttitor est. Etiam orci enim, faucibus a turpis id, euismod pretium felis. Vivamus lectus diam, lobortis nec velit in, laoreet fringilla nunc. Integer pharetra ipsum condimentum, consequat enim ut, venenatis magna. Aenean sed tortor condimentum, pretium dui quis, placerat tortor. Nulla in ante vitae mi dictum aliquam in nec quam. Ut eu enim vel enim consequat euismod. Integer gravida iaculis luctus. Proin ac volutpat leo. Sed et consectetur lorem.";

let paragraph3 =
  "Nullam non euismod elit, ut tincidunt ligula. Nulla viverra tristique tellus, in pellentesque odio malesuada vitae. Nulla facilisi. Aliquam volutpat tellus nulla. Donec bibendum, lorem eget laoreet bibendum, risus diam malesuada odio, sed imperdiet massa mauris sed ipsum. Phasellus semper, libero eget aliquet consectetur, leo mi interdum erat, nec aliquam enim tellus sed neque. Aliquam eget malesuada sapien. Pellentesque vel porttitor velit. Aenean et nulla risus. Vivamus euismod nulla leo, non elementum purus facilisis in. Morbi a arcu suscipit, imperdiet urna in, scelerisque quam.";

// Bonus 1.1
function countWords(str) {
  return str.split(" ").length;
}

// Bonus 1.2
console.log(countWords(paragraph1));
console.log(countWords(paragraph2));
console.log(countWords(paragraph3));

// Bonus 1.3

var temp = "This is a string.";
var count = (paragraph1.match(/et/g) || []).length;
console.log(count);
