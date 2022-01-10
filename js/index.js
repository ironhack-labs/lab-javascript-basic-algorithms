// Iteration 1: Names and Input
const hacker1 = "Olayinka";
console.log("The driver’s name is " + hacker1)
const hacker2 = "Jan"
console.log("The navigator’s name is " + hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
}
//Iteration 3: loops
// 3.1

let nameCapsSpaced = ""
for (let i=0; i<hacker1.length; i++){
  nameCapsSpaced += ((hacker1[i]).toUpperCase()+ " ")
}
console.log(nameCapsSpaced)
//3.2
let nameReversed = ""
for (let i=(hacker2.length-1); i>=0; i--)
{
nameReversed += hacker2[i]}
console.log(nameReversed)
//3.3
  if(hacker1.slice(0, hacker1.length) < hacker2.slice(0, hacker2.length) ){
    console.log("the driver goes first")
  }
  else if(hacker1.slice(0, hacker1.length ) > hacker2.slice(0, hacker2.length) ){
    console.log("Yo, the navigator goes first")
  }
  else{
    console.log("what?! You both have the same name?")
  }
