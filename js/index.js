// Iteration 1: Names and Input
let hacker1 = 'Juan';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Mélusine';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

let driverLength = hacker1.length;

let navigatorLength = hacker2.length;

if (driverLength > navigatorLength){
  console.log(`The driver has the longest name, it has ${driverLength} characters. `)
} else if (driverLength < navigatorLength
) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters .`)
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!.`)
};

// Iteration 3: Loops
// Iteration 3.1
let result = []
for (let i=0; i < hacker1.length; i++){

if (i!==hacker1.length-1){
result.push(hacker1[i].toUpperCase() + " "); 
} else {result.push(hacker1[i].toUpperCase());
}
}
console.log(result.join("")); 

// Iteration 3.2
let result2 = []
for (let j=hacker2.length-1; j >= 0; j--) {
result2.push(hacker2[j])
};
console.log(result2.join(""));

// Iteration 3.3

if (hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2)===1){
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1.localeCompare(hacker2)===0){
  console.log(`What?! You both have the same name?`);
}

// BONUS 1

let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec tellus eu velit convallis porttitor. Phasellus malesuada ultricies leo eu mattis. Mauris facilisis tempor lectus sit amet sagittis. Cras blandit fringilla erat, ac varius ipsum imperdiet a. Curabitur tincidunt, quam egestas ultricies tempor, eros ante faucibus augue, nec condimentum odio quam non magna. Nunc suscipit at justo quis sagittis. Nunc fringilla est sed est maximus, et lacinia purus porta. Nulla commodo venenatis magna at venenatis. Aliquam vel sapien non sem blandit hendrerit eu et diam. Vestibulum nisi enim, lobortis eget malesuada vel, aliquam ut augue. Cras erat magna, vehicula sed nibh et, bibendum facilisis quam. Maecenas lacus sapien, venenatis quis pellentesque non, ultricies sed leo. Duis felis lorem, scelerisque et maximus nec, interdum quis nibh. Etiam convallis, nisl sed vulputate ultrices, tortor quam fringilla est, varius euismod nibh nulla eget elit.

Vestibulum dignissim libero id aliquam venenatis. Phasellus tristique risus sem, et iaculis dolor ornare ac. Cras at erat vehicula, lobortis magna eget, egestas nisl. Vivamus in eros sed risus blandit eleifend at et lacus. Cras fermentum vel nibh id faucibus. Nam lectus dolor, vestibulum eget massa quis, tempor dignissim tortor. Phasellus sit amet posuere nisi, eget efficitur lorem. In pellentesque ac velit nec tincidunt. Curabitur egestas bibendum libero, at pharetra leo dictum vitae. Fusce sollicitudin, sapien vitae pharetra placerat, elit urna pharetra quam, eu pulvinar elit dui in velit. Nam cursus rutrum vulputate. Nullam commodo tortor quis sem tempor, nec facilisis sapien posuere. Sed eget nisi ut odio pulvinar accumsan.

Donec ut consectetur sapien. Sed rutrum enim a tellus molestie suscipit. Aenean accumsan condimentum nisl, at pellentesque erat dictum vel. Fusce sed libero tortor. Cras in magna consequat, blandit mi non, iaculis justo. Donec ac enim elit. Donec eleifend tortor arcu, non maximus ante lobortis at. Mauris eu dapibus nunc. Suspendisse volutpat, turpis eget scelerisque finibus, lacus nunc gravida tortor, eget aliquam sem orci sit amet ante. Curabitur nec luctus dolor. Donec eu venenatis turpis. Integer luctus enim sed purus volutpat, non faucibus mi suscipit. Donec laoreet ante vitae fringilla faucibus. Nunc a massa libero. Cras finibus ullamcorper augue, vitae placerat nunc sagittis a.`

let totalWords = 0

for (let h=0; h < loremParagraph.length; h++) {
  if (loremParagraph[h] === " ") {
    totalWords++;
  }
}
console.log(totalWords)

let loremWords = loremParagraph.split(" ");

let totalEt = 0;

for (let k=0; k < loremWords.length; k++){
  if (loremWords[k] === "et") {
    totalEt++;
  }
};
console.log(totalEt);

