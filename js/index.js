// Iteration 1: Names and Input

let hacker1 = "Anton";

console.log("The driver's name is " + hacker1);

let hacker2 = "Marta"

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
   console.log("The driver has the longest name, it has" + hacker1.length + "characters.");
} else if(hacker1.length < hacker2.length){
   console.log("It seems that the navigator has the longest name, it has" + hacker2.length + " characters.");
} else if(hacker1.length === hacker2.length){
   console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

   cadenaUppercase = hacker1.split("").join(" ").toUpperCase();
   console.log(cadenaUppercase);

   cadentInvertida = hacker2.split("").reverse().join("");
   console.log(cadentInvertida);

   hacker1 = hacker1.toLowerCase();
   hacker2 = hacker2.toLowerCase();

   if(hacker1 < hacker2){
      console.log("The driver's name goes first.");
   } else if(hacker1 > hacker2){
      console.log("Yo, the navigator goes first definitely.");
   } else {
      console.log("What?! You both have the same name?");
   }

   

//Bonus 1

const parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus vel neque eget rhoncus. Donec commodo nibh vitae enim vestibulum, non pellentesque justo fermentum. Aenean auctor, mi a volutpat lobortis, urna ante varius est, quis vulputate magna dolor non ipsum. Nulla eu blandit diam. Nam accumsan nec lectus ut eleifend. Suspendisse purus nisi, feugiat id congue sed, dapibus ac urna. Fusce condimentum ante tortor, non consequat turpis lacinia sit amet. Aliquam tristique auctor lectus, a semper urna. Ut lacinia nulla vel neque tempor vestibulum. Vivamus euismod at neque non venenatis. Praesent tempus, nibh quis pulvinar dignissim, enim massa efficitur risus, a laoreet orci nisi ut diam. Cras non tellus interdum, pharetra ante id, fermentum leo. Integer facilisis, tellus eu vulputate volutpat, dolor lacus volutpat sapien, id rhoncus mi risus sed quam. Nullam ultrices velit in viverra tempus. Etiam tristique, orci et efficitur cursus, risus magna bibendum urna, non maximus mi nisl et risus. In quis rutrum enim. Fusce blandit dolor id imperdiet viverra. Praesent convallis sed mi ut porttitor. Nulla facilisi. Aliquam pulvinar sollicitudin orci in consequat. Nullam sit amet rhoncus nunc, fringilla sodales orci. Pellentesque ultrices iaculis arcu eu scelerisque. Nunc purus metus, rhoncus eget mauris vel, pretium sodales dolor. Sed ultricies ante semper erat eleifend, non luctus ligula lacinia. Curabitur eleifend velit sit amet felis finibus semper. Duis lacinia ullamcorper elit, at fermentum nisl efficitur a. Donec et condimentum massa. Nam quis sollicitudin libero, ac euismod lectus. Fusce at varius velit. Sed nec porta massa. Nulla tempus pretium convallis. Nullam non leo ligula."


let palabras = 0;
let etContador = 0;

let separadorPalabras = parrafo.split(' ');
console.log(separadorPalabras);

console.log(separadorPalabras.length);

for (let i = 0; i < separadorPalabras.length; i++) {
   if(separadorPalabras[i] === "et" || separadorPalabras[i] === "et.") {
      etContador++;
   }
}

for(let i = 0; i < parrafo.length; i++){
   if(parrafo[i].includes(' ')) {
      palabras++;
   } else if(i === (parrafo.length - 1)){
      palabras++;
   }
}

console.log('palabras:', palabras);
console.log('et:', etContador);

/*
!!parseInt() es una función de alto nivel que sirve para parsear una cadena e intentar obtener un valor numérico a partir de esta.

!!Sirve para convertir en un numero, en ente caso el promt recibe un string y con parseInt lo que hacemos es cambiar ese string a un numero

pasrseInt(promt("Welcome to Ironhack. How old are you"))
if(age <= 16){
   console.log("Discount teengager");
} else if (age >= 65){
   console.log("Senior discount");
} esle {
   console.log("No discount");
}

*/


//Bonus 2

let phraseToCheck;