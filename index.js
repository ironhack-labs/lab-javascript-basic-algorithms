// Iteration 1: Names and Input
let hacker1 = "alexandre";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "sotiris";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let nameSpaceCapital = "";
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  //console.log(`char ${char}`);
  nameSpaceCapital += char + " ";
  //console.log(`nameSpaceCapital ${nameSpaceCapital}`);
}
const Caps = nameSpaceCapital.toUpperCase();
console.log(Caps);



let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const reverseChar = hacker2[i];
  nameReverse += reverseChar;
}
const removeLetter = nameReverse.slice(0, hacker2.length - 1);
const lastCharUpper = hacker2[0].toUpperCase();
nameReverse = removeLetter + lastCharUpper
console.log(nameReverse);

//const result = user1.localeCompare('bob');
switch (hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
    break;
}


// BONUS 



let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus congue tincidunt. Nulla facilisi. Nullam sagittis semper purus eu pharetra. Suspendisse tempus ullamcorper rhoncus. Nulla ut cursus justo, ut tempus odio. Maecenas ut ante non nisl consectetur pharetra. Nullam magna purus, tempor et magna at, ultrices consequat elit. Maecenas eget velit eu lectus suscipit congue ac a est. Aenean in nisi placerat urna aliquet vehicula a nec sem. Aenean auctor tellus sed magna lobortis, sed iaculis mi viverra. Aliquam nec dignissim mauris. Proin tincidunt nulla sed leo aliquam tincidunt. 

In venenatis luctus fermentum. Donec eleifend finibus elit, sit amet convallis felis. Praesent sed feugiat dolor, in tempor augue. Aenean vehicula lectus quis libero consectetur, nec auctor diam ultricies. Fusce pharetra tempor pharetra. Donec arcu ligula, ultrices sit amet est a, elementum hendrerit mauris. Sed eros odio, fringilla nec nisl id, tristique tincidunt lectus. Ut a interdum diam. Sed lacus neque, venenatis a eros in, feugiat dictum nisi. Sed in rhoncus ligula, id consectetur nulla. Quisque a viverra est, vel mattis nulla. Donec egestas tempus magna auctor auctor. Duis non tristique dolor. 

Donec cursus bibendum tincidunt. Donec porttitor, diam nec finibus pellentesque, lectus dolor porttitor tortor, non aliquet velit orci et justo. Sed fermentum aliquet nunc, vel pharetra urna. Sed luctus nulla nec varius pellentesque. Morbi bibendum purus mi, at pharetra orci facilisis a. Sed tempus, nisi a consequat tristique, tortor quam egestas dolor, vel vehicula mi ante vitae odio. Vestibulum vitae ipsum nulla. Suspendisse imperdiet iaculis congue. Quisque hendrerit molestie mauris.` ;


const longTextArray = longText.split(" ");
console.log(longTextArray.length);


let counter = 0;
for (let i = 0; i <= longText.length; i++) {
  
  const firstLetter = longText[i];
  const secondLetter = longText[i + 1];
  const testChar = firstLetter + secondLetter ;
  
  if (testChar === "et") {
    counter += 1;
  }
}
console.log(`The number of times that et appears is ${counter} times.`);