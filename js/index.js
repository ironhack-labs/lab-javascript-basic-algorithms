// Iteration 1

let hacker1 = "Alberto";
let hacker2 = "Alberto";

//console.log(`Driver\'s name is: ${hacker1}`);
//console.log(`Navigator\'s name is: ${hacker2}`);

// Iteration 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.lenght} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3

//creamos un loop por cada carácter en el nombre de hacker1
let upperHack = "";

for (let i = 0; i < hacker1.length; i++) {
  upperHack += hacker1[i].toUpperCase() + " ";
}
console.log(upperHack);

// imprimimos el nombre del navegador al reverse usando un loop "negativo"

let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}

console.log(reverse);

// Alphabetical order

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// bonus 1

let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla, tristique in turpis nec, pretium aliquet enim. Mauris id metus quis ipsum facilisis congue sed sed felis. Praesent et libero semper, maximus magna eu, commodo lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas hendrerit placerat efficitur. Nunc dignissim, justo ut volutpat consectetur, massa enim tincidunt magna, eget tempor justo neque eget tortor. Aliquam a viverra lorem. In hac habitasse platea dictumst. Aliquam at felis non diam varius lobortis.Nulla facilisis, purus eu maximus commodo, nulla nisi accumsan ligula, at ultrices tellus eros non nulla. Proin sit amet ligula interdum sem tincidunt luctus. Aliquam blandit magna nec nisl tempus facilisis. Aenean mattis, odio non tempus efficitur, metus nisi feugiat urna, vitae mattis orci ante eget mi. Integer a ex sit amet magna cursus blandit. In sed ultricies felis. Maecenas interdum vel nulla eu consectetur. Nam sollicitudin, dolor at facilisis sagittis, ex risus mattis quam, ullamcorper sodales odio nunc eu ante. Curabitur sit amet libero hendrerit, imperdiet felis vel, ultricies justo. Curabitur maximus molestie leo, efficitur venenatis felis varius a. Phasellus non tincidunt nunc, ut condimentum nunc. Sed aliquet, ex sed efficitur vehicula, erat massa luctus enim, et facilisis erat risus vitae lectus. Donec suscipit venenatis vestibulum. Sed vitae nibh elit. Vivamus volutpat ante nec tellus pulvinar, in bibendum diam condimentum. Mauris eu ex sed quam bibendum dictum vel eget velit. Aenean sollicitudin interdum odio eu fringilla. Sed vitae orci id nisl rutrum maximus. Praesent dapibus dictum nibh. Curabitur vitae eros enim. Donec sed pellentesque dolor. Nulla venenatis pulvinar erat ac accumsan. Pellentesque quis nulla tincidunt, ornare mauris et, posuere odio. Aliquam eu pharetra nunc. Maecenas ac nulla id velit ultricies pharetra ut id lacus. Nullam id diam in ante interdum gravida. Mauris congue erat purus, a condimentum nisl sodales non. Nullam accumsan faucibus luctus.";

/*let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
	if (text[i] != " ") {
		wordCount += 1;
  	}
  }

console.log(wordCount);*/

/* sin el metodo .split me cuenta cada caracter de la función en lugar de cada palabra...no logro entender como puedo sortear el problema. He considerado que un 'string' es como unos caracteres sin espacio y he creado una condicion según la cual a cada iteración, sí el index del text es diferente al espacio en blanco (" ") me suma 1 a la variable wordCount...pero no...Con el método .split lo que hago, al final, es hacer que la variable text se "separa" en un array de cadenas y contar cuanto es largo el array resultante*/

//console.log(wordCount.split(" ").length);

/*Tampoco logro la segunda parte del 1er bonus...Separo nuestra variable en un array de cadenas y lo guardo en una nueva variable

let textArr = text.split(" ");

//busco el patrón en este caso 'et'
let charCount = 0;

for (let i = 0; i < textArr.length; i++) {
  if (textArr[i] === 'et') {
    charCount++;
  }
}

console.log(charCount);

//el resultado es 3 pero debería ser 5...*/
