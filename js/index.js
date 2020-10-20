console.log("it's all ready!");

// Iteration 1: Names and Input
let hacker1 = "Victor";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alba & Xavi";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names ${hacker2.length} characters!`);
  }


// Iteration 3: Loops

// Separando todos los caracteres por un espacio y mostrándolos en mayúsculas
let hacker1Mayus = hacker1.toLocaleUpperCase();
console.log(hacker1Mayus);
let arr = [];
let espacioVacio = " ";
for(let i = 0; i <hacker1Mayus.length; i++){
  let cadaLetra = hacker1Mayus.charAt(i)
  arr.push(cadaLetra);
  arr.push(espacioVacio);
};
console.log(arr);
let resultado = "";
for(let i= 0; i < arr.length; i++){
  resultado += arr[i];
}
console.log(resultado);

// Ordenar alfabéticamente con un array
let newArr = [];
newArr[0] = hacker1;
newArr[1] = hacker2;
console.log(newArr);

let newArrOrdered = newArr.sort();
console.log(newArrOrdered);

if(newArrOrdered[0] == hacker1){
  console.log(`${hacker1} va antes en el abecedario`);
}else{
  console.log(`${hacker2} va antes en el abecedario`);
}


// Ordenando alfabéticamente comparando los strings
if (hacker1.localeCompare(hacker2) === -1) {
  console.log ("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log ("Yo, the navigator goes first definitely.");
} else {
  console.log ("What?! You both have the same name?");
}

// contar el número de palabras
let newLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus nec nisl ut posuere. In dictum nibh in malesuada commodo. Nunc efficitur augue a laoreet pretium. Integer placerat nibh sed leo tristique, vel convallis neque fringilla. Curabitur nec ultricies lacus. Ut posuere ex ante, at placerat neque porta in. Sed a est volutpat, lacinia augue vitae, feugiat tortor. Curabitur id mattis libero. Nam cursus ultrices sapien sit amet rhoncus. Sed et quam ac justo ornare euismod. Nulla tincidunt augue velit, sed malesuada ipsum tempus sit amet. Morbi dapibus ipsum erat, at faucibus leo ultricies vel. Nam vehicula felis non libero condimentum dapibus. Donec vel lectus eget enim pharetra auctor. Phasellus ullamcorper ligula ligula, vitae viverra dui rutrum vitae. Cras convallis dolor vel felis sagittis, vitae posuere urna bibendum. Aenean porta finibus eleifend. Nunc sollicitudin purus sit amet sem suscipit, porta molestie ligula hendrerit. Nullam ac scelerisque justo. Donec tempus aliquam ligula non ornare. Maecenas egestas neque ex. Fusce ac arcu nibh. Praesent ac luctus dui. Curabitur feugiat ultricies libero, ut euismod mauris volutpat elementum. Phasellus eget ullamcorper diam. Sed sem arcu, pulvinar vel rhoncus ac, fringilla vel sem. Suspendisse potenti. In porttitor elit eget risus pretium imperdiet. Integer luctus lorem erat, a euismod ex feugiat finibus. Fusce aliquam sed nulla vitae hendrerit. Etiam rhoncus consectetur consectetur. Duis bibendum ante et magna tristique, vitae cursus mi sagittis. Etiam fermentum diam eu mauris feugiat dignissim. Sed vitae leo molestie, vestibulum arcu eget, vulputate velit. Duis vitae enim at nibh tempor vestibulum. Mauris bibendum, nulla quis tincidunt ultricies, nisl eros euismod elit, ac ultrices ligula augue eu tellus. Nulla facilisi. Vestibulum sapien quam, sollicitudin sit amet viverra id, pretium a libero."

//console.log(newLorem);

let numeroDePalabras = newLorem.split(" ").length;
console.log(numeroDePalabras);

let numeroDeVecesEt = newLorem.split(" et ").length;
console.log(numeroDeVecesEt);
