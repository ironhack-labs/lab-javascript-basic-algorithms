const hacker1 = 'Gisela'
console.log ('The driver\'s name is' + ' ' + hacker1)

const hacker2 = prompt ('introduce un nombre')
console.log ('The navigator\'s name is ' + hacker2)

if (hacker1.length > hacker2.length) {
  console.log ('The driver has the longest name, it has '+ hacker1.length + ' characters')
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
} else if (hacker1.length === hacker2.length) {
  console.log('wow, you both got equally long names, ' +hacker1.length+ ' characters!!')
} 
let nombre = hacker1.toUpperCase()
console.log(nombre)
nombre = nombre.split('')
console.log(nombre)

let espacios = ''
for(let i = 0; i < nombre.length; i++){
  espacios += nombre[i] + ' '

}
console.log (espacios)
let alrevez = ''

for(let i = hacker1.length - 1; i >= 0; i--){

alrevez += hacker1[i]

}
console.log(alrevez)

const usuarios = ["Gisela", "aicardo"]  
console.log(usuarios)

usuarios.sort()
console.log(usuarios)
for (let i=0; i<usuarios.length; i++) {
    console.log(usuarios[i]);
}
 
let nombres = new Array(hacker1, hacker2)
nombres.sort()
 
for (var i=0; i<nombres.length; i++) {
    console.log(nombres[i]);
}

// Lorem ipsum generator
