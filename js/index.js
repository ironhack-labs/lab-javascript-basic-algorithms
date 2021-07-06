/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = 'luis';

console.log(`the drivers name is ${hacker1}`);

let hacker2 = 'clara';

console.log(`the navigators name is ${hacker2}`);

/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters `
  );
} else if (hacker2.length > hacker2.length) {
  console.log(
    `${hacker2} has the longest name, it has ${hacker2.length} characters `
  );
} else {
  console.log(
    `Wow, you both have equally long names: ${hacker1.length} characters`
  );
}

/* Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" */
for (let i = 0; i <= hacker1.length; i++) {
  console.log(
    `${hacker1.toUpperCase().charAt(0)} ${hacker1
      .toUpperCase()
      .charAt(1)} ${hacker1
      .toUpperCase()
      .charAt(2)} ${hacker1
      .toUpperCase()
      .charAt(3)} ${hacker1
      .toUpperCase()
      .charAt(4)} ${hacker1
      .toUpperCase()
      .charAt(5)} ${hacker1
      .toUpperCase()
      .charAt(6)} ${hacker1
      .toUpperCase()
      .charAt(7)} ${hacker1
      .toUpperCase()
      .charAt(8)} ${hacker1
      .toUpperCase()
      .charAt(9)} ${hacker1.toUpperCase().charAt(10)}`
  );
}
/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" */

for (let i = 0; i <= hacker2.length; i++) {
  console.log(
    `${hacker2.charAt(4)} ${hacker2.charAt(3)} ${hacker2.charAt(
      2
    )} ${hacker2.charAt(1)} ${hacker2.charAt(0)} `
  );
}

/*

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/


if (hacker1.slice(0) < hacker2.slice(0)) {
  console.log("The driver's name goes first");
} else if (hacker1.slice(0) > hacker2.slice(0)) {
  console.log('The navigators name goes first');
} else {
  console.log('What?! You both have the same name?');
}
