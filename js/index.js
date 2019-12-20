// Iteration 1: Names and Input

let hacker1 = "Marta";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Albert";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`El mas largo esThe driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }



// Iteration 3: Loops

let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++){
    newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHacker1);

let reverseHacker2 = "";

for (let k = hacker2.length -1; k >= 0; k-=1){
reverseHacker2 = reverseHacker2 + hacker2[k];
}

console.log(reverseHacker2);

if (hacker1.length > hacker2.length){
    console.log('The driver´s name goes first')
  } else if(hacker1.length < hacker2.length){
    console.log('The navigator goes first definitely')
  } else{
    console.log('What?! You both got the same name?')
  }

// BONUS 1: The lorem ipsum generator 

let str = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

var wordsStr = str.split(' ');
console.log(wordsStr.length);

counter = 0;
for (let n = 0; n < wordsStr.length; n++) {
  if (wordsStr[n] === 'et') {
    counter++;
  }
}
console.log(counter);


