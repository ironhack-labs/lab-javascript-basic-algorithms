// Iteration 1: Names and Input
let hacker1 = "Alexandra Coffin";
const hacker2 = "Derek Noble";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }
  else {
    console.log(`ERROR`);
  }

// Iteration 3: Loops
const driverArray = hacker1.split('');
let uppercaseSpacedDriver = "";
 driverArray.forEach(character => {
     uppercaseSpacedDriver += character + " ";
 });
 console.log(`${uppercaseSpacedDriver.toUpperCase()}`);

const navigatorArray = hacker2.split('');
 let reversedNavigator = "";
 for (i = navigatorArray.length - 1; i >= 0; i--) {
   reversedNavigator += navigatorArray[i];
 }
 console.log(`${reversedNavigator}`);

const shortestNameLength = (hacker1.length > hacker2.length ? hacker1.length : hacker2.length);
for (i = 0; i < shortestNameLength; i++) {
  if (driverArray[i] < navigatorArray[i]) {
    console.log("The driver's name goes first.");
    break;
  }
  else if (navigatorArray[i] < driverArray[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}
if (hacker1.length === hacker2.length) console.log("What?! You both have the same name?");

//Bonus 1:
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices quis odio in pretium. Vivamus consectetur eros ut metus faucibus, a laoreet risus feugiat. Fusce pellentesque malesuada dolor pharetra congue. Ut at placerat arcu. Aliquam erat volutpat. Curabitur maximus erat sit amet augue condimentum convallis. Curabitur ultrices at magna eget efficitur. Morbi hendrerit lectus at urna dapibus, ac tempus magna condimentum.Sed scelerisque augue porta, accumsan sem eu, mattis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tincidunt iaculis tellus, sit amet bibendum lorem aliquet eget. Nam lacinia, quam non porttitor dictum, metus risus pulvinar est, molestie maximus erat diam vehicula mi. Sed nec nulla lacinia, aliquet nisl at, consectetur arcu. Morbi pharetra enim sapien, quis suscipit lectus fermentum et. Phasellus dignissim, ipsum in iaculis condimentum, dui erat porta enim, eget luctus mauris ligula vitae erat. Sed lorem nibh, pharetra vitae arcu at, tristique aliquet sem. Praesent malesuada nibh nec quam commodo, id bibendum arcu euismod. Nullam erat mi, rutrum quis velit quis, congue dictum dui. Vestibulum in ligula metus. Vestibulum lacinia, nisl et mollis tempor, erat dolor sollicitudin velit, nec fermentum ligula sem quis sapien. Quisque et risus arcu. Praesent ac rhoncus purus. Nunc accumsan vestibulum massa, id posuere mi tincidunt vitae. Nulla eleifend, nulla eu luctus aliquet, nunc nibh bibendum justo, ac lacinia lectus ante venenatis mi. Suspendisse vitae mattis risus. Suspendisse nibh lorem, semper at ligula a, facilisis cursus nisl. Duis neque arcu, elementum vel tempor et, interdum vitae lectus. Morbi finibus malesuada vestibulum. Sed bibendum vitae erat consectetur imperdiet. Nunc sit amet convallis justo, a suscipit massa. Proin dui tortor, tincidunt eget arcu sed, scelerisque malesuada nisl.";

const words = loremIpsum.split(' ');
console.log(`lorem ipsum words: ${words.length}`);

const loremNoEt = loremIpsum.split(' et');
console.log(`et in lorem ipsum: ${loremNoEt.length - 1}`)
//luckily, no Latin words like 'etiam' appear;

