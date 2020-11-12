// Iteration 1: Names and Input

title = 'Iteration 1: Names and Input\n'

hacker1 ='Jorge';
hacker2 = 'Carlos';

let driver = `The driver´s name is `+ hacker1 + '\n';
let navigator = `The navigator´s name is `+ hacker2 + '\n';

console.log(title);
console.log(driver);
console.log(navigator);

// Iteration 2: Conditionals

title2 = 'Iteration 2: Conditionals\n'              //Título de la iteración 2

console.log(title2);                                //Título de la iteración 2

if (hacker1.length > hacker2.length){               //Condición 1
  let text1 = `The driver has the longest name,  it has ${hacker1.length} characters.`;
  console.log(text1);
} 
else if (hacker1.length < hacker2.length){          //Condición 2

  let text2 =` It seems that the navigator has the longest name, it has ` + hacker2.length + ` characters.`;
  console.log(text2);
}
else if(hacker1.length === hacker2.length){         //Condición 3

  let text3 = `Wow, you both have equally long names, ${hacker1.length} characters!`;
  console.log(text3);
}

// Iteration 3: Loops

letras = '';
for (i = 0; i<hacker1.length;i++){
    letras += hacker1[i] + ' ';

} 
letras = letras.toUpperCase();
console.log(letras + '\n');


inverso = '';
for (i = 0; i<hacker2.length;i++){
    inverso = hacker2[i] + inverso;

} 
console.log(inverso);


