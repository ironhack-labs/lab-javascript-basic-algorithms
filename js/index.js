// Iteration 1: Names and Input
const hacker1 = "Juan"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Chrome"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops
const hacker1='Pedrito'
var result =""
for(let i = 0; i <= hacker1.length -1; i++){
    result += hacker1[i].toUpperCase() + " ";
}
result = result.substring(0, result.length-1);
console.log(result);

const hacker2='Chrome'
var result2 =""
for(let i = hacker2.length -1; i >= 0; i--){
    result2 += hacker2[i] ;
}
result2 = result2.substring(0, result2.length);
console.log(result2);

if(hacker1<hacker2){
    console.log("The driver's name goes first.")
  }else if(hacker2<hacker1){
    console.log("Yo, the navigator goes first definitely.")
  }else{
    console.log("What?! You both have the same name?")
  }