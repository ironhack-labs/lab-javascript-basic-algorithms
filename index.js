//iteration 1
let hacker1 = "Nawel";
let hacker2 = "Abraham";
console.log(`the driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);
// iteration 2
let hacker1length = hacker1.length;
let hacker2length = hacker2.length;
if (hacker1length > hacker2length) {
  console.log(
    `The driver has the longest name, it has  ${hacker1length}  characters.`,
  );
} else if (hacker2length > hacker1length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2length} characters `,
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker2length}  characters!`,
  );
}
//iteration 3
/* 3.1 */
let HACKER1 = hacker1.toUpperCase();
let spacedName = "";
for (let i = 0; i < HACKER1.length; i++) {
  spacedName += `${HACKER1[i]} `;
}
console.log(spacedName);
/* 3.2  */
let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const character = hacker2[i];
  reverseName += character;
}

console.log(reverseName);
/* 3.3 */
const order = hacker1.localeCompare(hacker2);
if (order > 0) {
  console.log("The navigator's name goes first.");
}
else if (order < 0 ) {
  console.log("The driver's name goes first.");
}
else {
    console.log("What?! You both have the same name?");

}