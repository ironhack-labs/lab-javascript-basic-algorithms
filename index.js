// Iteration 1: Names and Input
const hacker1 = "luis"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "luis"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names,${hacker2.length} characters!`)
}else if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
let result = "" 

for(let i = 0; i<hacker1.length;i++){
    result += hacker1[i].toUpperCase() + " "
}
console.log(result)

let reverse = ""
for(let l = hacker2.length-1; l>=0 ;l--){
    reverse += hacker2[l]
}
console.log(reverse)





console.log(hacker1>hacker2)



for (let x = 0; x< hacker2.length;x++){
    console.log("vuelta")
    if   (hacker1[x] == hacker2[x]){
     continue
    }else if(hacker1[x] < hacker2[x]){
        console.log(" hacker1 este va primero"+ hacker1)
        break
    }else if(hacker1[x] > hacker2[x]){
        console.log("hacker2 este va primero" + hacker2)
        break
    }
 
}


