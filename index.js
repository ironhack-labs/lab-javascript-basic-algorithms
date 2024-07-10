// Iteration 1: Names and Input


/* ### Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name. <br>
  1.2 Print `"The driver's name is XXXX"`.<br>
  1.3 Create a variable `hacker2` with the navigator's name.<br>
  1.4 Print `"The navigator's name is YYYY"`.
*/


// 1.1
const driverName = "Carlos";

// 1.2
console.log(`The driver's name is ${ driverName }`);

// 1.3
const navigatorName = "Sebastião";

// 1.4
console.log(`The navigator's name is ${navigatorName}`);




// Iteration 2: Conditionals
/*### Iteration 2: Conditionals

  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
    - `The driver has the longest name, it has XX characters.` or <br>
    - `It seems that the navigator has the longest name, it has XX characters.` or <br>
    - `Wow, you both have equally long names, XX characters!`.
*/

const driverNameLength = driverName.length;
console.log(`${driverNameLength}`);

const navigatorNameLength = navigatorName.length;
console.log(`${navigatorNameLength}`);

const equalLongNames = "IronHack";

const equallyLongNames = equalLongNames.length;
console.log(`${equallyLongNames}`);

if (driverNameLength > navigatorNameLength) {
console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
}
else if (navigatorNameLength > driverNameLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`)
    } 
else {
    console.log(`Wow, you both have equally long names, ${equalLongNames.length}`);
}






// Iteration 3: Loops

/*
### Iteration 3: Loops

  3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

  3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.` <br>
- `Yo, the navigator goes first, definitely.` <br>
- `What?! You both have the same name?`
*/


// 3.1

let i = driverName

for (let i = 0; i < driverName.length; i++) {
    const char = driverName[i]
    console.log(char);
}
