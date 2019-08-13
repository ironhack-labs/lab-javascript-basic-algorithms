const hacker1 = "Andres"
console.log("The driver's name is "+ hacker1)
let hacker2 = prompt ("Whats your name?")
console.log("The navigator's name is "+ hacker2)

  function nameLength (hacker1,hacker2) {
    if(hacker1.length>hacker2.length){
      console.log("The driver has the longest name, it has "+ hacker1.length)
    } 
    if (hacker1.length<hacker2.length) {
      console.log("Yo, navigator got the longest name, it has " + hacker2.length)
    }
    if(hacker1.length == hacker2.length) {
      console.log("wow, you both got equally log names, "+ hacker1.length+" characters")
    }

  }
nameLength(hacker1,hacker2)


let nameUpperCase2 = (hacker2.toUpperCase().split('').join(' '));
let nameUpperCase = (hacker1.toUpperCase().split('').join(' '));
  console.log(nameUpperCase2);
  console.log(nameUpperCase);


//otra manera de hacerlo


var arr=[];
for(i=0; i<hacker1.length; i++){
 arr.push(hacker1[i].toUpperCase()+" ")
};
console.log(arr.join(''))


var arr2=[];
for(i=hacker2.length-1;i>=0;i--){
 arr2.push(hacker2[i])
}
console.log(arr2.join(''))

/** 
 * El método .split('') separa el string por caracteres haciendo un arreglo, 
 * si no se ponen parámetros, si se pone comas, lo separa por comas, etc.
 * El método .join(' ') agrega el parámetro a cada uno de los caracteres, en este caso se agrega un espacio.
 **/
 
 let reverseName = (hacker1.split('').reverse().join(''));
 let reverseName2 =(hacker2.split('').reverse().join(''));
 console.log(reverseName);
 console.log(reverseName2);

/** El método .reverse() sólo funciona dentro de arrays, pero se hizo uno previamente con el método .split()
 * 
 */





 


let order = hacker1.localeCompare(hacker2)
if (order === -1) {
  console.log('The driver\'s name goes first')
} else if (order === 1) {
  console.log('Yo, the navigator goes first definitely')
} else {
  console.log('What?! You both got the same name?')
}

/** Si sale -1 quiere decir que la primera variable tiene un valor menor
 * si sale 1 es la segunda variable es mayor
 * si sale 0 quiere decir que son iguales
 */