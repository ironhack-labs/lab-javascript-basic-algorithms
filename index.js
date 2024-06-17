// Iteration 1: Names and Input

let hacker1 = 'John';
console.log("The driver's name is: " + hacker1);
let hacker2 = 'Chome';
console.log("The navigator's name is: " + hacker2);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("·The driver has the longest name, it has " + hacker1.length +" characters");
} else if(hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length +" characters");
} else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!!");
}


// Iteration 3: Loops

if(hacker1> hacker2){
    console.log("The driver's name goes first.");
} else if(hacker2 > hacker1){
    console.log("Yo, the navigator goes first, definitely.");
} else{
    console.log("What?! You both have the same name?");
}


// Bonus 1

let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum, mauris nec volutpat vehicula, nisi tortor hendrerit mi, a cursus dolor ex eget velit. Ut eget pharetra sem, sit amet interdum lorem. Sed viverra est non libero dictum, non ullamcorper lectus finibus. Nulla facilisi. Ut sit amet ipsum nec libero fermentum congue. Sed sed mauris ac odio ultrices pellentesque sit amet vel orci. Sed in varius nunc. Cras eget nunc et est dictum dapibus. Sed ut efficitur felis, in volutpat justo. Donec gravida nisi vel eros malesuada, nec convallis enim tempor. Vivamus sit amet dui risus.

Fusce condimentum, nulla sit amet pharetra lacinia, lorem lacus porttitor neque, et auctor sem lorem a risus. Integer ut sollicitudin mi. Integer quis eros ut urna tincidunt ullamcorper. Nulla facilisi. Quisque maximus euismod risus. Integer et magna fringilla, tincidunt nisi eu, accumsan nulla. Vivamus suscipit orci ac libero auctor, vel posuere turpis aliquet. Cras auctor tincidunt arcu a varius. Nam convallis, eros non varius sodales, felis ligula cursus nisl, nec tempor turpis elit eget eros. Nulla euismod erat at mi tempus congue.

Mauris vitae turpis id quam euismod scelerisque. Ut sollicitudin dui felis, ac convallis turpis malesuada nec. Aliquam erat volutpat. Aliquam erat volutpat. Vestibulum dapibus est eu enim dapibus pharetra. Aliquam auctor felis at sapien efficitur, a auctor nisl dapibus. Duis ut tincidunt purus, ut placerat justo. Nullam tincidunt velit ut dapibus dapibus. Integer sagittis, justo a ullamcorper interdum, lectus mauris finibus velit, et interdum ligula tortor a velit. Cras rutrum massa id dolor tincidunt, vel consequat lorem viverra.
`;

function contarPalabras(texto) {
    // Divide el texto por los espacios
    return texto.split(/\s+/).length;
  }
  
let numeroPalabras = contarPalabras(longText);
console.log(`El número de palabras en la cadena es:` + numeroPalabras);

function mirarCoincidencias (texto, palabra) {
    palabrasSeparadas = texto.split(/\s+/);
    contarPalabras = 0;
    for(let i = 0; i < palabrasSeparadas.length; i++){
        if(palabrasSeparadas[i] == palabra){
            contarPalabras++;
        }
    }
    return contarPalabras;
}
let coincidencias = mirarCoincidencias(longText, 'et');
console.log(`La palabra "et" aparece: ${coincidencias} veces`);

// Bonus 2

let pharaseToCheck = `Was it a car or a cat I saw?" and "No 'x' in Nixon`;
function esPalindromo(texto){
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palabrasSeparadas = texto.split(/\s+/);
    for(let i = 0; i < palabrasSeparadas.length; i++){
        if(palabrasSeparadas[i]!= palabrasSeparadas[palabrasSeparadas.length - 1 - i]){
            return false;
        }
    }
    return true;
}
if(esPalindromo(pharaseToCheck)){
console.log(`Es un palíndromo`);
} else{`No es un palíndromo`;}