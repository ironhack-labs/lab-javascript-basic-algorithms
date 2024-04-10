// Iteration 1: Names and Input
let hacker1 = "Andreas";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sergio";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length){
    console.log(`the navigator hast the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, they both have equally long names, ${hacker1.length} `)
}


// Iteration 3: Loops

let driverToCapitals = '';

for (let i = 0; i < hacker1.length; i++) {
  let capitals = hacker1[i].toUpperCase();
  driverToCapitals += capitals + ' ';
}

console.log(driverToCapitals);

let navigatorToReverse = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  let toReverse = hacker2[i];
  navigatorToReverse += toReverse;
}

console.log(navigatorToReverse);


//BONUS 1 =

let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi metus, finibus non augue sed, varius euismod ligula. Vivamus gravida sem tortor, a tincidunt tortor condimentum vel. Donec eu est faucibus, fermentum purus vel, porttitor ex. Donec molestie efficitur nibh, in egestas magna ornare sed. Aliquam luctus lectus vitae arcu sollicitudin rutrum. In hac habitasse platea dictumst. Praesent vitae nisl ornare, tempus orci vel, tempus lacus. In pretium dolor venenatis, gravida libero vel, sagittis enim. In iaculis ut nulla et molestie.

Vivamus vulputate suscipit molestie. Praesent in mi hendrerit, semper dolor quis, condimentum nisl. Vestibulum hendrerit pellentesque justo, a consectetur dui efficitur ut. Suspendisse mollis, leo convallis elementum suscipit, nisi mi pulvinar elit, ut lacinia enim tellus nec sapien. Curabitur imperdiet, ex a ultricies venenatis, ligula neque vehicula diam, non interdum ipsum tellus id ligula. Sed ut justo vel felis tincidunt volutpat quis a sem. Aliquam malesuada mauris tortor, quis interdum metus convallis ac. Phasellus augue lorem, auctor sed ligula vitae, tincidunt tincidunt velit. Suspendisse potenti. Etiam tristique nulla turpis, vestibulum tincidunt mi accumsan ac. Sed nec imperdiet massa. Integer arcu mauris, euismod nec lobortis vitae, molestie at nibh. Nulla facilisi.

Nunc arcu tortor, luctus eu posuere rhoncus, eleifend at nunc. Nunc eget sodales erat, nec semper tortor. Ut eu malesuada mi. Proin eget nisi non lacus varius ornare. Quisque metus purus, viverra in fringilla dignissim, aliquet sit amet augue. In placerat eu tortor rutrum malesuada. Proin non elit urna. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt sit amet est et ornare.
`;

function wordCounter(string) {
  return console.log(`The number of words is ${string.split(' ').length}`);
}

wordCounter(longText);

//et Word 
let etWord = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i - 1] === ' ' &&
    longText[i] === 'e' &&
    longText[i + 1] === 't' &&
    (longText[i + 2] === ' ' || longText[i + 2] === ',')
  ) {
    etWord++;
  }
}

console.log(etWord);



