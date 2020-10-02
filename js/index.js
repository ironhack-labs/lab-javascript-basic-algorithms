//Ejercicio 1 Names & INPUT

var hacker1 = "Tomy";

console.log(`The driver's name is ${hacker1}`) 

var hacker2 = "Tomas";

console.log(`The navigator's name is ${hacker2}`) 

//Ejercicio 2 Conditionals 

const driversNameLonger = hacker1.lenght > hacker2.length
const navigatorsNameLonger = hacker2.length > hacker1.length

if (driversNameLonger){ //Ha de cumplir la condición de su variable, sino es true salta al siguiente
  console.log(`The driver has the longest name, it has ${hacker1.length}`)
}
else if (navigatorsNameLonger){//Como el nombre Tomas es + largo que Tomy se imprime y no salta a la última condición
  console.log(`It seems that the navigator hast the longest name, it has ${hacker2.length}`)
}
else {//se activaría si ninguna de las de arriba fuese true
  console.log(`Wow, you both have equally long names, ${hacker2.length}`)
}


//Ejercicio 3 Loops
var newDriversName = "";
var newNavigatorsName = "";

//3.1
for (i = 0; i < hacker1.length; i++ ){// La i empieza desde 0 hasta lo largo de hacker1 y le vamos sumando 1 a la i con i++
  newDriversName = newDriversName + hacker1[i].toUpperCase() +  " " //como es una nueva var aquí le decimos que newDriversName es igual a newDriversName + el loop que va a ir haciendo + un espacio cada vez
}
console.log(newDriversName)

//3.2
for(i = hacker2.length -1; i >= 0; i--){// La i empieza en lo largo de hacker2 - porque me salta udefined como último valor sino y vamos restandole 1
  newNavigatorsName = newNavigatorsName + hacker2[i]//como es una nueva var hacemos igual que arriba
}
console.log(newNavigatorsName)

//3.3 No he sabido como plantearlo con loop

const driversNameBigger = hacker1 > hacker2
const navigatorsNameBigger = hacker2 > hacker1

if (driversNameBigger){
  console.log("The driver's name goes first")
}
else if (navigatorsNameBigger){
  console.log("Yo, the navigator goes first definitely")
}
else {
  console.log("What?! You both have the same name?")
}

//Bouns 1:

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum justo in consectetur consequat. Nullam fermentum suscipit laoreet. Pellentesque molestie vehicula neque eu faucibus. Nam sed ipsum enim. Morbi et faucibus eros. Donec lacinia tincidunt leo a commodo. Vestibulum ligula turpis, mollis quis pulvinar eget, ornare eget odio. Vivamus nisi nunc, luctus id velit at, rutrum facilisis sapien. In aliquet faucibus justo ac mattis. Duis a risus non arcu finibus iaculis eu a elit. Etiam sodales elit vel varius placerat. In non erat vel nunc tempor ornare. 

Pellentesque non risus nisl. Morbi pulvinar auctor pharetra. Donec sodales lectus id tortor hendrerit, at feugiat urna dictum. Aenean iaculis magna sit amet tempus dictum. Nullam dui orci, tristique nec dictum quis, mattis in orci. Ut a gravida velit. Aenean sollicitudin dapibus ex a vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

Sed sollicitudin diam nec feugiat varius. Mauris scelerisque arcu nec ligula sollicitudin imperdiet. Duis posuere elit ut risus bibendum, non gravida justo aliquet. Integer augue orci, ultricies ac metus quis, sagittis tincidunt nulla. Fusce laoreet justo id porttitor ullamcorper. Aenean dapibus sem nec viverra eleifend. Sed cursus mi eget lacus imperdiet luctus.`


//for(i = 0; i < text.length; i++)
var words = 0
var spaces = text.indexOf(" ")

while (spaces !== -1){
  words++
  spaces = text.indexOf(" ", spaces + 1)
}

console.log(words +1);


var etTimes= 0
var position= text.indexOf('et')

while (position !== -1){// Le decimos que haga el loop mientras la posicion no es -1 es decir, mientras encuentre et
  etTimes++ //de ser eso que sume 1 a la variable etTimes que nos indica cuantos encontramos
  position = text.indexOf('et', position + 1) //Y que la posición de et incremente para que empiece la nueva busqueda desde ese último et
}

console.log(etTimes);

//Bonus 2

var frase = 'stack cats'
var withoutSpaces = frase.replace(/ /g, "")// quito los espacios 
var length = frase.length

for(i = 0; i < length/2; i++){ //desde 0 hasta la mitad ya que la otra mitad es igual
    if(withoutSpaces[i] === withoutSpaces[length -1 - i]){ //compruebo que la i es igual al principio que al final
    console.log('Esto es un Palindromo')
  }
}