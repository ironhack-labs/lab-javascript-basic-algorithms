// Iteration 1: Names and Input
console.log("I'm ready!");
var hacker1="Francesca"
console.log(`Driver's name is ${hacker1}.`)
var hacker2="Joseph"
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
// Iteration 3: Loops
let driversName=""
for (i=0; i<hacker1.length;i++){
  driversName = driversName + hacker1[i].toUpperCase() + " "
  console.log(driversName)
}

let navigatorsName=""
let x=hacker2.length-1
while (x>=0){
  navigatorsName = navigatorsName + hacker2[x].toLowerCase()
  x--
}
console.log(navigatorsName)

let arrayNames = [hacker2,hacker1]
function compareNames(a,b){
  a.toLowerCase()
  b.toLowerCase()
  if (a>b){
    return 1;
  } else if (b>a){
    return -1
  } else {
    return 0
  }
}
arrayNames.sort(compareNames)
if (arrayNames[0]=hacker1){
  console.log("The driver's name goes first.")
} else if (arrayNames[0]=hacker2){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus1

var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(LoremIpsum.split(' ').length)
var count=LoremIpsum.match(/et/g) || []
console.log(count.length)