// Iteration 1: Names and Input
let hacker1 = "Juli";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alba";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`Driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length){
    console.log(`Navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!!!`);
  };

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
let nameCapitals;
for (let i = 0; i < hacker1.length; i++) {
  if (i === 0) {
    nameCapitals = hacker1[i] + " ";
  } else {
    nameCapitals += hacker1[i] + " ";
  }
}
console.log(nameCapitals.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order.
let navigatorsNameReverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorsNameReverse += hacker2[i] ;
}
console.log(navigatorsNameReverse);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for(let i = 0; i < alphabet.length; i++){
  if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
  }
  if(alphabet[i] === hacker1[0]){
    console.log("The driver's name goes first.");
    break;
  } else if (alphabet[i] === hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");
    break;
  }else{
    continue;
  }
};

// Bonus 1: Make your program count the number of times the Latin word et appears
let string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat augue, vestibulum eget urna quis, finibus suscipit metus. Nam vulputate laoreet lorem, sed euismod dui ornare ut. Nunc at aliquam mauris, sed hendrerit augue. Vestibulum vitae ante tincidunt diam vestibulum auctor id vel augue. Nullam auctor, ipsum non finibus interdum, nunc turpis feugiat leo, vel tincidunt tortor odio vestibulum leo. Praesent ullamcorper sapien non convallis aliquet. Vestibulum ac diam in nulla tempus sagittis eget sed enim. Quisque sem sapien, rhoncus eu blandit vel, fermentum sed lectus.

Maecenas ac neque facilisis, egestas eros quis, dictum libero. Aliquam scelerisque vulputate quam, volutpat posuere risus imperdiet in. Praesent pulvinar id dolor et luctus. Maecenas posuere ac nisl sed convallis. Fusce id porttitor ante. Nulla facilisi. Etiam sollicitudin eros in dictum venenatis. Sed euismod, nisi sed tincidunt suscipit, leo ante luctus nisl, sed sollicitudin augue orci nec erat. Nullam non odio id lectus aliquam aliquam. Donec fermentum porttitor massa et vestibulum. Etiam et leo lectus. Nulla pellentesque libero ut odio tempor mollis. Cras ultrices lectus sed rhoncus suscipit.

Fusce varius pharetra mauris iaculis ullamcorper. Mauris neque felis, scelerisque nec tempus ut, fringilla ac erat. Praesent vel sagittis libero, a luctus turpis. Nulla quis tincidunt velit, et tempus dolor. Etiam scelerisque sem quis arcu aliquam rutrum. Aenean tortor urna, finibus quis nisi a, feugiat rhoncus enim. Sed congue turpis in nunc pulvinar, nec pharetra felis efficitur.`;

let searchFor = 'et';
let count = 0;
let pos = string.indexOf(searchFor);

while (pos > -1) {
    ++count;
    pos = string.indexOf(searchFor, ++pos);
}

console.log(count);

//Bonus 2: Write a code that will check if the value we assigned to this variable is a Palindrome. 
let phraseToCheck = "Amor, Roma";
let palindromeLeft = phraseToCheck.split(" ").join('').replace(',', '').toLowerCase();

let palindromeRight = "";
for (let i = palindromeLeft.length-1; i >= 0; i--) {
  palindromeRight += palindromeLeft[i].toLowerCase();
}

if (palindromeLeft === palindromeRight){
  console.log(true);
} else {
  console.log(false);
};
