// Iteration 1: Names and Input
let hacker1 = "Andrés"
console.log(`"The driver's name is ${hacker1}`)
let hacker2 = "Google chrome"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  
  } else{
    if(hacker1.length === hacker2.length){
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
    }
  }
// Iteration 3: Loops


let hackerSeparated = ""
let hacker2Separated = ""

hacker1 = hacker1.toUpperCase()
console.log(hacker1)
for(let i = 0; i< hacker1.length ; i++){
  hackerSeparated += hacker1[i]+" "; 
  
}

console.log(hackerSeparated)

for(let i = hacker2.length-1; i>=0; i--){
  hacker2Separated += hacker2[i]
}
  console.log(hacker2Separated)

let result = hacker1.localeCompare(hacker2) //-1
let result2 = hacker2.localeCompare(hacker1) //1
let result3 = 0;

if(hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.")
} else if( hacker2.localeCompare(hacker1) === 0){
  console.log("What?! You both have the same name?")
} else{
  console.log("Yo, the navigator goes first definitely.")
}
