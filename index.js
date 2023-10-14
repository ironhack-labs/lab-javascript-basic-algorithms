// Iteration 1: Names and Input
/// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Orlando';
console.log("The driver's name is " + hacker1);

// 1.2 Print "The driver's name is Orlando".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'João';

// 1.4 Print "The navigator's name is João".
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
const driverName = 'John';
let formattedName = '';

for (let i = 0; i < driverName.length; i++) {
  formattedName += driverName[i].toUpperCase() + ' ';
}

formattedName = formattedName.trim(); // Remove the trailing space

console.log(formattedName);

//Bonus 1.

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis libero. Praesent et ipsum ac nisi tincidunt consectetur. Etiam in tincidunt et elit et lacinia. Vivamus vel odio et ligula convallis laoreet. Cras et finibus purus. Etiam ac metus quis felis cursus efficitur. Etiam nec quam vel tortor ullamcorper accumsan et at nisl. Quisque hendrerit id ante et bibendum. Vestibulum id odio et ipsum tincidunt egestas. Etiam condimentum quam et venenatis.

Nulla et vehicula tortor. Pellentesque et nulla eget mi sodales vestibulum. Fusce bibendum, justo et egestas laoreet, felis turpis gravida nunc, in fringilla ligula justo a arcu. Etiam eu mauris vitae augue fringilla gravida. Proin id sapien et erat tincidunt eleifend in non ligula. Phasellus et vestibulum purus. Vivamus et dui vel metus eleifend egestas. Morbi et fringilla purus, et euismod augue. Sed et ultricies libero. Etiam id est sed dui iaculis laoreet. Etiam nec congue orci. Suspendisse potenti.

In et justo et risus congue tincidunt. Etiam hendrerit, velit et lacinia ultricies, libero odio iaculis tellus, non scelerisque odio ante sit amet ex. Nullam et dui quis odio tincidunt facilisis. Etiam et feugiat lectus, vel lobortis velit. Sed hendrerit congue odio nec ultricies. Etiam sed laoreet nunc. Phasellus et magna et tellus venenatis cursus. Morbi et bibendum tellus, et tempor quam. Etiam at scelerisque felis, et consectetur lorem. Sed pretium et tellus a scelerisque. Donec nec odio et elit rhoncus dapibus.`;

let wordCount = loremIpsumText.split(' ');
console.log(wordCount);
console.log(wordCount.length);

/*const etCount = loremIpsumText.match(/\bet\b/g).length;

console.log('Number of words:', wordCount);
console.log("Number of times 'et' appears:", etCount);*/
