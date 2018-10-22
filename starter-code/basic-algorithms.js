// Names and Input
let hacker1 = 'alex'
  console.log(`the drivers name is ${hacker1}`)
let hacker2 = prompt("what's your name?")
  console.log(`the navigators name is ${hacker2}`)

//Conditionals
if (hacker1.length > hacker2.length){
  console.log(`driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length)
    console.log(`wow you both got equally long names, ${hacker1.length} characters`)

for (i = 0; i < hacker1.length; i++) {
  console.log(hacker1.toUpperCase());
  console.log(hacker1.split());
}

// for (i = 0; i < hacker2.length; i++) {
 // console.log(hacker2());

function reverseString(hacker2) {
    return hacker2;
}
reverseString(hacker2);

// Lorem ipsum generator