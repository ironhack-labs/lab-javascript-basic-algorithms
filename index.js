// Iteration 1: Names and Input
const hacker1 = "Eshed";
console.log(`"The driver's name is ${hacker1}.`);
const hacker2 = "yuval"
console.log(`"The driver's name is ${hacker2}.`);
// Iteration 2: Conditionals

function longerName(h1,h2) {
  if (hacker1.length > hacker2.length){
    console.log(`the hacker name ${h1} more longer`);
  }else if (hacker1.length < hacker2.length){
    console.log(`the hacker name ${h2} more longer`);
  }
   else  {
    console.log(`Wow, you both have equally`);
  }
}

console.log(longerName(hacker1,hacker2));

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(' '));
console.log("reverse=>", hacker2.split('').reverse().join(""));

function whoGoesFirst (a,b) {
  if (a.localeCompare()) {
    console.log(a);
  }
  else if (b.localeCompare()) {
    console.log(b);
  } else {
    console.log(`Wow, you both have equally`);

  }
}
whoGoesFirst(hacker1,hacker2)
//bonus
