let hacker1 = "Melany";
console.log("The driver's name is: " + hacker1);
let hacker2 = "Joseman";
console.log("The navigator's name is: " + hacker2);


//length compare


if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name and it has ${hacker1.length} characters.`);
}
if (hacker2.length > hacker1.length) {
  console.log(`The Navigator has the longest name and it has ${hacker2.length} characters.`);
}

if (hacker1.length < hacker2.length) {
  console.log(`The Driver has the shortest name and it has ${hacker1.length} characters.`);
}

if (hacker2.length > hacker1.length) {
  console.log(`The N
  avigator has the shortest name and it has ${hacker2.length} characters.`);
}

// same length
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`);

}

//letter by letter

let letter = "";
for (let i = 0; i < hacker1.length; i++) {
  letter += hacker1.charAt(i).toUpperCase() + " ";

}
console.log(letter)



function reverseString(str) {

  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString(letter));


//name compare

function compare(str1, str2) {
  let compareStr = str1.localeCompare(str2)
  if (compareStr == -1)
    console.log("The driver's name goes first.")

  if (compareStr == 1)
    console.log("The navigator name goes first.")

}

console.log(compare(hacker1, hacker2));