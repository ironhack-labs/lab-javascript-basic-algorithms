// Iteration 1: Names and Input
let hacker1 = "Manolo";
let hacker2 = "Paco";
const conductor = (hacker1.length);
const navigator = (hacker2.length);
const same = "you have the same"

console.log(conductor);
console.log(navigator);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${conductor} characters. `)
}
else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name. It has ${navigator} characters.`)
}
else if (hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${same} characters!`)
}
// Iteration 3: Loops
const capitalDriver = hacker1.toUpperCase();
console.log(capitalDriver);

let manoloSpace ="";

for (let i=0; i< hacker1.length; i++){
    const nombreEspaciado = hacker1[i];
    manoloSpace += nombreEspaciado+" ";    
}
console.log(manoloSpace);

let nameReverse = "";

for (let i=hacker1.length-1; i>= 0; i--){
    const deReves = hacker1[i];
    nameReverse += deReves;
}
console.log(nameReverse);

////BONUS 1 - EN VÍAS DE DESARROLLO
const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
/*let counter ="";
for (let i=0; i<=longText.length; i++){
   if (longText[i] === "," || longText[i] === "." || longText[i] ===" "){
        counter ++;
        }
}
console.log(counter)*/

////////
let contadorEt = "";
for (let i=0; i<=longText.length; i++){
    let char= longText[i]+longText[i+1];
    if (char === "et"){
        contadorEt ++;
    }
}
console.log(contadorEt);
//BONUS 2
