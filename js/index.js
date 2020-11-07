//Iteration 1: Names and Input
// driver: Paulo
// print: Paulo
// navegador: Fabio
// print: Fabio
// nome igual: Wow, you both have equally long names, XX characters!
// nome 
// Print PAULO
// print oibaF
// Lexo: Fabio, Paulo
/* 
let hacker1 = `FabioH`;
console.log(`The driver´s name is ${hacker1}`);

// Iteration 2: Conditionals
let hacker2 = `Paulo`;
console.log(`The navigator´s name is ${hacker2}`);

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length >= hacker2.length){
    console.log(`The driver has the longes name, it has ${hacker1.length} caracters`)
}
else if (hacker1.length <= hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}    

let hacker1up = hacker1();
let i = ``;
for (let `hacker1up` in capsLock;) {
    hacker1.push(hacker1up.indexOf(capsLock[i].toUpperCase()) + 1);
}
return hacker1up; 


  return s.split('Fabio').reverse().join('');
} */


// Iteration 1: Names and Input
let hacker1 = 'Paulo'
console.log = `The driver's name is ${hacker1}`

let hacker2 = 'Fabio'
console.log = `The navigator's name is ${hacker2}`

// Iteration 2: Conditionals

if (hacker1.length >= hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
if (hacker1.length <= hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let completeName = ''
for (let i = 0; i < hacker1.length; i += 1) {
    completeName = completeName += hacker1[i].toUpperCase() + " "
}
console.log(completeName)


// Bonus 1 // Tentei fazer o bonus porém deu erro

let textLoren = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


function countWords(text) {
    let numberWords = 0;
    for let i = 0; i < countWords.length; i+=1) {
    if (text(i) == " ") {
        return numberWords +=1;
    }
    return numberWords = numberWords+=i
    
    }
}
console.log(countWords(textLoren))