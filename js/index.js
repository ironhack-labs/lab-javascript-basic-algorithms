// Iteration 1: Names and Input
let hacker1 = "Eli"
console.log(hacker1);

let hacker2 = "Rafa"
console.log(hacker2);


// Iteration 2: Conditionals



if(hacker1.length > hacker2.length){
  console.log(` El conductor con nombre más largo es: ${hacker1} y tiene longitud ${hacker1.length}` )
  
}else if (hacker1.length < hacker2.length){
  console.log(`El conductor con nombre más largo es: ${hacker2} y tiene longitud ${hacker2.length}` )
  
  
}else{
  console.log(`${hacker1} y ${hacker2} tienen la misma longitud`)
}


// Iteration 3: Loops

let hacker1Mayus = hacker1.toUpperCase();

for(let i = 0; i<hacker1Mayus.length; i++){
    console.log(`hacker1Mayus[i] `)
    
}
//lkllk