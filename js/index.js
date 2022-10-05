// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input")
console.log("***********************************************************************")


console.log("I'm ready!");

var hacker1 = `Andres`
var hacker2 = `Perfecto`


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
console.log("\n Iteration 2: Conditionals")
console.log("***********************************************************************")


if(hacker1.length > hacker2.length ){
    console.log(`It seems that the driver has the longest name, ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name,it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
console.log("\n Iteration 3: Loops")
console.log("***********************************************************************")


var result = " ";

for(var z=0; z < hacker1.length ; z++ ){
    result += hacker1[z];
    result += " ";
}
console.log(result);


 //Revers string

function reverse(hacker2){  
    let reversed = "";      
     for (var i = hacker2.length - 1; i >= 0; i--){         
       reversed += hacker2[i];  
     }     
    return reversed;
  }
  console.log(reverse(hacker2)); 
  

  //Lexicographic Order
  var entradArr = [hacker1,hacker2];
  displayOutput = 'Lista de Entrada  : ' + entradArr;

  var acomodadoArr = entradArr.sort();
  displayOutput += '\nLista acomodada : ' + acomodadoArr;

  console.log(displayOutput)
  
  if(acomodadoArr == hacker1[0] ){
    console.log("The driver's name goes first.")
  }


