let hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Lena";
console.log(`The navigator's name is ${hacker2}.`);


if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters ?!`)
}


let letters = "";
for (let i=0; i<hacker1.length; i++){
  letters += hacker1[i].toUpperCase() + " ";
}
console.log(letters);

let reverseLetters = "";
for (let i = hacker2.length-1; i >= 0; i--){
  reverseLetters += hacker2[i];
}
console.log(reverseLetters);