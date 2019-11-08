// Iteration 1: Names and Input
console.log(">> Iteration 1 <<");

let hacker1 = "Mario";
console.log("The driver's name is", hacker1);

let hacker2 = "Luigi";
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
console.log("\n>> Iteration 2 <<");

let msg;
if (hacker1.length > hacker2.length) {
  msg = `The driver has the longest name, it has ${hacker1.length} characters.`;
} else if (hacker1.length < hacker2.length) {
  msg = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
} else {
  msg = `Wow, you both have equally long names, ${hacker1.length} characters!`;
}

console.log(msg);

// Iteration 3: Loops
console.log("\n>> Iteration 3 <<");

function splitLetters(str) {
  let i = 0;
  let chain = str[i];

  do {
    i++;
    if (str[i] !== " ") chain += " " + str[i];
  } while (i < str.length - 1);

  return chain;
}

console.log(splitLetters(hacker1.toUpperCase()));
console.log(
  hacker2
    .split("")
    .reverse()
    .join("")
);

if (hacker1 < hacker2) {
  msg = "The driver's name goes first.";
} else if (hacker1 > hacker2) {
  msg = "Yo, the navigator goes first definitely.";
} else {
  msg = "What?! You both have the same name?";
}

console.log(msg);

// Bonus 1
console.log("\n>> Bonus 1 <<");

let lorem_chain = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut magna mi, porttitor cursus tincidunt quis, blandit mattis tellus. Mauris 
at lacinia leo, non efficitur nunc. Donec molestie augue magna, ut mollis ante 
facilisis ac. Donec auctor odio rhoncus, sollicitudin felis eu, dignissim 
nulla. Vestibulum condimentum velit ac semper interdum. Nullam blandit aliquet 
est, vitae facilisis justo. Integer nulla est, pellentesque vitae rhoncus eu, 
rhoncus in turpis. Proin neque est, vulputate eu aliquam a, lobortis eget lorem. 
Duis suscipit sodales consequat. Pellentesque imperdiet vestibulum dui vitae 
commodo. Suspendisse feugiat sit amet urna quis commodo. In feugiat ullamcorper 
diam, et faucibus ex. Sed mi augue, condimentum et scelerisque vitae, viverra 
non metus. Cras in velit et orci lobortis euismod in vitae tellus. Cras magna 
lorem, facilisis vitae turpis in, mattis finibus mi. Morbi euismod velit in ante 
semper, vitae ultricies felis lobortis. Cras diam mauris, finibus a nisl nec, 
egestas ornare orci. Nam ligula leo, lacinia in blandit sed, ultrices at libero. 
Vivamus gravida ante a sem commodo cursus. Proin sit amet condimentum turpis, 
maximus ultricies nunc. Aliquam sit amet porttitor mi. Integer lacinia erat nec 
ligula eleifend, vitae vulputate tellus venenatis. Morbi consectetur est quis 
magna semper, vel malesuada erat malesuada. Mauris in quam ac libero consectetur 
porttitor. Sed consectetur, libero at porttitor ullamcorper, eros lorem rhoncus 
metus, vel tempor dui nisi quis nunc. Fusce lorem tortor, aliquet eu suscipit a, 
iaculis a urna. In et consectetur felis. Suspendisse luctus dui ac imperdiet vehicula. 
Sed placerat accumsan nisi in luctus. Cras dapibus mauris vitae eros dignissim, vel 
rutrum urna sodales. Vivamus eu sapien sed odio tristique vestibulum. Donec malesuada 
euismod condimentum. Mauris a odio eget odio accumsan finibus. Curabitur fringilla 
pellentesque ullamcorper. Praesent tincidunt ac ipsum sed mollis. Aenean et posuere 
mi, nec porttitor augue. Praesent pellentesque arcu a malesuada facilisis. Duis 
velit risus, eleifend quis magna at, consectetur lacinia ipsum. Suspendisse neque 
risus, tempor ut ultricies at, tempus nec enim. Praesent varius iaculis vulputate. 
Etiam arcu quam, lobortis et eros eget, volutpat hendrerit justo. Nunc eget vestibulum 
mi, a sollicitudin ipsum. Praesent et ipsum sagittis, sodales lacus a, volutpat sem.`;

function countWords(chain) {
  return chain.split(" ").length;
}

function countSubstring(chain, substr) {
  let count = 0;
  chain = chain.split(" ");
  
  for (let i = 0; i < chain.length; ++i) {
    if (chain[i] === substr) count++;
  }

  return count;
}

console.log("The number of words are:", countWords(lorem_chain));
console.log(`The word 'et' it's repeats ${countSubstring(lorem_chain, "et")} times`);

// Bonus 2
console.log("\n>> Bonus 2 <<");

let chain_forward = prompt("Introduce a chain of characters: ");