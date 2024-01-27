// Iteration 1: Names and Input
let hacker1 = 'Peter';
console.log("The driver's name is", hacker1);

let hacker2 = 'Lisa';
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has', `${hacker1.length}`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has',
    `${hacker2.length}`
  );
} else {
  console.log('Wow, you both have equally long names', `${hacker1.length}`);
}

// Iteration 3: Loops

//3.1

/* i declare a empty variable, I check every char and add it with space to the variable, I log the uppercase variable       */
let capName = '';
for (let char of hacker1) {
  capName = capName + char + ' ';
}
console.log(capName.toUpperCase());
//3.2
// initialize a new variable where I will save the reversed string
let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  //add the character to the variable
  reversed += hacker2[i];
}
console.log(reversed);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first, definitely');
} else {
  console.log('What?! You both have the same name?');
}
//BONUS
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, justo eu dapibus feugiat, nibh nibh aliquam turpis, ultricies efficitur urna nisl quis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam iaculis ullamcorper enim. Nam ut lacus et lectus bibendum iaculis ut et lorem. Cras porta elit nec mi pellentesque rhoncus fringilla quis ex. Nunc quis tincidunt odio, tincidunt volutpat ex. Cras quis feugiat magna, vel pellentesque magna. Pellentesque convallis mi in felis sodales, quis lobortis dolor aliquam. Donec scelerisque sit amet ante eget ornare \nNunc quis neque nibh. Mauris id tincidunt ante, a fringilla dui. Nunc lacus ante, commodo eu euismod ut, fringilla sed ex. Donec suscipit ante sem, quis dictum leo tempus in. Aliquam ultricies massa at nisi facilisis luctus. Nunc rutrum, purus nec gravida viverra, augue quam vehicula leo, non accumsan dui magna et enim. Nam ligula lacus, placerat eu odio non, commodo dapibus quam. Nunc dapibus ullamcorper libero, vel blandit purus commodo vitae. Nulla tempus lectus in libero commodo, vitae euismod augue tincidunt. Ut venenatis finibus mauris non tincidunt.\nMaecenas vitae maximus nunc, eget eleifend enim. Nulla bibendum odio ac nisl aliquet molestie. Donec tincidunt sem dui, ut dictum metus varius vitae. Pellentesque fermentum, augue vitae egestas venenatis, nunc quam mollis lorem, non sodales sem nibh laoreet ligula. Pellentesque blandit dignissim justo, in eleifend mi consectetur ac. Nullam sed luctus dui. Fusce volutpat tincidunt porta. Fusce varius euismod euismod.';

let count = 0;
let inTheWord = false;
for (let i = 0; i < longText.length; i++) {
  let char = longText[i];

  if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
    if (inTheWord) {
      count++;
      inTheWord = false;
    }
  } else {
    inTheWord = true;
  }
}
if (inTheWord) {
  count++;
}
console.log(count);
