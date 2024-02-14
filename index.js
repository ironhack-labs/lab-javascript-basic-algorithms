// Iteration 1: Names and Input
let hacker1 = "Raul"
let hacker2 = "Daniel"


console.log("The driver's name is "+ hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker2.length>hacker1.length) {

    console.log("The navigator has the longest name, it has " + hacker2.length + " characters")
    console.log(hacker2.length)


} if (hacker2.length<hacker1.length){

    console.log("The driver has the longest name, it has " + hacker1.length + " characters" )

} if (hacker2.length === hacker1.length){

    console.log("Wow, you both have equally long names " + hacker1.length + " characters")
}



// Iteration 3: Loops

let capitalAndSpacedName = "";

for( let i=0; i < hacker1.length; i++) {

    const theCopyOfTheCandy = hacker1[i]
    capitalAndSpacedName = capitalAndSpacedName + theCopyOfTheCandy + " "

}

console.log (capitalAndSpacedName)

