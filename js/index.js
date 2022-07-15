// Iteration 1: Names and Input
let hacker1 = "Ryan";
let hacker2 = "John";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver's name is longer, it has ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems the naviagator's name is longer, it is has ${hacker2.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, at ${hacker1.length} characters each`)
  }


// Iteration 3: Loops
let compareTest = hacker1.localeCompare(hacker2);
if (compareTest === 0) {
    console.log("What?! You both have the same name?!");
  }else if (compareTest === 1) {
    console.log("navigator goes first");
  } else if (compareTest === -1) {
    console.log("driver goes first");
  }

  //Bonus 1:

  let loremParagraph =`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque. Sit amet purus gravida quis blandit. Sit amet justo donec enim diam vulputate ut pharetra sit. Est lorem ipsum dolor sit amet consectetur adipiscing. Id diam vel quam elementum. Libero id faucibus nisl tincidunt eget. Suspendisse in est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices. Massa massa ultricies mi quis. Pellentesque diam volutpat commodo sed egestas egestas. Nam at lectus urna duis convallis convallis tellus id. Et netus et malesuada fames ac turpis egestas. Sit amet venenatis urna cursus eget nunc. Suspendisse potenti nullam ac tortor.

  Turpis egestas pretium aenean pharetra. Senectus et netus et malesuada. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Proin sed libero enim sed faucibus. Urna nunc id cursus metus aliquam eleifend mi in nulla. Lobortis scelerisque fermentum dui faucibus in ornare. Nec ultrices dui sapien eget mi proin sed libero. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Orci nulla pellentesque dignissim enim sit.
  
  Ac tincidunt vitae semper quis. Neque gravida in fermentum et sollicitudin. Ornare aenean euismod elementum nisi quis eleifend quam. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Eget magna fermentum iaculis eu non diam phasellus. Sed euismod nisi porta lorem mollis aliquam. Urna duis convallis convallis tellus id interdum velit laoreet. In dictum non consectetur a erat nam at lectus urna. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Mauris sit amet massa vitae tortor. Tristique sollicitudin nibh sit amet. Magna sit amet purus gravida quis blandit turpis cursus in. Morbi quis commodo odio aenean sed adipiscing.`


  let numOfEt = 0;
  for (let i = 0; i < loremParagraph.length; i++) {
    if (((loremParagraph[i] ==="e" || loremParagraph[i] === "E") && loremParagraph[i+1] ==="t") && ((loremParagraph[i-1] === " " || loremParagraph[i-1] === undefined) && (loremParagraph[i+2] === " " || loremParagraph[i+2] ==="." || loremParagraph[i+2] === undefined ))) {
     numOfEt += 1;
  }}
  console.log(numOfEt);