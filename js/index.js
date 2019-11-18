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


// Iteration 3: Loops

let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += `${hacker1[i].toUpperCase()} `;
}
console.log(driver.trim());

let navigator = "";
for (let i = hacker2.length -1 ; i>=0 ; i--){
  navigator += hacker2[i];
}

console.log(navigator);


if (hacker1<hacker2){
  console.log("The driver's name goes first")
 } else if (hacker1.toLowerCase()===hacker2.toLowerCase()){
      console.log("What?! You both have the same name?");
    }else{
      console.log("Yo, the navigator goes first definitely.")
 }
  