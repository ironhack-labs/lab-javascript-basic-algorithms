// Iteration 1: Names and Input
console.log("I'am ready");

// <<<<<<<<<<<<<<<<<<<<<<<<<< Iteration 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hacker1 = "Frank";
const hacker2 = "Juliane";

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// <<<<<<<<<<<<<<<<<<<<<<<< Iteration 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}  characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${
      hacker2.length
    } characters.`
  );
}

//<<<<<<<<<<<<<<<<<<<< Iteration 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += `${hacker1[i].toUpperCase()} `;
}
console.log(driver.trim());







// Iteration 2: Conditionals


// Iteration 3: Loops