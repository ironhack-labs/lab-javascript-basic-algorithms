// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops

//1

let hacker1 = "JosepTurro"; 
let hacker2 = "Google";

let exprNom1 = `The driver's name is ${hacker1}`;
let exprNom2 = `The navigator's name is ${hacker2}`;

console.log(exprNom1);
console.log(exprNom2);

//2

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// else{
//     console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);

// }

else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

//3

let lletresNom = "";
for (let i = 0; i<hacker1.length; i++ ){
    lletresNom = lletresNom + hacker1[i]
    
 
}



//  Space
let lletresNomSpace ="";

for (let i = 0; i<hacker1.length; i++ ){
  lletresNomSpace += " " + hacker1[i];
}

// Aqui MAJ
let lletresNomSpaceMaj = lletresNomSpace.toUpperCase();

console.log(lletresNomSpaceMaj);

// Aqui el revert 

let lletresNomRevert = "";
for (let i = hacker1.length-1; i>=0; i-- ){
    lletresNomRevert = lletresNomRevert + hacker1[i];
    
 
}

console.log(lletresNomRevert);


//3.3

let nomMesLlarg = 0;

if(hacker1.length>hacker2.length){
nomMesLlarg= hacker1.length
}
else{
  nomMesLlarg = hacker2.length; 
}

for(let i= 0; i<nomMesLlarg;i++){
  if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
    }   
  else if (hacker1.charAt(i)>hacker2.charAt(i)){
    console.log("Yo, the navigator goes first definitely.");
    break;
  } 

  else if (hacker1.charAt(i)<hacker2.charAt(i)){
    console.log("The driver's name goes first");
    break;
  } 


}


