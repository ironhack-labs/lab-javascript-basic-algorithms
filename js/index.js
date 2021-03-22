console.log("I'm ready!");

//Iteration 1: Names and Input

let hacker1 = 'Driver';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Navigator';
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if(hacker1.length = hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 3: Loops


let name ="";

for(let i=0; i<hacker1.length; i++){
  name = name + hacker1[i].toUpperCase() + ' ';
}

for(let i=hacker2.length -1; i >= 0; i--){
  name = name + hacker2[i];
}

console.log(name);

if(hacker1[0]>hacker2[0]){
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1[0]<hacker2[0]){
  console.log(`The driver's name goes first`);
}else{
  console.log(`What?! You both have the same name?`);
}

 
//Bonus

let lorem =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie arcu vitae diam pulvinar, condimentum laoreet nulla lobortis.

Nunc porttitor blandit nisi vitae laoreet. Nulla finibus velit luctus tortor viverra tincidunt. Etiam faucibus vestibulum tristique.

Maecenas efficitur ligula nec consequat luctus. Duis ultrices venenatis mattis. Curabitur tincidunt mi arcu, et imperdiet magna malesuada feugiat.`

let wordCounter = 0;

for (let i = 0; i < lorem.length; i++){
  if (lorem[i] === ' '){
    wordCounter++;
  }
}

console.log(wordCounter);