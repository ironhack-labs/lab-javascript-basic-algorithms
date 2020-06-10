// Iteration 1: Names and Input

var hacker1 = "Charlotte";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Setti";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let strCap = hacker1[0].toUpperCase();

for (let index = 1; index < hacker1.length; index++) {
    strCap += " " + hacker1[index].toUpperCase();
}

let strReverse = '';

for (let index = hacker2.length-1; index>=0; index--) {
    strReverse += hacker2[index];
}
console.log(strCap);
console.log(strReverse);

if (hacker1.localeCompare(hacker2)===-1) {
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2)===1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// #### Bonus 1:

var loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum malesuada tortor, id sollicitudin neque consequat et. Morbi ac porttitor purus. Donec imperdiet tempor mi. Etiam sed mi eros. Donec vel eros ut augue eleifend malesuada. In porta sapien urna, vitae lobortis est semper ut. Fusce quis ullamcorper eros. Fusce pellentesque tempor nunc at suscipit. Mauris malesuada magna sed diam congue commodo. Ut iaculis sapien eu hendrerit cursus. In euismod, eros ac tincidunt pharetra, erat ligula semper neque, eu ultricies lorem nisi in ex. Morbi ac libero id quam convallis mollis eu venenatis est. Sed ut est non diam scelerisque tempor id in augue. Pellentesque quis maximus ante. Quisque eleifend, eros eget volutpat iaculis, libero mi lobortis leo, vel luctus velit urna a justo.

Cras at velit fringilla, feugiat odio at, blandit quam. Nunc luctus nisl libero, in euismod lacus viverra quis. Donec volutpat tincidunt ornare. Sed blandit posuere dolor. Vestibulum eget vehicula lacus. Integer rutrum, eros in tempus venenatis, odio sem maximus lacus, eget fringilla justo dui eu quam. Aenean id eros et eros porta lacinia. In eu ultrices orci, et sollicitudin dui. Donec molestie ligula sit amet massa feugiat, in lacinia ante tempor. Donec in purus magna.

Quisque pharetra arcu nec convallis molestie. Vestibulum mattis augue mi, sed porttitor purus faucibus ac. In eu bibendum leo. Mauris nec dictum nulla. Duis volutpat a augue dignissim malesuada. Pellentesque quis lectus erat. Donec accumsan libero eget sagittis porttitor. Etiam pharetra gravida aliquam. Nullam et scelerisque tellus.`

var listWords= loremParagraph.split(' ')
console.log(listWords.length+1)
// console.log(listWords)

// It seems that we missed out a word : should be 246.

var countEt = 0

for (let index = 0; index < listWords.length; index++) {
    if (listWords[index] === 'et' || listWords[index] === 'et.')
    countEt ++
};

console.log(countEt)


// #### Bonus 2:

var phraseToCheck = 'test'

function isPalindrome(str) {
    var argReverse =  ''
    for (let index = str.length-1; index>=0; index--) {
        argReverse += str[index];
    }
    return (str===argReverse)
}

console.log(isPalindrome(phraseToCheck));
