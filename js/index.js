//console.log("I´m ready!")

let hacker1 = "Ana"
  console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Tobias";
    console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}
else if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)
}

 
    
let driverName = hacker1.split("").join(" ");
let upperCased = driverName.toUpperCase();
console.log(upperCased);


function reverseNav(hacker2) {
  let reverseHacker = " ";
  for (var i = hacker2.length - 1; i >= 0; i--) {
      reverseHacker += hacker2[i];
  }
  return reverseHacker
  
}
let finalReverse = reverseNav(hacker2)
console.log(finalReverse)


let driverFirstLetter = hacker1.charAt(0)
let navigatorFirstLetter = hacker2.charAt(0)
if (driverFirstLetter === navigatorFirstLetter ){
  console.log("What?! You both have the same name?")
}
else if(driverFirstLetter < navigatorFirstLetter ){
  console.log("The driver's name goes first")
}
else if(driverFirstLetter > navigatorFirstLetter ){
  console.log("Yo, the navigator goes first definitely.")
}
