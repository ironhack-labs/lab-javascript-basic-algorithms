let hacker1 = "Ben"
console.log (`the drivers name is ${hacker1}`);
let  hacker2= "lilly"
console.log (`the navigators name is ${hacker2}`);


// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length) {
console.log ( "the driver has the longuest name, it has three characters") 

}
else if ( hacker2.length > hacker1.length) {
console.log ("It seems that the navigator has the longest name, it has five characters")
}
else console.log ( "Wow, you both have equally long names , xx characters!")
// Iteration 3: Loops

let nameDriverCaps = ""
for (let i=0 ;i < hacker1.length ; i++){
 let driverName = hacker1[i].toUpperCase()
 nameDriverCaps += driverName + " "


}
console.log (nameDriverCaps)

let nameDriverBack=""
for (let i =hacker1.length -1 ;i >= 0 ; i--){
 let driverName = hacker1[i]
 nameDriverBack += driverName 
}

console.log (nameDriverBack)