
// Names and Input

let hacker1 = "Jonathan";
console.log(`the driver's name is ${hacker1}`);

let hacker2 = "Josh";
console.log(`the navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `wow, you both got equally long names, your names have ${
      hacker2.length
    } characters`
  );
} else {
  console.log(
    `yo, navigator has the longest name, it has ${hacker2.length} characters`
  );
}

// Lorem ipsum generator
console.log("Driver's name");
for (let i = 0; i < hacker1.length; i++) {

  console.log(hacker1[i].toUpperCase());
}

console.log("Nav's name");
for (let i = hacker2.length -1 ; i >= 0; i--) {

  console.log(hacker2[i]);
}


if (hacker1 < hacker2) {
  console.log("The driver's name goes first")
} else if (hacker1 > hacker2) {
  console.log("yo, the navigators goes first definitely")

} else if (hacker1 === hacker2){
  console.log("what?! you both got the same name?")

}

let palindrom = prompt ("input a word to test for palindrom", "harry potter")

function checkPalindrom (palindrom) {

function checkPalindrom (palindrom) {
for (let i = 0, j =palindrom.length ; i < palindrom.length; i++, j--)

if (palindrom[i]=== palindrom[j]) {
  return true;
} else {
  return false;
}

}