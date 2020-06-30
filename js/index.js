let hacker1 = "Biel";
let hacker2 = "Alejandro";
console.log(`el nombre del navigator es ${hacker2}`);


if (hacker1.length < hacker2.length){   
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!.`);
}

for (let i = 0; i < hacker2.length; i++) {
  let hacker2Up = hacker2.toUpperCase()  
  console.log(hacker2Up[i]+ "\n");
}

//----------------------3.2-----------------------------//

for (let i = hacker2.length; i >= 0; i--){
  console.log(hacker2[i]);
}

//----------------------3.3-----------------------------//

console.log(hacker2.localeCompare(hacker1))
let resultLexicOrder = hacker1.localeCompare(hacker2);
switch(resultLexicOrder) {
  case (-1):
  console.log("Yo, the navigator goes first definitely.");
  break;
  case (1):
  console.log("The driver's name goes first.");
  break;
  case (0):
  console.log("What?! You both have the same name?");
  break;
}

//----------------------bonus-----------------------------//

let paraIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu risus volutpat, malesuada felis nec, tincidunt nunc. Nam malesuada pellentesque erat sed lobortis. Integer id auctor ante. Phasellus fermentum nibh nulla, et scelerisque nisl auctor eget. Vestibulum eros enim, posuere id porttitor sed, mollis sit amet diam. Fusce a urna nulla. Morbi ultrices urna non felis scelerisque blandit. Nam ac ultricies tellus. Sed vitae porttitor sapien. Morbi ac lobortis purus.Mauris auctor, neque non ultrices porttitor, elit velit scelerisque ex, vitae tincidunt elit purus a elit. Praesent ac varius diam, ac maximus felis. Vestibulum porta lorem scelerisque ex placerat cursus in eget risus. Nullam turpis felis, feugiat ac vestibulum eget, lacinia at mauris. Sed dui dolor, viverra eget laoreet id, molestie eget mauris. Morbi ultricies tellus lectus, et porttitor dolor tempor a. Nam ac justo lacus. Pellentesque id urna quis quam venenatis fringilla vel nec felis. Integer et pellentesque elit. Aliquam a risus tortor. Nulla sit amet tempor nisl. Sed semper urna sed dolor laoreet pharetra. Maecenas lacus nulla, tincidunt et magna in, faucibus ullamcorper lacus. Phasellus porta magna facilisis velit consequat consequat. In pharetra ipsum vitae odio lacinia elementum. In sed sollicitudin quam, eget bibendum urna. Ut molestie, ligula at porta faucibus, est risus eleifend lacus, vitae consequat arcu ante eget lectus. Nunc a ante rutrum, condimentum leo a, viverra massa.";

let paraIpsumDividido = paraIpsum.split(" ");
let numPalabras = paraIpsumDividido.length;

console.log(numPalabras)

let n = [];
for (i = 0; i < 221; i++){
  if (paraIpsumDividido[i] === "et") {
    n.push(i);
  }
}

console.log(n.length)