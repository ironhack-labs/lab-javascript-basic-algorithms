// Iteration 1: Names and Input 

// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

var hacker1 = "Kike";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Juan";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name. It has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
switch (true) {
  case hacker1.length> hacker2.length:
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`);
    break;
  case hacker1.length <hacker2.length:
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    break;
  default:
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

console.log(hacker1.split('').join(' ').toUpperCase())

var navigatorReverse = []
for(let i=hacker2.length-1; i>=0; i--){
  console.log(i)
  navigatorReverse.push(hacker2[i])
}

console.log(navigatorReverse.join('') )

var names = [hacker1, hacker2];
console.log(names)

names.sort();
console.log(names)

if ( hacker1.localeCompare(hacker2) === -1){
  console.log(`The ${hacker1} name goes first.`)
}
else if ( hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the ${hacker2} goes first definitely.`) 
}
else {
  console.log(`What?! You both have the same name?`)
}