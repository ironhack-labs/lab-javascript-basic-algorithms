
let hacker1 = 'Judit'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Estefania'
console.log (`The navigator's name is ${hacker2}`)

function getLargestName(name1, name2){
  
  if (name1.length > name2.length) {
    console.log(`The driver has the longest name, it has ${name1.length} characters.`)
  } else if (name1.length < name2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${name2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names`)
  }
  }


getLargestName(hacker1, hacker2)








function printCharacters(name1) {
for (let i = 0; i<name1.length; i++) {
}
  console.log (name1.toUpperCase().split("").join(" "))

}

printCharacters(hacker1)








function getReverseOrder(name2) {

for (let i = 0; i<name2.length; i++){
}
  console.log (name2.split("").reverse().join(""))
}

getReverseOrder(hacker2)






function getOrderLexicographic (name1,name2){
  
}
