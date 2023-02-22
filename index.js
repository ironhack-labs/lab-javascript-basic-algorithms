const hacker1 = "Chris"
const hacker2 = "Alex"

console.log("The drivers name is " + hacker1 )
console.log("The navigators name is " + hacker2)

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has  ${hacker1.length}  characters.`)
}else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name it has ${hacker2.length} characters`)
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

let hacker1Name = ""
let hacker2Name = ""
for (let i = 0 ; i < hacker1.length ; i++ ){
  hacker1Name += hacker1[i].toUpperCase()+" " 
} console.log(hacker1Name);

for (let i = hacker2.length-1 ; i >= 0 ; i-- ){
  hacker2Name += hacker2[i]
} console.log(hacker2Name)


if (hacker1 < hacker2){
  console.log("The driver's name goes first.")
} else if(hacker1 > hacker2){
  console.log("Yo, the navigator goest first definitely")
}else{
  console.log("What?! You both have the same name?")
}