const hacker1 = "Nishtha";
console.log(`The driver's Name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's Name is ${hacker2}`);
let i=hacker1.length;
let j=hacker2.length;
if (i>j)
{
  console.log(`The driver has the longest name, it has ${i} characters.`);
}else if(j>i) {
  console.log(`It seems that the navigator has the longest name, it has ${j} characters.`);
}
  else if(i=j){
  console.log(`Wow, you both have equally long names,${j} characters!.`);
  }
  for( k = 0; k < hacker1.length ; k++ ) {
    const strOriginal = hacker1[k];
    const strUpperCase = hacker1[k].toUpperCase();

  console.log(strUpperCase);
  }
  
let reversed = "";

for (let l = hacker2.length - 1; l >= 0; l--) {
  reversed += hacker2[l];
}

console.log(reversed);
const longText = ""