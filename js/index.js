console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "DriverName"

var nhacker1 = hacker1.length
console.log(`"The driver name is ${hacker1}"`);
let hacker2 = "NavigatorsName"

var nhacker2 = hacker2.length 
console.log(`"The navigator name is ${hacker2}"`);
console.log(`${nhacker2}`);
// Iteration 2: Conditionals
if(nhacker1 > nhacker2){ // AL SER FALSO, NO SE EJECUTA LO DE LAS LLAVES. SI ES VERDADERO SÍ SE EJECUTA
    console.log(`"The driver has the longest name, it has ${nhacker1}"`);
} else if(nhacker1 < nhacker2){
    console.log(`"The navigator has the longest name, it has ${nhacker2}"`);
}else {
    console.log(`"Wow, you both have equally long names, ${nhacker1} characters!"`);
}
console.log('${hacker1}'.localeCompare('${hacker2}')); // -1
// Iteration 3: Loops

let nameUpper = hacker1.toUpperCase()
let nameUpper2 = hacker2.toUpperCase()

let newName = ""
for(let letters of nameUpper) {
        newName += `${letters} `
}
console.log(newName)

let newName2 = ""
for(i = 0; i <= nameUpper.length ; i++) {
    newName2 += `${nameUpper.charAt(i)} `
}
console.log(newName2)


    let newName3 = ""
    for(i = nameUpper2.length; i >= 0 ; i--) {
        newName3 += `${nameUpper2.charAt(i)} `
    }
    console.log(newName3)

   Comparename =hacker1.localeCompare(hacker2)

   if (Comparename>=1) {
   console.log(`The driver's name goes first"`);
} else if(Comparename <= -1){
    console.log(`Yo, the navigator goes first definitely.`);
}else {
    console.log("What?! You both have the same name?");
}

Paragraph = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32."`

Pwords = Paragraph.split(' ').length
Pwords2 = Paragraph.split('et').length
console.log(Pwords)
console.log(Pwords2)