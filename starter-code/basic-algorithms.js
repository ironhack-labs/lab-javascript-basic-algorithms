// Names and Input
let hacker1 = "Jefferson";
let hacker2 = "Rafael";

console.log("The driver's name is: " + hacker1);
console.log("The navigator's name is: " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names, " + hacker2.length + " characters!!"
  );
}

//Conditionals
let nameSpace = '';
let nDriver = 0;


while(nDriver < hacker1.length){
  nameSpace += hacker1.charAt(nDriver) + ' ';
  nDriver += 1;
}

console.log(nameSpace.toUpperCase());

let nNavigator = hacker2.length -1;
let nameInverted = '';

while(nNavigator >= 0){
  nameInverted += hacker2[nNavigator];
  nNavigator -= 1;
}

console.log(nameInverted);

let ordemAlfabetica = hacker1.localeCompare(hacker2);

if(ordemAlfabetica === -1){
  console.log('The driver\'s name goes first');
}else if(ordemAlfabetica > 0){
  console.log('Yo, the navigator goes first definitely');
}else{
  console.log('What?! You both got the same name?');
}


let palindrono = 'amor';
let nPalin = palindrono.length -1;
let paliNameInverted = '';

while(nPalin >=0 ){
  paliNameInverted += palindrono[nPalin];
  nPalin -= 1;
}

console.log(palindrono + ', ' + paliNameInverted);




// Lorem ipsum generator  

let paragraph1 = 'Lorem, Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

let paragraph2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

let paragraph3 = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';

console.log('o paragrafo um possuí: '+ paragraph1.length + ' palavras.');

console.log('o paragrafo dois possuí: '+ paragraph2.length + ' palavras.');

console.log('o paragrafo três possuí: '+ paragraph3.length + ' palavras.');


let contadorEtP1 = paragraph1;
let palavraP1 = contadorEtP1.split('et');
for(  var i1 = 0; i1 < palavraP1.length; i1 += 1);
console.log('\nQuantidade de palavras \'et\' no primeiro paragrafo: ' + i1);

let contadorEtP2 = paragraph2;
let palavraP2 = contadorEtP2.split('et');
for ( var i2 = 0; i2 < palavraP2.length; i2 += 1);
console.log('\nQuantidade de palavras \'et\' no segundo paragrafo: ' + i2);

let contadorEtP3 = paragraph3;
let palavraP3 = contadorEtP3.split('et');
for( var i3 = 0; i3 < palavraP3.length; i3 += 1);
console.log('\nQuantidade de palavras \'et\' no terceiro paragrafo: ' + i3);




