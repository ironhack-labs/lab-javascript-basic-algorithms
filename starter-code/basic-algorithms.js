// Names and Input
var hacker1=prompt("What is the name of your driver?")

console.log( "The driver's name is "+ hacker1);

var hacker2 = prompt("What is the name of your navigator?");

console.log( "The navigator's name is "+ hacker2);

//for (hacker1 = 0;hacker1<hacker2.lenght;hacker1++)

if (hacker1.length > hacker2.length) {
  
  console.log ("The Driver has the longest name, it has " + hacker1.length + " character");
  
  } else if (hacker1.length<hacker2.length) {
  
  console.log ("uy navigator got the longest name,it has " + hacker2.length+ " characters");
  
} else  { 
  
  console.log ("wow, you both got equally long names, " + hacker1.length + " characters!!");
}



hacker1=hacker1.toUpperCase() + "";




    space = "",
    navegator = hacker1.split(space);

console.log(navegator);



function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log(reverse(hacker2));


if (hacker1.toLowerCase() < hacker2.toLowerCase()){
  
  console.log("The driver's name goes first"); 
  
}else if (hacker1.toLowerCase()  > hacker2.toLowerCase()) {
  
console.log("Yo, the navigator goes first definitely");

} else{ 
  
console.log("What?! You both got the same name?");

}









function palindromo(cadena) {
 
  var resultado = "La cadena \""+cadena+"\" \n";
 
  // minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();
 
// Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");
 
  // Eliminar los espacios en blanco
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
 
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
 
//Comprobar si es palindromo o no
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}
 
console.log(palindromo("Amor, Roma"));
console.log(palindromo("Esta frase no se parece a ningun palindromo"));

//Conditionals


// Lorem ipsum generator
