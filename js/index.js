//ITERATION 1

let hacker1 = "Benjamin"; //driver
let hacker2 = "Mathias"; //navigator

console.log("the navigator name is " + hacker2);

//ITERATION 2

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

//ITERATION 3

// let name="";

// for (let i = 0; i < hacker1.length; i++) {

//   name += hacker1[i]+ " " ;
// }

// console.log(`"${name.toUpperCase()}"`);

let name = "";
let realName = "";
let reverseName = "";

for (let i = 0; i < hacker1.length; i++) {
  name += hacker1[i] + " ";
}

for (let j = 0; j < name.length - 1; j++) {
  realName += name[j];
}

console.log(`"${realName.toUpperCase()}"`);

for (let k = hacker1.length - 1; k >= 0; k--) {
  reverseName += hacker1[k];
}
console.log(reverseName);
