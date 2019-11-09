// Iteration 1: Names and Input
console.log("I'm ready!");
let haker1 = "Pepito";
console.log("The driver's name is", haker1);
let haker2 = "David";
console.log("The navigator's name is", haker2);
// Iteration 2: Conditionals
if (haker1.length > haker2.length) {
  console.log(
    "The driver has the longest name, it has",
    haker1.length,
    "characters"
  );
} else if (haker2.length > haker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    haker2.length,
    "characters"
  );
} else
  console.log(
    "Wow, you both have equally long names,",
    haker1.length,
    "characters!"
  );
// Iteration 3: Loops
let result = "";
for (let i = 0; i < haker1.length; i++) {
  result += haker1[i];
  result += " ";
}
console.log(result.toUpperCase());
let inverse = "";
for (let i = haker2.length - 1; i >= 0; i--) {
  inverse += haker2[i];
}
console.log(inverse);
let sort = haker1.localeCompare(haker2);
if (sort > 0) {
  console.log("The driver's name goes first");
} else if (sort < 0) {
  cosole.log("Yo, the navigator goes first definitely.");
} else console.log("What?! You both have the same name?");
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus felis. Etiam dolor quam, posuere vel blandit vel, gravida aliquet augue. Nulla facilisi. Nulla arcu lorem, cursus eget ante ut, vulputate rutrum justo. Fusce et lobortis libero, quis porttitor est. Etiam sem lacus, vulputate maximus dapibus sed, ullamcorper nec libero. Nunc venenatis finibus tincidunt. Proin finibus, elit a maximus eleifend, justo nunc malesuada urna, sed mollis ante massa nec turpis. Duis placerat mauris sed magna fermentum suscipit. Sed tincidunt vulputate mauris malesuada porta. Aenean tempus vestibulum pulvinar. Proin finibus luctus ex vel semper. Vivamus sed egestas sapien.Nam nec felis vel urna accumsan placerat sed eget velit. Maecenas consectetur mi ac diam imperdiet, ut pulvinar enim malesuada. Fusce eget lacus eget arcu rhoncus venenatis. Maecenas imperdiet felis vitae erat gravida, et ultricies quam convallis. Sed a porttitor ligula. Nam vitae porta felis. Nulla sit amet luctus mauris.Duis eu molestie neque. Sed consectetur, justo non consectetur faucibus, mauris odio suscipit lectus, vel luctus purus turpis eu erat. Nulla pulvinar, erat a auctor posuere, magna nibh tempor enim, in semper neque nunc ac orci. Donec ultricies eleifend ullamcorper. Aenean malesuada metus quam, ut dictum nisl tempor tincidunt. Sed non felis enim. Etiam vitae metus iaculis, luctus turpis vitae, fermentum ante. Donec hendrerit elit quis rutrum dignissim. Pellentesque sit amet neque felis. Vestibulum justo nulla, sollicitudin vitae ipsum sit amet, tempor iaculis neque. Duis porttitor ipsum posuere mi maximus, vitae blandit nulla congue. Cras a nibh eleifend, tempor purus nec, commodo ex. Sed lorem lacus, ornare ut enim quis, tempor placerat neque. Nullam placerat venenatis mattis. Sed laoreet varius tempor. Duis nisi ante, pharetra non urna ac, accumsan pharetra purus."

let arrayLorem = lorem.split(" ");
console.log(arrayLorem.length);
count = 0;

for (j = 0; j < arrayLorem.length;j++){
  if(arrayLorem[j] === "et"){
    count ++;
  }
}
console.log(count);

let cadena = "No 'x' in Nixon";
let minusculas = cadena.toLowerCase();
newInversa = " ";
newCadena = " ";
for(let i = 0; i < minusculas.length; i++){
  if (minusculas.charCodeAt(i) > 96 && minusculas.charCodeAt(i) < 123){
      newCadena += minusculas.charAt(i);
  }
}
let j = 0;
for(let j = minusculas.length; j >= 0;j--){
  if(minusculas.charCodeAt(j) > 96 && minusculas.charCodeAt(j) < 123){
      newInversa += minusculas.charAt(j);
  }
}

if (newCadena === newInversa){
  console.log("Palindro!!!!");
}

function devuelveCadena(cadena){
  let minusculas = cadena.toLowerCase();
  let newCadena="";
  for(let i = 0; i < minusculas.length; i++){
    if (minusculas.charCodeAt(i) > 96 && minusculas.charCodeAt(i) < 123){
        newCadena += minusculas.charAt(i);
    };
  };
  return newCadena;
};

function invierteCadena(cadena){
  let minusculas = cadena.toLowerCase();
  let newInversa="";
  for(let i = minusculas.length; i >= 0;i--){
    if(minusculas.charCodeAt(i) > 96 && minusculas.charCodeAt(i) < 123){
        newInversa += minusculas.charAt(i);
    };
  };
  return newInversa;
};

function comparaCadena(usuario = prompt()){
  if (devuelveCadena(usuario) === invierteCadena(usuario)){
    return "Palindro";
  } else return "No es un palindro";

};