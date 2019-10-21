let hacker1 = "Nico"
hacker1.toUpperCase()
console.log(`the driver's name is ${hacker1}`)
var splitString = hacker1.split("");


let hacker2 = "Nico"

console.log(`the navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length){
console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length){
  console.log(`wow you both have equally long names, with ${hacker1.length} characters.`)
}
let arr1 =hacker1.split("").join(" ")
console.log(arr1.toUpperCase())

let arr2 = hacker2.split("")
console.log(arr2.reverse().join(""))

if (hacker1.localeCompare(hacker2)===1){
  console.log("yo the navigators name goes first definitely")
}
else if (hacker1.localeCompare(hacker2)=== -1){
  console.log("the driver's name goes first definitely")
}
else if(hacker1.localeCompare(hacker2)=== 0){
  console.log("What?! you both got the same name.")
}