// Iteration 1: Names and Input

let hacker1 = "Matias Driver";
let hacker2 = "Matias Navegador";


console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has" + hacker1.length + " characters"
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has" +
      hacker2.length + " characters."
  );
} else
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );

// Iteration 3: Loops


//1-pasar a mayuscula y con espacio

let nombreCompleto = "";

for(i = 0; i < hacker1.length; i++){
nombreCompleto += hacker1[i].toUpperCase();
nombreCompleto += " ";
}

console.log(nombreCompleto);


//2- Invertir nombre (opcion 1)


let resultadoInvertir1= "";
for (let i=hacker1.length - 1; i >= 0; i--) {
  let letra = hacker1[i];
  resultadoInvertir1 += letra;
}

console.log(resultadoInvertir1.toUpperCase());

//********** opcion 2

function invertir(nombre){

    let separarNombre = nombre.split("");
    let invertirNombre = separarNombre.reverse();
    let nombreInvertido = invertirNombre.join("");

return nombreInvertido;
}

console.log(invertir(nombreCompleto));



//3- Orden lexicografico

function ordenLexicografico(cadena1,cadena2){

    orden = cadena1.localeCompare(cadena2);

    if(orden < 0){
        console.log("The driver's name goes first.");
    } else if (orden > 0){
        console.log("Yo, the navigator goes first, definitely.");
    } else{
        console.log("What?! You both have the same name?");
    }


}

ordenLexicografico(hacker1,hacker2);





//BONUS 

let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos asperiores non hic sapiente, ea iste saepe nisi laborum eum quod. Distinctio consectetur commodi beatae, non hic esse nisi minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab sunt delectus harum error veritatis, commodi, beatae quam quisquam veniam distinctio necessitatibus repellendus corporis aperiam, ad perspiciatis totam sit molestiae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus necessitatibus eaque numquam veritatis voluptatem at magnam corrupti, veniam distinctio, consectetur optio aliquid facilis unde laboriosam? Ex a provident repellat voluptatum.";

function wordsCounter(frase){

    words = frase.split(" ").length;
    return words;
}

console.log(wordsCounter(longText));








if(longText.includes(" et ")){
    console.log("hay una palabra que buscas")
} else{
    console.log("no esta la palabra que buscas");
}


