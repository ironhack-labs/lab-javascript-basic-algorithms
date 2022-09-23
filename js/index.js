// Iteration 1: Names and Input

let hacker1 = "albert"
console.log(`El nombre del conductor es ${hacker1}`)

let hacker2 = "omar"
console.log(`El nombre del navegante es ${hacker2}`)

//
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length ){
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres`)
}else if(hacker1.length < hacker2.length ){
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`)
}else{
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`)
}


// Iteration 3: Loop


//3.1
let newString= "";

for(let i = 0; i < hacker1.length; i++) {
   newString+=hacker1[i] + " ";
}

console.log(newString.toUpperCase());

//3.2
console.log(hacker2.split("").reverse().join(""))

//3.3
let arrayNames = [hacker1, hacker2];
let sortedArray = arrayNames.sort()

if(sortedArray[0] == hacker1){
    console.log("El nombre del conductor va primero.")
} 
else if(sortedArray[0] == hacker2){
    console.log("Yo, el navegador va primero definitivamente.")
} 
else{
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?")
}



