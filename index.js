// Iteration 1: Names and Input
let hacker1= "Marlon";
console.log("The driver's name is "+hacker1);

let hacker2= "Williams";
console.log("The navigator's i "+hacker2);

// Iteration 2: Conditionals
if (hacker1 === hacker2){
    console.log("Wow, you both have equally long names, "+hacker1.length+" characters.");
} else if (hacker1.length >hacker2.length){
    console.log("The driver has the longest name, it has "+ hacker1.length+" characters.");
} else {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.");
}

// Iteration 3: Loops
let characters = "";
let wordReversed = "";

for (let i = 0; i < hacker1.length; i++){
    characters += hacker1[i].toUpperCase()+" ";
}
console.log(characters);

for (let i = hacker2.length-1; i >= 0; i--){
    wordReversed += hacker2[i];
}
console.log(wordReversed);

let Compare = hacker1.localeCompare(hacker2);
if (Compare === 0){
    console.log("What? !You both have the same name?");
} else if (Compare > 0){
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("The driver's name goes first.");
}

//Bonus 1
let longText = "\n" +
    "¿Cuál es su cliente?\n" +
    "\n" +
    "Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y tipografía. Lorem Ipsum ha sido el texto ficticio estándar" +
    " de la industria desde el siglo XVI, cuando una impresora desconocida tomó una galera de tipo y lo revuelve para hacer un libro de muestras de tipo. " +
    "Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, y permanece esencialmente sin cambios. " +
    "Se popularizó en la década de 1960 con el lanzamiento de hojas de letraset que contienen pasajes Lorem Ipsum, y más recientemente con software de " +
    "publicación de escritorio como Aldus Pagemaker, que incluye versiones de Lorem Ipsum.\n" +
    "\n" +
    "¿Por qué lo usamos?\n" +
    "\n" +
    "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. " +
    "El punto de usar Lorem Ipsum es que tiene una distribución normal más o menos de letras, en lugar de usar " +
    "'contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de publicación de escritorio y editores de páginas web ahora usan " +
    "Lorem Ipsum como su texto de modelo predeterminado, y una búsqueda de 'Lorem Ipsum' descubrirá muchos sitios web que todavía están en su infancia. Varias versiones " +
    "han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares).\n"+
    "¿De dónde viene?\n" +
    "\n" +
    "Contrariamente a la creencia popular, Lorem Ipsum no es simplemente un texto aleatorio. Tiene raíces en una pieza de literatura latina clásica de 45 a. C., lo que lo " +
    "convierte en más de 2000 años. Richard McClintock, profesor latino en el Hampden-Sydney College en Virginia, buscó una de las palabras latinas más oscuras, Consectetur, " +
    "desde un pasaje de Lorem Ipsum, y pasando por las citas de la palabra en la literatura clásica, descubrió la fuente indudable. Lorem ipsum proviene de las secciones 1.10.32 " +
    "y 1.10.33 de \"de finibus bonorum et malorum\" (los extremos del bien y el mal) por Cicero, escrito en 45 a. C. Este libro es un tratado sobre la teoría de la ética, muy popular " +
    "durante el Renacimiento. La primera línea de Lorem ipsum, \"Lorem Ipsum Dolor Sit AMET ...\", proviene de una línea en la Sección 1.10.32. ";

let palabras = longText.split(" ").length;
console.log(palabras);



