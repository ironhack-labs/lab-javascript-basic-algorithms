// iteration1 //


const hacker1 = "pacoflix"
const hacker2 = "sajhjnti"


console.log(`the driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);


// iteration2 //

if (hacker1.length > hacker2.length ) {
   console.log(`The driver has the longest name it has ${hacker1.length} characters.`)
  
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
 
  console.log(`- What?! You both have the same name?`) }   

// iteration3 //



let nameWithSpace = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    nameWithSpace = nameWithSpace + hacker1[i].toUpperCase()
  } else {
    nameWithSpace = nameWithSpace + hacker1[i].toUpperCase() + " "
  }
}

let reverseName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i === 0) {
    reverseName = reverseName + hacker1[i].toUpperCase()
  } else {
    reverseName = reverseName + hacker1[i].toUpperCase() + "-"
  }
}

console.log(reverseName)


