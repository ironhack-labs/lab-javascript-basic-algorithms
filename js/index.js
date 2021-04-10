// Iteration 1: Names and Input
let hacker1 = "Luis";
let hacker2 = "Antonio";

console.log(`The driver´s name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals
let longerName;

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  longerName = hacker1;
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  longerName = hacker1;
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  longerName = hacker2;
}

// Iteration 3: Loops
//3.1
let forPrint1 = "";
let forPrint2 = "";
let hacker1Upper = hacker1.toUpperCase();

forPrint1 += hacker1Upper[0];

for (let i = 1; i < hacker1.length; i++) {
  forPrint1 += " ";
  forPrint1 += hacker1Upper[i];
}
console.log(forPrint1);
//3.2
forPrint2 += hacker2[hacker2.length - 1];

for (let i = hacker2.length - 2; i >= 0; i--) {
  forPrint2 += hacker2[i];
 }
console.log(forPrint2);
//3.3
let compDriFull = hacker1.toLowerCase()
let compNavFull = hacker2.toLowerCase()
let compD = "";
let compN = "";

for (i = 0; i < longerName.length; i++) {
  compD = compDriFull[i];
  compN = compNavFull[i];
  if (compD === compN) {
    if (i === longerName.length - 1) console.log("What?! You both have the same name?");
    continue;
  } else if (compD < compN) { 
    console.log("The driver's name goes first.");
    break;
  } else {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}

//Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id imperdiet nisi. Morbi posuere libero in suscipit faucibus. Phasellus aliquet interdum ultricies. Aenean sagittis nisl quis turpis consectetur lacinia. Etiam sit amet ante nec leo consectetur dignissim. Morbi hendrerit molestie augue. Donec molestie mauris in viverra aliquam. Suspendisse potenti. Ut sit amet nisi sapien. Sed lectus erat, euismod vitae fringilla eu, luctus eget ante. Sed tincidunt nulla vitae hendrerit mollis. Suspendisse libero diam, finibus eget egestas a, tempor ac tortor. Mauris at nulla neque. Sed eget ligula leo. Ut in facilisis risus. Vivamus aliquet est nec pellentesque fermentum. Suspendisse porta dignissim odio, sit amet faucibus odio imperdiet ut. Fusce non sodales massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris a mi ut magna efficitur dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mi sapien, tempor in vestibulum ut, pharetra nec lorem. Donec maximus dictum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam accumsan faucibus neque nec tristique. Phasellus varius laoreet ligula a laoreet. Nam sit amet blandit arcu. Etiam lacus turpis, feugiat quis accumsan et, elementum ut lacus. Etiam a commodo sem, sed consequat arcu. In sit amet augue molestie, tristique mauris nec, euismod nisi. Quisque hendrerit ex faucibus fringilla luctus. Praesent ornare eros sem, a finibus elit sollicitudin quis. Ut luctus tempor leo eget scelerisque. Quisque magna justo, tempus id libero venenatis, interdum eleifend tellus. Etiam mattis hendrerit tempus. Donec convallis velit vel nibh suscipit ultrices.";
let contador1 = 1;
let contador2 = 0;

for (i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") contador1++;
  if (loremIpsum[i] === "e" || loremIpsum[i] === "E") if(loremIpsum[i + 1] === "t") contador2++ 
}
console.log(contador1);
console.log(contador2);

//Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?";
let phraseToCheckLower = phraseToCheck.toLowerCase();
let phraseNoSpace = "";
let phraseReverse = "";

for (i = 0; i < phraseToCheckLower.length; i++) {
  if(phraseToCheckLower[i] !== "a" && phraseToCheckLower[i] !== "b" && phraseToCheckLower[i] !== "c" && phraseToCheckLower[i] !== "d" && phraseToCheckLower[i] !== "e" && phraseToCheckLower[i] !== "f" && phraseToCheckLower[i] !== "g" && phraseToCheckLower[i] !== "h" && phraseToCheckLower[i] !== "i" && phraseToCheckLower[i] !== "j" && phraseToCheckLower[i] !== "k" && phraseToCheckLower[i] !== "l" && phraseToCheckLower[i] !== "m" && phraseToCheckLower[i] !== "n" && phraseToCheckLower[i] !== "o" && phraseToCheckLower[i] !== "p" && phraseToCheckLower[i] !== "q" && phraseToCheckLower[i] !== "r" && phraseToCheckLower[i] !== "s" && phraseToCheckLower[i] !== "t" && phraseToCheckLower[i] !== "w" && phraseToCheckLower[i] !== "u" && phraseToCheckLower[i] !== "x" && phraseToCheckLower[i] !== "y" && phraseToCheckLower[i] !== "z" && phraseToCheckLower[i] !== "ñ") {
    continue;
  } else {
    phraseNoSpace += phraseToCheckLower[i];
  }
}

phraseReverse += phraseNoSpace[phraseNoSpace.length - 1];

for (let i = phraseNoSpace.length - 2; i >= 0; i--) {
  phraseReverse += phraseNoSpace[i];
 }

if (phraseReverse === phraseNoSpace) {
  console.log(`The phrase ${phraseToCheck} is a Palindrome!`)
} else {
  console.log(`The phrase ${phraseToCheck} is not a Palindrome :(`)
}