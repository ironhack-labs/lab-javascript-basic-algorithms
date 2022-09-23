// Iteration 1: Names and Input

let hacker1 = "John"
let hacker2 = "Albert"

console.log(`The hacker1 is ${hacker1}`);
console.log(`The hacker2 is ${hacker2}`);

// Iteration 2: Conditionals


console.log(`El usuario ${hacker1} tiene ${hacker1.length} caracteres`)
console.log(`El usuario ${hacker2} tiene ${hacker2.length} caracteres`)


if(hacker1.length > hacker2.length ){
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres`)
}else if(hacker1.length < hacker2.length ){
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`)
}else{
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`)
}

// Iteration 3: Loops



function spacedName (name) {
let newString=""
for (let i = 0; i < name.length; i++) {
  
    newString+= name[i] + " ";
    
}
console.log(newString.toUpperCase())
}

spacedName(hacker1)
spacedName(hacker2)

function reverseName (name) {
   console.log(name.split("").reverse().join(""))

}
    
reverseName(hacker1)
reverseName(hacker2)

function ordenar (name1,name2) {

let arrayNames = [name1, name2];
let sortedArray = arrayNames.sort()


if(name1 == name2){
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?")
}
else if(sortedArray[0] == name1){
    console.log("Yo, el navegador va primero definitivamente.")
} 
else if(sortedArray[0] == name2){
    console.log("El nombre del conductor va primero.")
} 
}

ordenar("oscar","omar")


