console.log("I`m Ready");
let hacker1 = "Cristhian"; //The driver
let hacker2 = "Firefox"; // The navigator
console.log(`The driver´s name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);

//Iteration 2
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Iteration 3
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1.toUpperCase().charAt(i));
}

contador = hacker2.length;
console.log(contador);

for (i = 0; i < hacker2.length ; i++) {
  console.log(hacker2.charAt(contador-1));
  contador--
}

//lexicographic order 
a = hacker1.charAt(0);
b = hacker2.charAt(0);
console.log(a)
if (a < b){
console.log(`The driver ${hacker1} goes first`);
} else if (b<a){
console.log(`Yo, the navigator ${hacker2} goes first definitely`);
}else if (a === b ){
console.log(`What?! You both have the same name?`);
}

//Bonus 1
let paragraphOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et gravida ipsum,quis gravida quam. Donec sodales vulputate hendrerit. Ut consequat lorem nulla, tempor viverra nisi placerat et. Praesent porttitor, risus convallis convallis consequat, urna elit faucibus leo, pretium tempus velit orci sed lectus. In efficitur facilisis vulputate. Nulla facilisi. Donec in consectetur ipsum. Ut consequat sed mi ut laoreet. Praesent pulvinar nibh sed nulla pretium, at hendrerit nibh accumsan. Aliquam euismod mi ut auctor congue. Aliquam tincidunt sapien in facilisis sagittis. Vivamus a nulla eu nibh malesuada hendrerit. Sed sit amet augue enim. Suspendisse sed dui posuere, ornare nulla mollis, finibus massa. Phasellus a posuere elit, in fermentum leo.";

let paragraphTwo = "roin tristique mattis velit, in venenatis nulla fermentum sed. Sed tincidunt massa cursus massa iaculis, et congue justo efficitur. Phasellus condimentum ipsum ac velit venenatis luctus. In hac habitasse platea dictumst. Praesent lacus purus, accumsan vitae massa sed, tincidunt imperdiet felis. Duis massa lacus, rutrum et lacinia blandit, aliquam eget ligula. Sed id consequat orci. Nunc lacinia tincidunt eleifend. Proin laoreet dui a erat iaculis consequat. Donec imperdiet interdum justo at dictum. Suspendisse facilisis metus eget velit suscipit, ac cursus nunc dictum. Donec ac odio diam. Mauris dapibus id purus id eleifend. Aliquam in mattis nibh. Fusce non leo turpis.";

let paragraphThree = "Cras condimentum velit sit amet arcu lacinia hendrerit. Aliquam ut risus viverra, maximus elit sed, scelerisque ipsum. Suspendisse consequat ipsum vel nisi egestas, consequat mattis velit rutrum. Morbi semper lorem a velit pellentesque, vitae ultrices purus aliquet. Quisque lacinia, ligula nec lacinia scelerisque, diam massa sodales nisl, a eleifend sem nibh nec sem. Pellentesque finibus elit in lorem sodales lobortis. Maecenas sed eros faucibus, interdum elit a, efficitur velit. Etiam elementum scelerisque congue. Donec ultricies augue ex, vitae ultricies nunc eleifend et. Maecenas imperdiet magna nec efficitur suscipit. Aenean metus dui, eleifend at neque id, scelerisque sodales est. Duis felis est, malesuada id feugiat euismod, iaculis vel ante. Cras aliquam mattis ex, vitae bibendum augue tincidunt at. Praesent et malesuada erat. Fusce tortor elit, interdum at sem eget, molestie tempor purus. Phasellus volutpat neque massa, in vulputate risus aliquet in.";

totalWords = paragraphOne.length + paragraphTwo.length + paragraphThree.length;
cuenta = 0;
paragraphTotal = paragraphOne.concat(paragraphTwo, paragraphThree);
posicion = paragraphTotal.indexOf("et");
while ( posicion != -1 ) {
   cuenta++;
   posicion = paragraphTotal.indexOf("et",posicion+1);
}
console.log(cuenta);

//Bonus 2

//Verificacion en orden normal
let cuentaNueva = 0;
let phraseToCheck = "A man, a plan, a canal, Panama!"
let posicionNueva = phraseToCheck.indexOf("man");
    while (posicionNueva != -1 ) {
        cuentaNueva++;
        posicionNueva = phraseToCheck.indexOf("man",posicionNueva+1);
     
  console.log(cuentaNueva);
}

// Verifcacion Orden Inverso

//Orden Inverso
let cadenaInvertida = []; 
x = phraseToCheck.length;
while (x>=0) {
      cadenaInvertida = cadenaInvertida + phraseToCheck.charAt(x);
      x--;
      }
  console.log(cadenaInvertida);

// Verficacion final
let cuentaFinal = 0;
let posicionFinal = cadenaInvertida.indexOf("man");
    while (posicionFinal != -1 ) {
        cuentaFinal++;
        posicionFinal = phraseToCheck.indexOf("man",posicionFinal+1);
     
  console.log(cuentaFinal);
}

// Decision final
if (cuentaNueva >= cuentaFinal) {
  console.log(`The sentence "${phraseToCheck}" is a Palindrome.`)
} else {
  console.log(`The sentence "${phraseToCheck}" is NOT a Palindrome.`)
}