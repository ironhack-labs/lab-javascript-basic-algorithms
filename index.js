// Iteration 1: Names and Input
const hacker1 = "Loreto";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Juan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
/*
3.1 Imprimir los caracteres del nombre del conductor, separados por espacio y en mayúsculas , es decir, "J O H N".
3.2 Imprimir todos los caracteres del nombre del navegador en orden inverso, es decir, "nhoJ".
3.3 Dependiendo del orden lexicográfico de las cadenas, imprimir:
*/

// 3.1
let nombreFormateado = "";
for(let i = 0; i < hacker1.length; i++) {
    nombreFormateado += hacker1[i];
    if(i < hacker1.length - 1) {
        nombreFormateado += " "
    }
}
nombreFormateado = nombreFormateado.toUpperCase();
console.log(nombreFormateado);

// 3.2
let nombreInverso = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    nombreInverso += hacker2[i];
}
console.log(nombreInverso)

// 3.3
let letraConductor;

for(let i = 0; i < hacker1.length && i < hacker2.length; i++) {
    letraConductor = hacker1[i]
    if(hacker1[i] !== hacker2[i]) {
        if(hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first");
            break;
        } else if(hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first, definitely");
            break;
        } 
    } else if(hacker1.length === hacker2.length){
        console.log("What?! You both have the same name?");
    }
}

/*if("l" < "j") {
    console.log("The driver's name goes first");
} else if("j" < "l") {
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("What?! You both have the same name?");
}*/


// bonus 1

const longText = "et et Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, `consecteur`, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de `de Finnibus Bonorum et Malorum` (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, Lorem ipsum dolor sit amet.., viene de una linea en la sección 1.10.32 El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de `de Finibus Bonorum et Malorum` por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham."
let countET=0
let countWord = 0;
for (i=0; i<longText.length; i++){
    if (longText[i] === " "){
        countWord++
    }
    if(longText[i]+longText[i+1] === "et"){
        countET++;
    }
}
console.log(countWord);
console.log(countET)

// bonus 2
const arr = ["Loreto","anita lava la tina","A man, a plan, a canal, Panama!","Amor, Roma","race car","stack cats","step on no pets","taco cat","put it up","Was it a car or a cat I saw?","No 'x' in Nixon"]
let phraseToCheck = ""
let phraseReverse = "";
for (x=0; x< arr.length; x++){
    let cleanPhrase = ""
    phraseToCheck = arr[x]
    console.log(phraseToCheck)
    for(i=0; i<phraseToCheck.length; i++){
        if(phraseToCheck[i]!==" " && phraseToCheck[i]!=="," && phraseToCheck[i]!=="'" && phraseToCheck[i]!=="?" && phraseToCheck[i]!=="!"){
            cleanPhrase += phraseToCheck[i].toLowerCase();
        }
    }
    for(let j = cleanPhrase.length - 1; j >= 0; j--) {
        phraseReverse += cleanPhrase[j];
    }
    if(cleanPhrase === phraseReverse){
        console.log("palindromo!")
    }
    else{
        console.log("No es un palindromo :,(")
    }
    phraseToCheck = ""
    phraseReverse = ""
}

//nos sobraron 10 minutos y nos hemos divertido automatizando el checkeo