// Iteration 1: Names and Input

let hacker1 = "Gustavo";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Luis";
console.log(`The navigators name is ${hacker2}`);

console.log('Comprobación:', hacker1.length);
console.log('Comprobación:', hacker2.length);

// Iteration 2: Conditionals

let longerName = (hacker1, hacker2) => {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker2 > hacker1) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
    );
  } else {
    console.log(
      `Wow, you both have equally long names ${hacker1.length} characters!`
    );
  }
};

longerName(hacker1, hacker2);

// Iteration 3: Loops

const str = "john";
const hackerName = (str) => {
  console.log(str);
  console.log(str.toUpperCase());
  console.log(str.toUpperCase().split(``));
  console.log(str.toUpperCase().split(``).join(""));
  console.log(str.toUpperCase().split(``).reverse().join(""));
};
const parteTres = [hacker1, hacker2];
const parteTres1 = parteTres.sort();
console.log(`${parteTres1[0]} ,this is the first name`);
