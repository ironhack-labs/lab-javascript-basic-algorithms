// Iteration 1: Names and Input

const title = 'Iteration 1: Names and Input\n'

const name1 = { hacker1:'Jorge'};
const name2 = { hacker2:'Carlos'};

let driver = `The driver´s name is ${name1.hacker1}\n`;
let navigator = `The navigator´s name is ${name2.hacker2}\n\n`;

console.log(title);
console.log(driver);
console.log(navigator);

// Iteration 2: Conditionals

const title2 = 'Iteration 2: Conditionals\n'              //Título de la iteración 2

console.log(title2);                                      //Título de la iteración 2


if (name1.hacker1.length > name2.hacker2.length){         //Condición 1
  let text1 = `The driver has the longest name, it has ${name1.hacker1.length} characters.`;
  console.log(text1);
}
else if (name1.hacker1.length < name2.hacker2.length){    //Condición 2

  let text2 =` It seems that the navigator has the longest name, it has ${name2.hacker2.length} characters.`;
  console.log(text2);
}
else if(name1.hacker1.length = name2.hacker2.length){     //Condición 3

  let text3 = `Wow, you both have equally long names, ${name1.hacker1.length} characters!`;
  console.log(text3);
}

// Iteration 3: Loops