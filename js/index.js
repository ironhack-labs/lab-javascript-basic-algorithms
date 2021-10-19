console.log("I'm ready!");
//iteration1
let hacker1= "Dimitri"
console.log (`the driver's name is ${hacker1}.`)
let hacker2= "Pablov"
console.log (`The navigator's name is ${hacker2}.`)
//iteration2: Conditionals
console.log(`${hacker1.length}`)
console.log(`${hacker2.length}`)

if (hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has 7 characters.")
}else if(hacker1.length<hacker2.length){
console.log("It seems that the navigator has the longest name, it has 6 characters.")
}else{
  console.log("wow, you both have equally long names, XX characters!.")
}
// Iteration 3: Loops
//first
let driverup=""
for(let i=0;i<hacker1.length;i++){
 driverup+=hacker1[i].toUpperCase()+" "
}
 console.log(driverup)
 //second
 let navigatordown=""
 for(let i=hacker2.length-1;i>=0;i--){
   navigatordown+=hacker2[i]
   }
console.log(navigatordown)
//third
