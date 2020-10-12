// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Michael";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker2.length < hacker1.length) {
    console.log(` The driver has the longest name, it has ${hacker1.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops
let space = "";
for (let i=0; i <hacker1.length; i++) {
  space += hacker1[i].toUpperCase() + " ";
}
console.log(space);


let spaceTwo = "";
for (i=hacker2.length-1; i>=0; i--) {
  spaceTwo += hacker2[i];
}
console.log(spaceTwo);

if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log("The driver's name goes first.");
} else if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log(" Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1 

let giganticString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra, quam id tempus cursus, leo nunc facilisis dui, in sagittis libero risus et mauris. Suspendisse consequat sodales augue. In tincidunt vestibulum sem, at vehicula nisi consequat at. In iaculis lobortis quam, quis tincidunt justo volutpat in. Nam et felis sit amet risus rhoncus dignissim. Nam quis lacus et turpis feugiat vulputate at a mi. Donec mattis a lacus nec mattis. Curabitur posuere lectus ipsum, et rhoncus lectus sollicitudin nec. Aenean viverra quis sem a dapibus. Vivamus ipsum orci, interdum ac venenatis nec, ornare vitae erat. Phasellus pulvinar ullamcorper diam, eu auctor justo scelerisque sit amet. Ut sed auctor ante. Praesent varius aliquet egestas. Integer consectetur mauris lacus, vitae auctor leo porta consectetur. Aenean nibh diam, luctus a elit nec, semper egestas ligula. Praesent metus dui, vulputate bibendum ullamcorper eu, sodales at risus. In sed nunc interdum, dictum sapien in, rhoncus leo. Donec hendrerit massa vel faucibus porttitor. Morbi aliquet justo nulla, ac eleifend quam lobortis vitae. Suspendisse sit amet nisl eget elit commodo cursus quis id nunc. Donec in dolor non nunc bibendum faucibus id sit amet orci. Suspendisse viverra vehicula vestibulum. Nullam sit amet lobortis mauris, eu aliquam metus. Pellentesque a consectetur mi. Sed sagittis, velit blandit congue convallis, nisi felis pellentesque ex, ut dictum dolor ante nec quam. Sed non lacus mi. In scelerisque augue ac dapibus facilisis. Quisque ultrices, risus nec imperdiet ullamcorper, magna est rhoncus eros, ac pretium risus ex non nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

let wordCount = 1;
for (let i = 0; i < giganticString.length; i++) {
  if (giganticString[i] === " ") {
    wordCount += 1;
  }
}
console.log(wordCount);