// Iteration 1: Names and Input


var driver = "Javier";
var nav = "Tomas";

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${nav}`);



// Iteration 2: Conditionals


 if (driver.length > nav.length){
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length === nav.length){
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${nav.length} characters.`) 
}


// Iteration 3: Loops

// Nombre del driver con espacio y mayusculas
var cadenaNueva = "";

for (var i = 0; i < driver.length; i++){
cadenaNueva +=  driver[i] + " ";
}
console.log(cadenaNueva.toUpperCase());

//Nombre invertido del navigator sin mayusculas

var cadenaInvertida = "";

for (var i = nav.length -1; i >= 0; i--){
  cadenaInvertida += nav[i];
}
console.log(cadenaInvertida);

//Ordenar alfabeticamente

if (driver < nav){
  console.log("The driver's name goes first");
} else if (driver > nav){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log('What? You both have the same name?');
}


//Bonus 1

//Almacer texto en una variable
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend tortor sit amet ex volutpat, a dictum nibh tempus. Curabitur vel interdum mi, eu gravida justo. Nam vehicula mollis augue at vulputate. Nam iaculis sodales elementum. Suspendisse ullamcorper nec lorem eu volutpat. Fusce sapien ex, pulvinar eu dapibus ut, consequat at orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec congue volutpat leo, nec lobortis massa elementum at. Fusce nec felis molestie, gravida mi id, dignissim nunc. Etiam quam leo, viverra non mattis non, consequat vel justo. Aenean fermentum magna quis elit dignissim pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam velit tortor, molestie non posuere sit amet, rutrum ac lorem." +"Suspendisse eget risus ante. In hac habitasse platea dictumst. Maecenas eleifend vehicula semper. Suspendisse non ex pretium, vulputate sapien sit amet, eleifend elit. Suspendisse suscipit ultrices eros, at fringilla est convallis eu. Aliquam lacus turpis, ultrices at egestas id, lobortis eu augue. Morbi tincidunt ac quam quis fringilla." + "Sed congue eros sagittis felis pulvinar, eget hendrerit mi auctor. Vivamus suscipit ipsum tellus, sit amet dapibus leo sollicitudin eu. Maecenas eu gravida felis, vitae volutpat neque. Etiam tempor a sem quis mollis. Nullam vel risus tincidunt, elementum mauris in, cursus felis. Sed eu massa eu lectus accumsan tempus. Mauris sodales pharetra facilisis. Maecenas vitae risus sed quam laoreet tempus eget ac ex. Morbi laoreet urna et fermentum facilisis. Etiam sit amet rhoncus purus. Nunc eget magna mattis, congue purus in, egestas orci. Proin pretium sodales urna, et vestibulum est condimentum quis. In vitae egestas felis. Integer vitae mattis augue. Donec nec tortor non magna bibendum ultricies. Etiam arcu turpis, auctor quis venenatis eget, volutpat et felis."

//Contar cantidad de palabras en el texto
lorem = lorem.split(" ");
console.log(lorem.length);


//Numero de veces que ET aparece en el texto
var count =0;
for (var i = 0; i < lorem.length; i++){
  if (lorem[i].indexOf("et")!= -1){
    count +=1
  }
}
console.log(count)


//Bonus 2


function palindromo(cadena){

  var result = `La cadena: "${cadena}", `;
  //Pasar el string a minisculas ya que a la hora de comparar caracteres es sensitivo
  var cadenaNueva = cadena.toLowerCase()
  
  //Quitar espacios de la cadena
  var cadenaSinEspacios = cadenaNueva.replace(/ /g,"");
  //Reemplazar comas y simbolos
  
  //Convertir el string a un array para poder comparar caracteres
  var x = cadenaSinEspacios.split("")
  
  //Comparar caracteres de la cadena (Creo que se puede hacer con el metodo reverse pero he optado por hacerlo asi)
  var iguales = true;
  for (var i = 0; i < x.length-1; i++){
    if (x[i] === x[x.length -i-1]){
    } else {
      iguales = false;
    }
  }  
  //Si los caracteres coinciden, significa que iguales es true y entra en el bucle
  if (iguales){
  result += "es un palindromo"
  } else {
    result += "no es un palindromo"
  }  
console.log(result);
}

