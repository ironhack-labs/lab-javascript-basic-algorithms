// Iteration 1: Names and Input
let hacker1 = "Graziella";
console.log("the driver's name is ", hacker1);

let hacker2 = "Graziella";
console.log("the navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let uppercasedHacker1 = hacker1.toUpperCase();
console.log(uppercasedHacker1);
let result = "";
for (let index = 0; index < hacker1.length; index++) {
    result += hacker1[index].toUpperCase() +" ";
}
console.log(result);
let result1 ="";
for (let index = hacker2.length-1; index >= 0; index--) {
    result1 += hacker2[index];
}

console.log(result1);


if (hacker1.length > hacker2.length) {
    for (let index = 0; index < hacker1.length; index++) {
      let currentLetter1 = hacker1[index];
      let currentLetter2 = hacker2[index];
      if (currentLetter1 > currentLetter2) {
          console.log("Yo, the navigator goes first definitely.");
          break;
      }else if (currentLetter1 < currentLetter2){
          console.log("The driver's name goes first.");
          break;
      }else if(currentLetter1 === currentLetter2){
          continue;
      }else{
        console.log("What?! You both have the same name?");
      }
    }
}





