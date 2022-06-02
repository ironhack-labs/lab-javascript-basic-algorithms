// Iteration 1: Names and Input

let hacker1 = "Rafael"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Alejandro"

console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 

} else if (hacker1.length < hacker2.length){

    console.log(`It is seems that the navegator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}


// Iteration 3: Loops

//let UpperHacker1 = hacker1.toUpperCase()
let UpperHacker1 = ""

for(let i = 0; i < hacker1.length; i++){
    /*
    let separate = UpperHacker1.split("").join(" ")
    console.log(separate)
    */
    UpperHacker1 += `${hacker1[i].toUpperCase()} `
}
console.log(UpperHacker1)
//console.log(`${UpperHacker1.charAt(i)}`)



    let reverseHacker2 = ""

for (let i = hacker2.length-1; i >= 0; i--){
    
    reverseHacker2 += hacker2[i]
    
}

console.log(reverseHacker2)



//3.3
/*
for(let j = 0; j > hacker1.length; j++){
    
    if(hacker1[j].compareTo(hacker2[j]) < 0){



    }

}
*/