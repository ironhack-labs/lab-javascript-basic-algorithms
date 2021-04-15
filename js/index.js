// Iteración 1: nombres y entrada

let hacker1 = 'Paloma'
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Eléa'
console.log(`"The driver's name is ${hacker2}"`);


//Iteración 2: condicionale

if (hacker1.length > hacker2.length) {
  console.log('Es más largo');
}
 else if (hacker1.length < hacker2.length) {
    console.log('No es más largo');
  }
else { console.log('Son iguales');
}


// Iteración 3: Loops

hacker1 = hacker1[0].toUpperCase() + ' ' + hacker1[1].toUpperCase() + ' ' + hacker1[2].toUpperCase() + ' ' + hacker1[3].toUpperCase() + ' ' + hacker1[4].toUpperCase() + ' ' + hacker1[5].toUpperCase();

console.log(hacker1);



for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
if (hacker1[i] < hacker2[i]) {
     console.log('hacker1 va primero');
  break;
}
     else if (hacker2[i] < hacker1[i]) {
       console.log('hacker2 va primero');
  break;
 }
     if (i + 1 === hacker1.length || i + 1 === hacker2.length) {
       console.log('Tenemos el mismo nombre');
     }
}
 


/*loremIpsum.split(" ");
console.log(loremIpsum.split(" ").length);*/

let words = loremIpsum.split(' ');
console.log(words);


/*let posicion = words.indexOf('et');
if (posicion !== -1)
    console.log("La palabra está en la posición " + posicion);
else
    console.log("No encontré lo que estás buscando");*/


let indices = [];
let element = 'et';
let idx = words.indexOf('et');
while (idx != -1) {
  indices.push(idx);
  idx = words.indexOf('et', idx + 1);
}
console.log(indices);

  
  
