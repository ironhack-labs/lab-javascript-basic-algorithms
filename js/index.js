// Iteration 1: Names and Input

let hacker1 = "Miguel";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Rosa";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {
    console.log ( `The driver has the longest name, it has ${hacker1.length} characters.` )
  } else if ( hacker2.length > hacker1.length ) {
    console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log( `Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// 3.1

function splitDrivName(driver) {
  var drivArr = driver.split("");
  var drivStr = drivArr.join(' ');
  var drivUpper = drivStr.toUpperCase();
  return drivUpper;
}
console.log(splitDrivName(hacker1))

// Diffeent method
//console.log(hacker1.split('').join(' ').toUpperCase())

// 3.2

function reversedName(nav) {
let reversedName = "";
for (let i = nav.length - 1; i >= 0; i--) {
reversedName += nav[i];
  }
  return reversedName;
}
console.log(reversedName(hacker2))
/*
//Different method that I found
function reverseNavName(nav) {
   var navArr = nav.split("");
   var reversedNavArr = navArr.reverse();
   var reversedNavStr = reversedNavArr.join("");
   return reversedNameStr;
}

console.log(reverseNavName("Rosa"));
*/

// 3.3
// console.log ('a' < 'b') = true;
if ( hacker1 < hacker2 ) {
  console.log("The driver's name goes first")
} else if ( hacker2 < hacker1 ){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}