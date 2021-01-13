// Iteration 1: Names and Input

let hacker1 = "John"
let hacker2 = "Al"

console.log(`"The driver's name is ${hacker1}"`)

console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

let lenDriver=hacker1.length
let lenNavigator=hacker2.length

if(lenDriver > lenNavigator ){

  console.log(`The driver has the longest name, it has ${lenDriver} characters.`)


}else if(lenNavigator > lenDriver){

  console.log(`It seems that the navigator has the longest name, it has ${lenNavigator} characters.`)

}else{
  console.log(`Wow, you both have equally long names, ${lenDriver} characters!`)

}
// Iteration 3: Loops

hackerCapitalLetters = hacker1.toUpperCase()

let capitalString =""
for(let i=0;i<lenDriver;i++){
  capitalString+=hackerCapitalLetters[i]
  if(i===lenDriver-1){break}
  capitalString+=' '
  }

console.log(`"${capitalString}"`)

reverseString=""
for(let i=lenDriver-1;i>=0;i--){
  reverseString +=hacker1[i]
}
console.log(`"${reverseString}"`)