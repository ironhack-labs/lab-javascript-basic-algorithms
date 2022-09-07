// Iteration 1: Names and Input
//
let hacker1 = 'Jose';
let hacker2 = 'Farzin';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    'The driver has the longest name, it has ' + hacker1.length + ' characters.'
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      hacker2.length +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' + hacker1.length + ' characters!'
  );
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split(''));

console.log(hacker2.split('').reverse().join(''));

/* if ('hacker2'.localeCompare('hacker1') === 1) {
    console.log("The driver's name goes first.")
  }else if ('hacker1'.localeCompare('hacker2') === -1){
    console.log("Yo, the navigator goes first definitely.")
      }else {
        console.log("What?! You both have the same name?")
                 }*/

let arr = [hacker1, hacker2];
arr.sort();
console.log(arr);
if (arr[0] === arr[1]) {
  console.log('What?! You both have the same name?');
} else if (arr[0] === hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else if (arr[0] === hacker1) {
  console.log("The driver's name goes first.");
}
