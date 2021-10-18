// Iteration 1: Names and Input
// 
let hacker1 = 'MiNa';
let hacker2 = 'Mina';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name , it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let upDrName=hacker1.toUpperCase();
console.log(`upper string plus space:${upDrName.split('').join(' ')}`);
console.log(`reverse string: ${upDrName.split('').reverse().join('')}`);
if (hacker1.localeCompare(hacker2)<0)
console.log("The driver's name goes first")
 else if (hacker1.localeCompare(hacker2)>0)
 {
console.log("Yo, the navigator goes first definitely.")
 }
 else 
 console.log("What?! You both have the same name?")


//bonus1
const strPrag=`What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

console.log(`the number of words in the string: ${strPrag.split(" ").length}`);

console.log(`the number of et in the string:${strPrag.split(' ').filter(p=>p==='et').length}`);
//bonus2
const phraseToCheck ="A man, a plan, a canal, Panama!"

let a= phraseToCheck.split('').filter(p=>[' ','!','.',','].indexOf(p)==-1).join('').toLowerCase()

if(a.substr(0,Math.ceil( a.length/2))===a.substring(a.length/2).split('').reverse().join('')){
  console.log(' this variable is a Palindrome')
  }
    else
{
  console.log(' this variable is not a Palindrome')
}

