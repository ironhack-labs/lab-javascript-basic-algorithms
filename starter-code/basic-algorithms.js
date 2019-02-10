// Names and Input
var hacker1 = "Nuria";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("¿Cual es tu nombre?")
console.log("The driver's name is " + hacker2);

//Conditionals
function isLonger(a, b) {
    if (a.length > b.length) {
        a = true;
        console.log("The Driver has the longest name, it has XX characters");
    } else if (b.length > a.length) {
        b = true;
        console.log("Yo, navigator got the longest name, it has XX characters");
    } else {
        console.log("wow, you both got equally long names, XX characters!!");
    }
}

isLonger(hacker2, hacker1)
//Loops
//6.IMPRIME LOS CARACTERES SEPARADOS POR UN ESPACIO.
var hacker1 = "Nuria";
var nuevoNombre = [];
for (var i = 0; i < hacker1.length; i++) {
    var n = hacker1.charAt(i); //Devuelve el caracter en el indice especificado
    nuevoNombre.push(n); //Lo almacenamos en la variable por cada vuelta de for
}
console.log(nuevoNombre);//Devuelve un array ["N", "U", "R", "I", "A"]

//otra opcion muy breve;
console.log(hacker1.split('').join(' ').toUpperCase());


//7.IMPRIME TODOS LOS CARACTERES DEL NOMBRE EN ORDEN INVERSO.
var hacker1 = "Nuria";
var nuevoNombre = [];
for (var i = 4; i >= 0; i--) {
    var n = hacker1.charAt(i);
    nuevoNombre.push(n);
}
console.log(nuevoNombre);

// 8.DEPENDIENDO DEL ORDEN LEXICOGRAFICO, ORDENALOS NOMBRES, E IMPRIME UN MENSAJE POR CADA CASO.

var hacker1 = "Nuria";
var hacker2 = "Tired";
function ordenLexico(a, b) {
    if (hacker1.localeCompare(hacker2) == -1) {
        console.log("The driver's name goes first");
    } else if (hacker1.localeCompare(hacker2) == 1) {
        console.log("Yo, the navigator goes first definitely");
    } else {
        console.log("What?! You both got the same name?");
    }
}

ordenLexico(hacker1, hacker2)

//BONUS TIME!!
// 9.





//10.GO TO LOREM IPSUM GENERATOR.
//-Generate 3 parragraphs. Store the text in a String.

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis lorem, venenatis vitae ipsum id, blandit vehicula dolor. Proin lobortis elit non pulvinar faucibus. Maecenas bibendum efficitur viverra. Vestibulum elementum diam quam, ac accumsan odio mattis malesuada. Proin ultrices dolor et bibendum lacinia. Phasellus blandit vestibulum vestibulum. Nulla facilisi. In hac habitasse platea dictumst. Pellentesque aliquet, sapien vel luctus faucibus, odio felis pharetra metus, sed viverra tortor augue eget metus. Praesent varius maximus justo a fringilla. Cras sed nunc sed velit tincidunt lacinia. Suspendisse aliquam nibh euismod elementum dignissim. Integer ornare felis purus, vel feugiat neque scelerisque ut. Ut accumsan mauris et augue pretium laoreet. Praesent tincidunt, mi ut bibendum ullamcorper, odio lectus pretium mauris, nec bibendum sapien velit eget risus.Etiam venenatis non nisi sed blandit. Maecenas nisi nisl, imperdiet ac sem eu, ullamcorper placerat lorem. Duis condimentum id tortor eget pulvinar. Ut sapien sapien, volutpat sed mollis sit amet, aliquet finibus dui. Morbi eu nisl ut orci dignissim tincidunt in nec augue. Mauris nec erat viverra, fermentum augue id, sollicitudin nisl. Suspendisse eget diam a lorem pretium laoreet sed ultrices neque. Sed a sem ultricies, auctor augue imperdiet, tempor urna. Nunc congue arcu eu vulputate tempus. Praesent mattis mi nec nulla tincidunt interdum. Aenean tempus a leo et bibendum. Etiam pretium mauris viverra, rhoncus mi ut, sodales ipsum. Praesent facilisis dignissim dui in volutpat. Morbi quis mi at dolor malesuada mattis sit amet ac risus. Sed nec varius arcu, quis luctus arcu. Aenean commodo est ac diam ornare elementum volutpat convallis nulla. Duis nec libero nunc. Ut aliquet ultricies mauris, nec auctor libero scelerisque vitae. Integer dignissim massa dictum, ornare odio sit amet, luctus magna. Suspendisse vel arcu varius metus luctus consequat. Morbi metus leo, consectetur vel est in, commodo ultrices est. Duis interdum enim sit amet libero rhoncus malesuada. Sed vehicula vulputate dapibus.";

//-Make your program count the number of words in the string.
var numeroPalabras = lorem.split(" "); //["Lorem", "ipsum", "dolor", "sit", "amet,".....]]
console.log(numeroPalabras.length); //Devuelve 305

//-Make your program count the number of times the latin word etappears.
var counter = 0;


function countEt(a) {
    for (var i = 0; i <= a.length; i++) {
        if (a[i] === "et") {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(countEt(numeroPalabras)); //devuelve 3




