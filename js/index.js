//Itineration 1
let hacker1 = 'Alejandro';
let hacker2 = 'Paco';
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);
//Itineration 2
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);}

//Itineration 3
//3.1
let spacesDriverName =""
for(let i=0; i<hacker1.length; i++){
  spacesDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(spacesDriverName);

//3.2
let reverseNavName  = "";
for(let i=hacker2.length -1; i>=0; i--){
  reverseNavName += hacker2[i];
}
console.log(reverseNavName);

//3.3
//