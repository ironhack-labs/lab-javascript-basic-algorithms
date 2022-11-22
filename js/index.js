// Iteration 1: Names and Input
// 
const hacker1 = "Jhon";
console.log("The driver's name is" + " " + hacker1)

const hacker2 = "Jane";
console.log("The navigator's name is" + " " + hacker2)




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +hacker1.length+ " characters")
} else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " +hacker2.length+ " characters")
}
 else {hacker1.length === hacker2.length 
    console.log("Wow, you both have equally long names, " + hacker1.length+ " characters")
 }



// Iteration 3: Loops

let result = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(result)

let revName =  "";
for( i = hacker2.length-1; i>=0; i-- ){
    revName+=(hacker2[i])
}
console.log(revName)

let driverArr = [hacker1, hacker2]
for(i=0; i<=driverArr.length-1; i++){
 console.log(driverArr[i])
}
// let sortedArr = driverArr[i].sort
