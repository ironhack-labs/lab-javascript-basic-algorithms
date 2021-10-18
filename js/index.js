// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
var hacker1 = "jordi"

//1.2 Print `"The driver's name is XXXX"`.

console.log(`"The drivers name is ${hacker1}"`)

//1.3 Create a variable `hacker2` with the navigator's name.

var hacker2 = "chrome"

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. 

hacker1="jordi"
var count= []

for(let i=0;i<hacker1.length-1;i++){
   var count =count + hacker1[i]+" "
 var total = count +hacker1[i+1]
}

console.log(total.toUpperCase())

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

hacker2="chrome"
var count= []

for(let i=hacker2.length-1;i>0;i--){
   var count =count + hacker2[i]
 var total = count +hacker2[i-1]
}

console.log(total)

//3.3 Depending on the lexicographic order of the strings, print:
