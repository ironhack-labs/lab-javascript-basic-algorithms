// Iteration 1: Names and Input

let hacker1 = "Maurine";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Mona"; // i did the lab alone because i wasn't in class this afternoon
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`
  );
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let j = hacker2.length - 1; j >= 0; j--) {
  console.log(hacker2[j]);
}

// other method
for (const value of hacker1) {
  console.log(value.toUpperCase());
}

//BONUS 1

let paragraphCounter =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere purus vitae urna tincidunt, a laoreet risus facilisis. In nibh enim, commodo at odio in, malesuada tincidunt sapien. Morbi in leo sollicitudin, iaculis diam ultrices, sollicitudin tortor. Nam gravida, leo in luctus venenatis, nisi nunc volutpat ex, sed interdum magna elit ac ante. Duis feugiat ligula sed augue feugiat, sed imperdiet leo fermentum. Integer in metus id nibh tristique consectetur eu non dolor. Suspendisse id ipsum et turpis ullamcorper vestibulum non eget arcu. Vestibulum sagittis lacus quis nibh congue dictum. Nullam vehicula feugiat condimentum. Cras gravida faucibus aliquet. Phasellus vulputate enim quis scelerisque consectetur. Donec iaculis blandit mattis. Cras in posuere ipsum. Curabitur bibendum convallis maximus. Sed sit amet tortor in lacus maximus gravida in ut sapien. Vestibulum non convallis magna, eget ultricies ipsum. Donec scelerisque risus sed tellus eleifend, eu tristique tortor ullamcorper. Nulla facilisi. Pellentesque eu hendrerit ex, eget ullamcorper arcu. Integer convallis lacus dapibus, fermentum nisi ac, tempor est. Praesent in odio nisi. Phasellus ac dictum lectus. Nulla facilisi. Phasellus ornare fermentum volutpat. Phasellus iaculis bibendum odio, nec efficitur tortor. Mauris dictum ullamcorper ultrices. Nam justo nisl, imperdiet nec consequat vel, rhoncus sed lacus. Praesent tristique felis neque, ac pharetra libero tincidunt a. Morbi convallis leo quis rhoncus tempor. Fusce faucibus varius purus, at volutpat tellus viverra vitae. Vivamus finibus ipsum quis euismod ultrices. Sed ac purus id sapien convallis maximus. Fusce at turpis tempor, faucibus lacus at, ornare nisl. Mauris euismod tortor ac felis consectetur, in venenatis lorem pretium. Praesent ultricies suscipit odio sed interdum. Donec sed dolor vehicula, interdum purus id, placerat ex. Nulla et condimentum justo. Pellentesque in hendrerit enim, eget semper nisl. Aenean fermentum leo convallis, consectetur ligula sed, auctor eros. Donec orci mauris, congue ut venenatis ac, eleifend sit amet elit. Donec ut ex eget nibh rutrum egestas. Cras non massa eget velit pretium blandit lobortis eu nisl. Nullam sed mi viverra, scelerisque ipsum interdum, euismod elit. Aenean nisl magna, interdum nec mauris non, consectetur placerat ligula. Suspendisse tempus ornare mi, sit amet finibus nisi egestas in. Pellentesque bibendum mattis mattis.";

// count the number of words in the string.

let counterOne = 1;

for (let i = 0; i < paragraphCounter.length; i++) {
  if (paragraphCounter[i] === " ") {
    counterOne++;
  }
}

console.log("Words " + counterOne);

// other method with condition ( the best to me because i dont need to initialise my var counter to 1 to have the good result)

let counterThree = 0;

for (let i = 0; i < paragraphCounter.length; i++) {
  if (paragraphCounter[i] === " ") {
    counterThree++;
  }
}

if ((counterThree === 0 && paragraphCounter.length > 0) || counterThree > 0) {
  counterThree++;
}

console.log("Words " + counterThree);

// other method with Array.from

let counterTwo = 1;
let textArray = Array.from(paragraphCounter);
for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] == " ") {
    counterTwo++;
  }
}
console.log("Words: " + counterTwo);

// count the number of times the Latin word et appears.
//not good again
let counterFour = 0;

for (let i = 0; i < paragraphCounter.length; i++) {
  if (paragraphCounter[i] === "et") {
    counterFour++;
  }
}

console.log("Words et = " + counterFour);
