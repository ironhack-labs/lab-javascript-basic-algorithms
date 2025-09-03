// Iteration 1: Names and Input
const hacker1 = "Vera";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Yanqing";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLen = hacker1.length;
const navigatorNameLen = hacker2.length;

if (driverNameLen > navigatorNameLen) {
  console.log(
    `The driver has the longest name, it has ${driverNameLen} characters.`
  );
} else if (navigatorNameLen > driverNameLen) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorNameLen} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverNameLen} characters!.`
  );
}

// Iteration 3: Loops
let driverNameCaps = "";
let navigatorReverse = "";

for (let i = 0; i < driverNameLen; i++) {
  driverNameCaps += hacker1[i].toUpperCase();
  if (i < driverNameLen - 1) {
    driverNameCaps += " ";
  }
}

console.log(driverNameCaps);

for (let i = navigatorNameLen - 1; i >= 0; i--) {
  navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);

/*lexicographic order*/
//looking for the longest name to create a loop for the longest name
const maxLenth = Math.max(driverNameLen, navigatorNameLen);

const driverNameLowCase = hacker1.toLowerCase();
const navigatorNameLowCase = hacker2.toLowerCase();

let isDriverNameFirst = true;
let isSameNames = true;

for (let i = 0; i < maxLenth; i++) {
  if (driverNameLowCase[i] < navigatorNameLowCase[i] || !driverNameLowCase[i]) {
    isDriverNameFirst = true;
    isSameNames = false;
    break;
  }

  if (
    driverNameLowCase[i] > navigatorNameLowCase[i] ||
    !navigatorNameLowCase[i]
  ) {
    isDriverNameFirst = false;
    isSameNames = false;
    break;
  }
}

if (isSameNames) {
  console.log("What?! You both have the same name?");
} else if (isDriverNameFirst) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}
