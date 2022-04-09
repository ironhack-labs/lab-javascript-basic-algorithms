console.log("I´m Ready");

let hacker1 = "Anuar"
console.log(`The driver´s name is ${hacker1}`)

let hacker2 = "Camila"
console.log(`The navigator´s name is ${hacker2}`)

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters.` )
};

// 3.1 En mayuscula y separado por espacio
console.log(hacker1.toUpperCase().split("").join(" ")) // A N U A R

    function reverseString(ejemplo) {
        console.log (ejemplo.split("").reverse().join(""));
    }
 
// 3.2 Name in reverse order
    reverseString(hacker1); // raunA

// 3.3 Orden lexicografico

hacker1 = hacker1.toLowerCase() // igualo a minuscula
hacker2 = hacker2.toLowerCase()

    if (hacker1>hacker2){
        console.log(`The driver's name goes first.`)
    } else if (hacker1<hacker2){
        console.log (`Yo, the navigator goes first definitely.`)
    } else {
        console.log (`What?! You both have the same name?`)
    };
// Bonus 1

        let loremIpsum = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida malesuada ultrices. Aenean commodo purus nec leo rutrum, eu maximus ante bibendum. In at nibh quis dolor suscipit ornare. Suspendisse ultricies sem ipsum. Curabitur turpis diam, pretium at ultricies non, imperdiet sit amet odio. Morbi lacus risus, suscipit egestas arcu sit amet, lacinia rhoncus enim. Sed viverra interdum quam, at aliquam risus sagittis eu. In sed ornare est. Quisque velit nulla, posuere et metus vel, tristique consequat mi. Sed porttitor odio vitae feugiat feugiat. Fusce interdum mattis tincidunt. Nunc posuere sit amet libero quis viverra. Pellentesque id porta mi. Nulla mattis accumsan lectus, sit amet rutrum sapien.

        Suspendisse tempus arcu vel massa vehicula, sit amet efficitur enim rutrum. Duis id quam placerat, posuere lacus ac, condimentum nunc. Aenean mattis lacus vitae aliquet lobortis. Suspendisse dapibus magna massa, at faucibus orci maximus sed. Vivamus sollicitudin vestibulum dictum. Vestibulum tempus tortor et lectus eleifend, non sollicitudin ante dignissim. Cras non tellus in ex blandit imperdiet. Quisque lacinia nisi sit amet odio dapibus pharetra. Fusce at condimentum diam, at tristique massa. Ut eros nulla, dignissim et tortor a, egestas luctus purus. Nulla facilisi. Nam lacinia et nisi maximus ultricies. Pellentesque molestie, ipsum eu ultricies efficitur, dolor neque tristique sem, rutrum varius enim turpis ac urna.
        
        Vestibulum odio leo, ultricies non congue non, efficitur id dolor. Suspendisse nec nulla a ipsum egestas malesuada vel pulvinar elit. Curabitur viverra elit nunc, sed lacinia justo feugiat sed. Sed mollis eget nulla ac rhoncus. Nunc vehicula vestibulum finibus. Aliquam fringilla ipsum et congue laoreet. Maecenas cursus egestas urna, sit amet dapibus urna tristique eget.`


loremIpsum = loremIpsum.split(" ") // separo por palabra
console.log(loremIpsum.length) // al estar en arrays por palabra, me cuenta la palabra

let numberEt = 0 // se abre contenedor vacío para ir guardando
for (let i = 0; i<loremIpsum.length;i++){ // (mientras)
        if (loremIpsum[i] === "et") {
            numberEt += 1 // suma
        }

} 
console.log(numberEt)

// Bonus 2
let prueba = "anita Lava la tina,.???!"

prueba = prueba.toUpperCase() // igualo letras
prueba = prueba.split("") // convierto en array
console.log(typeof prueba) // typeOf para ver que es ¡¡ Por que sale objeto???
prueba = prueba.reverse() // invertir un arreglo
prueba = prueba.join("") // unifico a string
console.log(prueba)

let positive="" // declaro variable vacía
let negative ="" // declaro variable vacía

for (let i=0;i<prueba.length;i++){ // iteración de 0 a length
    if (prueba[i] === " " || prueba[i] === "," || prueba[i] === "?"|| prueba[i] === "!"|| prueba[i] === "."  ) {
    continue; // salto signos y espacios
   
} positive += prueba[i] } // le asigno el resultado

console.log(positive) // ya se ve en limpio y asignado a positive

for (let i=prueba.length-1;i>=0;i--){ // iteración de length a 0
    if (prueba[i] === " " || prueba[i] === "," || prueba[i] === "?"|| prueba[i] === "!"|| prueba[i] === "."  ) {
    continue; // salto signos y espacios
   
} negative += prueba[i] } // le asigno el resultado

console.log(negative) // ya se ve en limpio y asignado a positive

if (positive === negative){ // comparo
    console.log("Es un palindromo")
}else{
    console.log("No es un palindromo")
}





























/*
let positive = ""
let negative = ""

function anuar (prueba){
  for (let i=prueba.length-1;i>=0;i--){
    if(prueba[i]===" ")
      continue;
    negative = prueba[i]    }

    for (let i=0;i<=prueba.length;i++){
        if(prueba[i]===" ")
          continue;
        positive = prueba[i]
}}
console.log(positive)
console.log(negative)

 
  anuar(prueba);

 if (positive === negative) {
      console.log ("palindromo")
  }else{
      console.log("no es palindromo")
  }
*/


