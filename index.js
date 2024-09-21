// Iteration 1: Names and Input
const hacker1 = "Airam";
console.log("the driver´s name is Airam");
const hacker2 = "jose";
console.log("the navigator´s name is jose");

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("the driver has the longest name, it has xx characters");
} else if(hacker2.length > hacker1.length){
    console.log("it seems that the navigator has the longest name, it has xx characters");
} 
else { console.log("wow, you both have equally long names, xx characters");

}



// Iteration 3: Loops
let nameDriver = ""
for (let i = 0; i < hacker1.length; i++) {
    nameDriver += hacker1[i].toUpperCase() + " ";
}
console.log(nameDriver);


nombreInvertido = "";

for ( let i = hacker2.length - 1; i >= 0; i--){
    nombreInvertido += hacker2[i];
}
console.log(nombreInvertido);

if (hacker1.length >= 4) {
    console.log("the driver´s name goes first"); }
    else if (hacker2.length >= hacker1.length){
        console.log("yo, the navigator goes first, definitily");    
    }
    else {
        console.log("what? you both have the same name?");
        
    }


    //bonus

    const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor faucibus velit eget posuere. Vestibulum ut urna tempor, tempor orci nec, accumsan massa. Donec interdum sapien et enim tempus ullamcorper eu id leo. Integer dapibus porttitor nibh id dictum. Integer mollis blandit lacus nec auctor. Phasellus faucibus, lectus vel egestas finibus, purus velit vehicula elit, et luctus eros arcu non sapien. Proin sollicitudin ante sed mollis dictum. Etiam elementum aliquet dolor. Sed pretium non ex id tristique. Proin vel dolor vel urna congue porta vel at ante.

    Nam venenatis tincidunt nunc sit amet elementum. Etiam vehicula libero a aliquet scelerisque. Vivamus ultrices ante sit amet metus euismod, quis bibendum est ornare. Nulla facilisi. Proin lacinia turpis sit amet faucibus pharetra. Etiam ullamcorper, leo vel cursus imperdiet, velit erat dictum velit, non laoreet tellus lacus vitae dui. Mauris et mi venenatis, pretium elit vel, rutrum nulla. Suspendisse feugiat id enim vitae consequat. Mauris ligula lorem, accumsan at efficitur quis, aliquam eget est. Nulla finibus pulvinar est. Nulla varius lectus et quam vestibulum, nec condimentum nibh euismod.
    
    In convallis, purus et blandit rhoncus, nunc magna vulputate tellus, sit amet fringilla ante libero a magna. Duis sagittis condimentum ante vel eleifend. Sed consectetur risus id dui imperdiet, ac lacinia nibh eleifend. Nulla ornare non justo quis mollis. Phasellus viverra lectus id iaculis fringilla. Duis et tincidunt nunc. Nullam feugiat fermentum ultricies. Nam condimentum vitae mauris ut facilisis. Proin vehicula finibus eleifend. Nunc sem nunc, blandit quis nisl ac, pulvinar sodales justo. Nullam sodales sem in velit maximus, id bibendum diam fringilla. Proin mattis, diam sit amet pharetra porta, enim nibh dictum sem, at molestie dui ante eget enim. Vestibulum lacinia neque eu malesuada dignissim. Nam pulvinar tellus odio, sit amet tempus libero finibus quis.`
    
    let palabras = longText.split(" ");
    let numerodePalabras = palabras.length;
    console.log("el numero de palabras del texto :", numerodePalabras);

    let phraseToCheck = ""