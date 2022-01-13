//interacción 1

//1.1
let hacker1 = "Laura" 
//1.2
console.log (`The driver name is ${hacker1}`)
//1.3
let driver = "Cristian"
//1.4
console.log (`the navigators name is ${driver}`)

//Interacción 2


if  ( hacker1.length > driver.length) {

console.log  (`The driver has the longest name, it has ${hacker1.length} characters`)

} 
else if ( hacker1.length < driver.length) {

  console.log  (`It seems that the navigator has the longest name, it has ${driver.length} characters.`)

}

else {

console.log (`Wow, you both have equally long names, ${driver.length} characters!`)

}

//Interaccion 3

//3.1

let nameWithSpace = ""

for (let i=0; i<driver.length; i++){
  nameWithSpace += driver[i].toUpperCase() + " "
 


}
console.log (nameWithSpace) 

//3.2

let backName = ""
for (let i = driver.length-1; i >=0 ; i--){
backName += driver[i]

}

console.log (backName)

//3.3

let orderName = [ "Shirley", "Cristian" , "Laura"]
orderName.sort(function(a, b) {

return a.localeCompare(b)
})

console.log (orderName)