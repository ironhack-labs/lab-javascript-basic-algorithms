// Iteration 1: Names and Input
let hacker1 = "Javier";

console.log(hacker1);

let hacker2 = "Google Chrome";

console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals

if( hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");   
} else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.");
} else if (hacker1.length = hacker2.length){
    console.log("Wow, you both have equally long names, " + hacker1 + " characters!");
}


// Iteration 3: Loops


/*function separarNombre(hacker1){
    let nombreMayuscula = hacker1.toUpperCase();
    let nombreSeparado = nombreMayuscula.split('').join(' ');

    return nombreSeparado;
}
let result = separarNombre(hacker1);
console.log(result);
*/



/*function invertir(hacker1){
    let invertir = hacker1.split('').reverse().join('');
    return invertir;
}
let result = invertir(hacker1);
console.log(result);
*/



/*function ordenarPalabras(hacker1, hacker2) {
    
    let palabras = [hacker1, hacker2];
    
    palabras.sort();
    
    if(palabras[0] === palabras[1]){
        return "What?! You both have the same name?";
    } else if (palabras[0] === hacker1){
        return "The driver's name goes first";
    } else {
        return "Yo, the navigator goes first, definitely.";
    }
}
let result = ordenarPalabras(hacker1, hacker2);
console.log(result);
*/

let longText = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere ut nunc sed vestibulum. Donec orci nisi, volutpat eu lectus eget, tristique tempus elit. Mauris nec purus metus. Curabitur tincidunt purus ac ex vehicula condimentum. Morbi magna eros, interdum eget mi eget, gravida blandit sapien. Vestibulum scelerisque risus sed mauris dapibus, a auctor elit consectetur. Sed eget tincidunt dolor. Phasellus fermentum vulputate velit quis elementum. Aenean placerat ante sed semper ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere posuere turpis, eget finibus nulla malesuada faucibus. In malesuada porttitor varius. Sed congue ante vel sapien vehicula lobortis. Phasellus aliquet ex ac metus faucibus sodales. Sed nec blandit velit. Integer iaculis urna elementum tincidunt fermentum. Morbi et odio ac sapien egestas convallis. Fusce cursus eros quis lacus pulvinar, non viverra eros scelerisque. Suspendisse in tortor in erat interdum condimentum sed sed quam. Maecenas a varius purus. Duis consectetur magna sed risus porttitor, ac tincidunt felis tristique. Curabitur porttitor diam nec magna finibus interdum. Nullam leo lorem, sodales sit amet dui et, vehicula porta odio. Maecenas tincidunt volutpat odio et malesuada. Curabitur sapien ipsum, pellentesque quis est ut, faucibus tempus quam. Quisque at pretium augue, eget aliquam sem. Donec tincidunt risus quis ultrices porttitor. Donec dignissim sed risus vitae condimentum. Nam quam tortor, vestibulum id aliquet in, egestas sollicitudin nulla. Pellentesque feugiat, arcu sed euismod dignissim, risus orci sagittis nisi, sed scelerisque mi erat et leo. Mauris in massa aliquam, pretium elit eget, tincidunt massa. Donec condimentum enim et sollicitudin mollis. Vivamus a risus eu dui tempus euismod. Sed nec ex nec velit mattis eleifend non eget leo. Cras eu diam libero. Maecenas iaculis, nunc sit amet suscipit porta, neque risus malesuada magna, eget fermentum enim est et tortor.");

let numPalabras = longText.split('').length;

console.log(" La cadena tiene " + numPalabras + " palabras.");

function numEt(longText){

    let coincidencias = longText.match(/\bet\b/gi);
    if(!coincidencias){
        return 0;
    }
    return coincidencias.length;
}
let result = numEt(longText);
console.log(result);