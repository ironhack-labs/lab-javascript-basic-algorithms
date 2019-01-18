//Names and Input
var hacker1 = "Tamy";
console.log("The driver's name is "+ hacker1);
var hacker2 = prompt('What is your name?');
console.log ("The navigator's name is " + hacker2);
//Conditionals
if (hacker1.length>hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length<hacker2.length)
{console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
} else {
  console.log('wow, you both got equally long names, '+ hacker1.length + ' characters!!')
}

//Loops
//6
var hacker1Mayus = hacker1.toUpperCase();
  separador = "";
  arregloDeHack1 = hacker1Mayus.split(separador);
console.log(arregloDeHack1);
//7
console.log(hacker2.split('').reverse().join(''));

//8
/*
Lo intenté pero no me sale :"(
*/

//Bonus Time
//9 
var newPalabra = prompt('Escribe otra palabra más, la que sea: ');
var alReves= newPalabra.split('').reverse().join('');
console.log ('La nueva palabra de atrás hacia adelante es: ' + alReves);
if (newPalabra === alReves) {
console.log('Puesto que se lee lo mismo, la palabra que escribiste es un Palíndronomo')
} else {
console.log('Puesto que la palabra que escribiste adelante y atrás no se lee igual: No es un Palíndronomo')
}
//10
var parrafoIpsum = "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas ante quis, himenaeos laoreet sociis semper odio mollis maecenas nisi. Pellentesque vitae nam nascetur quis rutrum hendrerit molestie est neque nisi, vel tincidunt bibendum dapibus lacinia penatibus suspendisse feugiat mollis. Erat conubia imperdiet sapien bibendum lacinia venenatis justo, nisi felis pharetra tincidunt neque penatibus, libero sodales fermentum donec faucibus ornare. Sed potenti mattis phasellus mus feugiat morbi praesent a augue netus, fames ridiculus cum fermentum dis rhoncus laoreet odio habitant, erat proin rutrum dapibus congue montes aenean aptent nisi. " + "\n \nMontes nam condimentum mauris sapien tempor sollicitudin maecenas pharetra curabitur, lobortis conubia platea egestas nisi class vulputate diam tellus, turpis sociosqu nostra erat purus ad dignissim accumsan. Lacus tincidunt senectus iaculis tristique vulputate urna pulvinar libero sagittis quis ac, mattis nibh eget ultricies semper vel mus auctor blandit faucibus. Cum tristique eleifend eget suspendisse bibendum ad fringilla cubilia dictumst, dignissim sollicitudin praesent et himenaeos tempor nec cursus mauris lacinia, diam aliquet enim pellentesque duis id sed imperdiet. Euismod morbi non sapien aliquam sagittis sociosqu cum vivamus blandit, pulvinar faucibus auctor ullamcorper et consequat eros urna semper ante, est sociis dictum leo penatibus arcu praesent porttitor. " + "\n \nNeque nunc quis parturient tortor velit tempus fusce, at taciti donec lectus faucibus urna porta, nullam ultricies fermentum metus mattis auctor. A hac duis massa nunc interdum id mattis, maecenas ultrices pulvinar semper nec ultricies viverra ornare, egestas lacus augue curae quis tempus. Vehicula dignissim pretium posuere pellentesque nec cursus tortor dui vitae, id felis per primis consequat tempus porta mauris, lacus ornare metus ut maecenas eu at fames."
function cuentaPalabras(parrafoIpsum) { 
  return parrafoIpsum.split(" ").length;
}
console.log(cuentaPalabras(parrafoIpsum));
 
var numRepeticiones = parrafoIpsum.match(/et/g);
console.log(numRepeticiones.length);
//