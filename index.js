// Iteration 1: Names and Input

let hacker1 = "Luis";
console.log("The driver's name is " + hacker1); 
let hacker2 = "Alfredo";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log("The driver has the longest name, it has Luis characters.");

}else if (hacker2.length > hacker1.length){
console.log("It seems that the navigator has the longest name, it has Alfredo characters.");

} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let resultado = "";

for (let i = 0; i < hacker1.length; i++){
  resultado += hacker1[i].toUpperCase() + " ";
}
 console.log(resultado.trim());

let invertido = "";
for (let i = hacker2.length -1; i >= 0; i--) {
  invertido += hacker2[i];
}
 console.log(invertido);

let primero;

if (hacker1 === hacker2){
    console.log("what?! You both have the same name?");
}else {
    for (const nombre of [hacker1, hacker2].sort((a, b) => a.localeCompare(b))){
    primero = nombre;
    if (primero === hacker2) {
        console.log("Yo, the navigator goes first, definitely.");   
    }else {
        console.log("The driver's name goes first.");
    }
    break;
    }
}

/* Bonificacion 1 */

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt ante, non porttitor magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at arcu id neque mollis fermentum. Ut ornare ex sit amet sem porta, sed elementum turpis porta. Vestibulum fringilla lorem nec risus vehicula posuere porttitor sed est. Sed tempus maximus tellus aliquam condimentum. Integer augue odio, luctus a nibh ut, consectetur bibendum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras bibendum urna sed rutrum hendrerit. Duis auctor ante sit amet libero egestas dignissim. Vestibulum pretium mauris nisi, ac consectetur purus facilisis porta. Quisque commodo risus at lorem sodales, eget condimentum lorem auctor. Curabitur nibh justo, egestas vel nisi ac, mattis efficitur ligula. Maecenas gravida nec neque sed consectetur. Sed non molestie urna. Integer a mi finibus, pulvinar ligula nec, posuere nulla.Mauris tincidunt finibus tristique. Aliquam erat volutpat. Suspendisse viverra nec purus sagittis suscipit. Aliquam tincidunt nibh sed hendrerit dapibus. Nulla facilisi. Nam dictum, justo vel cursus sollicitudin, orci sem malesuada ex, ac fermentum lectus augue sit amet mi. Donec tincidunt lacus vitae mi cursus, eget mollis eros lobortis. Pellentesque enim justo, accumsan aliquam elementum non, placerat vitae nisi. Aliquam erat volutpat. Cras commodo suscipit diam, sit amet tristique quam sagittis in.Vivamus mattis blandit tincidunt. Vestibulum sed ultrices nisi. Pellentesque ac tempus ex. Suspendisse ac scelerisque sapien. Nunc tempor lacus felis, ut suscipit tortor mollis vitae. Vestibulum fringilla enim non hendrerit condimentum. Suspendisse auctor dui risus, ut mattis tortor mattis sed. Pellentesque mattis libero id metus interdum congue.";

let totalPalabras = longText.trim().split(" ");
console.log(totalPalabras.length);

let buscar = "et";
let contador = 0;
let palabras = longText.split(" ");

for (const palabra of palabras) {
    if (palabra === buscar) {
        contador++;
    }
}
console.log(contador);

