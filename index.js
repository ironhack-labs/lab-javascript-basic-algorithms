// Iteration 1: Names and Input

let hacker1 ="Meteroros";
let hacker2 ="Chrome";


console.log("The driver's name is " + hacker1);
console.log("The navigator is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.o");
}else{
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
let s ="";
for (i=0; i<hacker1.length; i++){
    if (i===0){
        s = s  + hacker1[i];
    }else {
        s = s + " " + hacker1[i];
    }
}
console.log(s.toUpperCase());
s="";
for (i=0; i<hacker1.length; i++){
    s = hacker1[i] + " " + s;
}
console.log(s.toUpperCase());


/* busco la mínima longitud para comparar la mima cantidad de letras en las dos palabras (comenzando por la izq) */
let min=0;
if (hacker1.length < hacker2.length){
    min=hacker1.length;
}else if(hacker2.length < hacker1.length) {
    min=hacker2.length;
}else{
    min=hacker2.length; /*cualquier valor de longitud de las dos palabras me sirve (son igual de largas) */
}
console.log("Longitud de la cadena mas corta " + min);

let primero="";/*aquí guardaré el resultado (si no son iguales)*/
i=0;/*inicializo a 0 el contador de posiciones utilizado anteriormente*/
if(hacker1!=hacker2){
    while (i<min){
        console.log("Iterando en while");
        if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i) ){
            console.log("Comparando letra " + (i+1) + " es menor en " + hacker1);
            primero=hacker1;
            break;
        }else if(hacker2.charCodeAt(i) < hacker1.charCodeAt(i)){
            console.log("Comparando letra " + (i+1) + " es menor en " + hacker2);
            primero=hacker2;
            break;
        }else{
            console.log("Comparando letra " + (i+1) + " son iguales");
            if(hacker1.length===min && primero!=hacker1){
                primero=hacker1;
            }else if(hacker2.length===min && primero!=hacker2){
                primero=hacker2;
            }
        }
        i++;
    }
    if (primero===hacker1){
        console.log("The driver's name goes first. Es " + primero);
    }else if (primero===hacker2){
        console.log("Yo, the navigator goes first, definitely. Es " + primero);
    }
    
}else{
    console.log("What?! You both have the same name?");
}

/*Bonus Time*/
let coincide=0;
let lista=null;
let longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
lista= longText.split(" ");
console.log("El texto contiene " + lista.length + " palabras");
console.log(lista);
for (i=0;i<lista.length;i++){
    if (lista[i]==="et"){
        coincide+=1;
    }
}
if (coincide===1) {
    console.log("Aparece " + coincide + " vez la palabra 'et'" )

}else{
    console.log("Aparecen " + coincide + " veces la palabra 'et'" )

}

let phraseToCheck="ana";
let longitud =phraseToCheck.length;
let esPalindromo=true;
i=0;
console.log("lonitud de palabra " + longitud);
while(i<phraseToCheck.length){
    if (phraseToCheck[i]!=phraseToCheck[longitud-(1+i)]){
        esPalindromo=false;
        console.log("Pasa booleana a false");
    }
    i++;
}
if (esPalindromo){
    console.log("La palabra '" + phraseToCheck + "' es palíndromo");
}else {
    console.log("La palabra '" + phraseToCheck + "' no es palíndromo");
}


