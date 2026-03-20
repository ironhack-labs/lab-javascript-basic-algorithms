// Iteration 1: Names and Input

const hacker1 = "Paca";
console.log("El nombre del conductor es", hacker1);

const hacker2 = "Paco";
console.log("El nombre del acompañante es", hacker2);

// Iteration 2: Conditionals

if (hacker1.length >hacker2.length){
    console.log("El nombre del conductor es el más largo, contiene", (hacker1.length), "caracteres");
} else if (hacker2.length >hacker1.length){
    console.log("El nombre del acompañante es el más largo, contiene", (hacker2.length), "caracteres");
} else 
     console.log("Ambos nombres son igual de largos, contienen", hacker1.length, "caracteres");

// Iteration 3: Loops

let nombre ="";

for (let i=0;i<hacker1.length; i++){
nombre += (hacker1[i]+" ");
}
    console.log(nombre.toUpperCase());


let nombreinverso = "";
for (j=(hacker2.length-1);j>=0;j--){
    nombreinverso += (hacker2[j]);
}
console.log(nombreinverso);

if (hacker2.localeCompare(hacker1)<0){
console.log("El nombre del acompañante va primero");}
else if (hacker2.localeCompare(hacker1)>0){
    console.log("El nombre del conductor va primero");}
else {
    console.log("¿Tenéis el mismo nombre?")
}    

// Bonus 1

let longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ante nec rutrum interdum. Donec mauris turpis, vestibulum id blandit id, posuere id sem. Phasellus lacinia sit amet massa in consequat. Fusce est tortor, luctus convallis sapien sed, mattis tincidunt est. Nulla mi ligula, pellentesque et lorem vitae, viverra dignissim ex. Pellentesque facilisis diam leo, vel ultricies metus cursus id. Duis sem urna, feugiat iaculis ornare nec, posuere id ex. Integer magna arcu, rutrum ut vulputate non, consequat a arcu. Duis porta, lorem eget rutrum pharetra, ante justo congue arcu, et molestie ligula magna nec mauris. Nam faucibus quam eu mi convallis vestibulum. Etiam a sapien sed orci posuere tempor. Sed bibendum augue vitae tellus mollis, ac mollis mi semper. Morbi at massa ut turpis consequat finibus. Nullam mollis, urna non mattis ultricies, velit massa consequat nunc, hendrerit tempor lorem nisl et mauris. Ut cursus velit arcu, eu tempus arcu volutpat quis. Phasellus pharetra ac lacus in porttitor. Vivamus mi massa, luctus in turpis sit amet, sagittis luctus enim. Suspendisse venenatis enim leo, vitae fringilla tortor efficitur at. Ut quam nibh, posuere in diam eu, feugiat ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas commodo, neque rhoncus consequat facilisis, sapien erat semper leo, mollis scelerisque sapien lorem a quam. Pellentesque ut lacinia velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam iaculis sollicitudin quam. Morbi faucibus in purus quis aliquam. Pellentesque consectetur enim in est viverra, consequat dapibus lectus tincidunt. In accumsan et dui et rutrum. Mauris viverra tincidunt neque. Ut vehicula tellus nulla, eu finibus lacus varius sit amet.";
let espacio=0;

for (k=0;k<=longtext.length-1;k++){

    if (longtext[k] ==" "){
        espacio++;
    };
}

console.log("Hay",espacio+1,"palabras");

let ets=0;
for (l=0;l<=longtext.length-1;l++){

    if ((longtext.slice(l,l+3)) =="et "){
        ets++;
    };
}
console.log("Hay",ets,"et");

// Bonus 2

let phraseToCheck="step on no pets";

let sinespacios="";
let reverso="";

for (let a=0;a<phraseToCheck.length;a++){
if (phraseToCheck[a]!=" "){
    sinespacios+=(phraseToCheck[a]);
}
}

for(let b=sinespacios.length-1; b>=0;b--){
reverso+=(sinespacios[b]);
}

if(sinespacios===reverso){
    console.log(phraseToCheck, "es un palíndromo")}
    else {
        console.log(phraseToCheck, "no es un palíndromo")
    }