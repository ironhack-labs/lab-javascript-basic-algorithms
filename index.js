// Iteration 1: Names and Input

let hacker1 = "david";
console.log(`the driver's  name is ${hacker1}`);
const hacker2 = "maria";
console.log(`the navigator's  name is ${hacker2}`);
const hacker1Length = hacker1.length ;
const hacker2Length = hacker2.length;

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name y tiene ${hacker1Length} caracters`)

}
    else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`)
}

else{
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops   

    hacker1 ="david"
     let resultadoMayus = " ";

for (let i = 0; i < hacker1.length; i++) {
    resultadoMayus += hacker1[i].toUpperCase() + " ";
}
console.log(resultadoMayus);

    resultadoReverse = "";
for (let i = hacker1.length - 1; i >=0 ; i--) {
     resultadoReverse += hacker1[i];
}
console.log(resultadoReverse);

     let compare = hacker1.localeCompare(hacker2);
     console.log(compare)
     if (compare  < 0) {
        console.log("The driver's name goes first");
        }
        else if (compare = 0){
            console.log("Yo, the navigator goes first, definitely.");
        }
            else{
                console.log("What?! You both have the same name?");
         }
     
      

    const longTest = "Lorem fistrum pupita condemor torpedo. Ese que llega pecador et va usté muy cargadoo a wan de la pradera torpedo et benemeritaar. A wan diodeno por la gloria de mi madre ahorarr por la gloria de mi madre ese que llega pupita amatomaa de la pradera no te digo trigo por no llamarte Rodrigor. Va usté muy cargadoo tiene musho peligro me cago en tus muelas quietooor no puedor quietooor está la cosa muy malar te voy a borrar el cerito hasta luego Lucas apetecan amatomaa. Sexuarl tiene musho peligro fistro amatomaa al ataquerl a peich. No te digo trigo por no llamarte Rodrigor condemor te va a hasé pupitaa ahorarr ese hombree ese pedazo de qué dise usteer me cago en tus muelas llevame al sircoo. Fistro amatomaa me cago en tus muelas amatomaa diodenoo benemeritaar se calle ustée caballo blanco caballo negroorl condemor. Está la cosa muy malar va usté muy cargadoo a wan diodenoo está la cosa muy malar caballo blanco caballo negroorl la caidita a peich. ";
    let wordText = "";
    let count = 0;
    let countText = 0;
 for (let i = 0; i < longTest.length; i++) {
    if (longTest[i] !== "," && longTest[i] !== "."){
        if(longTest[i] !== " "){
            wordText += longTest[i];
             
        }else{
            if(wordText === "et"){
                count++;
            }
            if(wordText !== ""){
                countText++  
            }
            console.log(wordText);
            wordText ="";
        }
    
     }
    
}
console.log(count)
console.log(countText)






