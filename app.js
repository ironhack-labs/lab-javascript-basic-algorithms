const hacker1 = "Gil";
console.log(`The driver name is ${hacker1}.`);
const hacker2 = "Gil";
console.log(`The navigator name is ${hacker2}`);

hacker1.length > hacker2.length
  ? console.log(`The driver has the longest name`)
  : hacker2.length > hacker1.length
  ? console.log(`The navigator name is longer.`)
  : console.log(`Equal`);

console.log([...hacker1].join(" "));
console.log([...hacker2].reverse().join(""));

hacker1 > hacker2
  ? console.log(hacker1)
  : hacker2 > hacker1
  ? console.log(hacker2) 
  : console.log(`equal`);

const par1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let [words, etTimes] = [0, 0];
par1.split(" ").map(word => {
  words += 1;
  if (word === "et") etTimes += 1;
});
console.log(`Total words: ${words}, total 'et': ${etTimes}`);
