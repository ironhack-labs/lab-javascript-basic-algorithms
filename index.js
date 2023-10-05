// Iteration 1: Names and Input
let hacker1 = "Chris";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Aelita";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let result1 = "";
for(let i = 0; i < hacker1.length; i++) {
  result1 += hacker1[i].toUpperCase() + " "
  console.log(result1);
}

let result2 = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  result2 += hacker2[j]
  console.log(result2);
}

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin risus vel cursus dapibus. Ut commodo, dui id commodo facilisis, lacus ligula commodo metus, in iaculis metus augue quis mi. Etiam et laoreet ante. Vivamus dapibus consectetur dolor ut tristique. Cras magna leo, molestie in interdum maximus, consequat non risus. Pellentesque feugiat elit vitae magna molestie dignissim in sit amet arcu. Maecenas facilisis diam vitae nibh suscipit, sit amet vehicula erat blandit. Donec odio lacus, faucibus eu pharetra eu, rhoncus vel leo. Vivamus eleifend est risus, non vestibulum magna sodales sed. Praesent dapibus, erat vel tincidunt lacinia, odio diam suscipit metus, id viverra purus risus at sem. 

Suspendisse ac ex viverra, sagittis neque vitae, pellentesque nunc. Morbi dignissim felis nunc, at mollis quam pellentesque sed. Duis aliquet nisl condimentum nisl vulputate, a euismod justo porttitor. Aliquam lobortis iaculis nulla, eu iaculis augue pretium in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum commodo turpis vitae iaculis. Aenean luctus turpis id justo tempor, ac malesuada ipsum laoreet. Vivamus neque erat, ullamcorper eu dignissim pulvinar, semper a sapien. Fusce quis ullamcorper metus, vel tempus odio. 

Donec consectetur diam vitae nisl tristique consectetur. Praesent ut rhoncus mauris, feugiat suscipit metus. Nulla tincidunt ante nec enim vulputate, in tempor eros venenatis. Nulla facilisi. Suspendisse nec pharetra est, sed semper felis. Aenean enim turpis, consequat a diam in, tincidunt viverra ipsum. Nulla aliquam varius tellus non tempus. Duis nisl quam, accumsan dapibus dui vitae, mattis eleifend ex. Sed hendrerit mollis cursus. Integer facilisis et nisl in elementum. Sed rhoncus sed nibh a fermentum. Ut a sem vel lectus finibus iaculis. Morbi fermentum maximus ipsum, eget laoreet purus faucibus nec.`

let counting = longText.split(" ").length;
console.log(`There are ${counting} words in the text`)

let countLatinWord = 0
for (l = 0; l < longText.length; l++) {
  const latinWord = longText[l] + longText[l +1]
  if (latinWord === "et") {
    countLatinWord++;
  }
}
console.log(`The latin word "et" appears ${countLatinWord} times`)


// Bonus 2

