// Iteration 1: Names and Input
const hacker1 = "joao";
const hacker2 = "matheus";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let Caracteres1 = hacker1.length;
let Caracteres2 = hacker2.length;

if(Caracteres1>Caracteres2){
    console.log (`The driver has the longest name, it has ${Caracteres1} characters.`);
}else if (Caracteres1===Caracteres2){
    console.log(`Wow, you both have equally long names, ${Caracteres1} characters!`);
}else{
    console.log(`It seems that the navigator has the longest name, it has ${Caracteres2} characters`);
}

// Iteration 3: Loops

let nomeMaisculo="";
let nomeInverso="";

for(let i=0; i<hacker1.length;i++){
    nomeMaisculo+=hacker1[i].toUpperCase()+" ";

}
console.log(nomeMaisculo);

for(let i=hacker2.length-1; i>0;i--){
    nomeInverso+=hacker2[i];
}
console.log(nomeInverso);

const hackersCompare = hacker1.localeCompare(hacker2);


if(hackersCompare === 1){
    console.log("The driver's name goes first.");
}else if (hackersCompare === -1){
    console.log("Yo, the navigator goes first definitely.");
}else {
    console.log("What?! You both have the same name?");
}

  

//BÔNUS1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales nunc lectus, nec fringilla mi ultricies ac. Sed condimentum tempus magna blandit interdum. Vestibulum porttitor luctus dui at vehicula. Vestibulum commodo eros ut posuere mollis. Etiam gravida dapibus tellus, ullamcorper suscipit metus cursus nec. Morbi tristique scelerisque quam id viverra. Praesent mattis, nunc placerat vulputate mollis, metus nulla ultrices ligula, vitae elementum lacus turpis ut augue. Morbi aliquet quam et erat elementum, eget viverra ante hendrerit. Vestibulum vel nisi metus. In volutpat tortor efficitur interdum auctor. Vivamus accumsan suscipit elit nec maximus. Etiam et purus turpis. Vivamus at purus eget leo vestibulum dignissim quis et nibh. Integer leo sapien, pellentesque at viverra in, mattis ut ante. Integer aliquam vitae lorem condimentum aliquam. Phasellus vel felis ut ex finibus mollis. Vestibulum vulputate, tortor sed accumsan condimentum, risus nibh feugiat quam, quis sollicitudin ligula mi sit amet libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ultrices libero. Phasellus gravida metus commodo metus sollicitudin, feugiat fermentum odio tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi gravida interdum nisl at suscipit. Pellentesque aliquet auctor tristique. Integer sed tortor a eros pellentesque luctus. Pellentesque urna eros, venenatis id porta eget, sodales a justo.Sed dictum malesuada odio, porttitor imperdiet nunc posuere sit amet. Proin eget ex eu nibh ultricies placerat. Aliquam at ullamcorper arcu. Quisque eget urna orci. Curabitur diam est, cursus quis volutpat eu, malesuada eu enim. Mauris ligula lacus, maximus nec felis vitae, convallis tristique quam. Etiam iaculis id orci at efficitur.";
let wordCount;
for (let i = 0; i < longText.length; i++) {
  let separadorDePalavras = longText.split(" ");
  wordCount = separadorDePalavras
}
console.log(wordCount.length + 1);
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  let char1 = longText[i];
  let char2 = longText[i + 1];
  let char3 = longText[i + 2];
  let char4 = longText[i +3];
  if (char1 === " " && char2 === "e" && char3 === "t" && char4 === " "){
    etCount++
  }
}
console.log(etCount);


//BONÚS2
let phraseChecker = "Race car";
let novaFrase = " "
let fraseReversa = " "
for (i = 0; i < phraseChecker.length; i++){
  if(phraseChecker[i] === " " || phraseChecker[i] === ","){
    continue;
  }
  novaFrase += phraseChecker[i];
}
let fraseMinuscula = novaFrase.toLowerCase();
for (i = fraseMinuscula.length -1; i >= 0; i--){
  fraseReversa += fraseMinuscula[i];
}
const comparaFrases = fraseMinuscula.localeCompare(fraseReversa);
console.log (comparaFrases);
if (comparaFrases === 0){
  console.log("Yes! This is a Palindrome");
} else {
  console.log("Sorry, this is not a Palindrome");
}

//console.log(fraseReversa);
//console.log(fraseMinuscula);
//if (fraseMinuscula === fraseReversa) {
//  console.log("Yes! This is a Palindrome");
// else {
//  console.log("Sorry, this is not a Palindrome");
//};

