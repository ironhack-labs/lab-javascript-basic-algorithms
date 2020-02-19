let hacker1 = 'Massao';
console.log(`The driver name is ${hacker1}`);
let hacker2 = "Gabriela";
console.log(`The navigator name is ${hacker2}`)

if (hacker1.length > hacker2.length){
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker2.length}  characters!`)
}


for (let i =0, hacker = hacker1.toUpperCase() ; i < hacker.length ; i++){
  console.log(`${hacker[i]}`);
  console.log(" ")
}

for(let i = hacker2.length - 1; i >= 0 ; i--){
  console.log(`${hacker2[i]}`);
}
console.log(`\n`);

const comparacao = hacker1.localeCompare(hacker2);
if ( comparacao === -1 ){
   console.log(`The driver's name goes first.`)
} else if (comparacao === 1){
  console.log (`Yo, the navigator goes first definitely.`)
} else {
  console.log (`What?! You both have the same name?`)
}

let paragrafos = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis interdum lectus. Praesent quis nisi dui. Phasellus nec nulla quam. Quisque venenatis massa blandit metus vulputate, quis vestibulum magna efficitur. Aenean arcu massa, maximus at ipsum tincidunt, laoreet semper sem. Phasellus at feugiat lorem. Praesent massa nisl, bibendum ut elit eu, consequat aliquet elit. Aliquam imperdiet tincidunt tincidunt. Phasellus purus dolor, volutpat quis ante at, consequat interdum ipsum. Cras id magna non nunc porttitor dictum eget accumsan ex. Quisque facilisis vel dui eget ultricies. Vestibulum a vestibulum felis.

Mauris a nisl purus. Nunc feugiat efficitur bibendum. Vivamus et ullamcorper tellus. Mauris placerat felis quis erat mattis dapibus. Donec pulvinar ullamcorper nulla, nec dignissim arcu ultricies sed. Vestibulum faucibus auctor elit, quis feugiat nulla consequat sit amet. Maecenas faucibus, augue nec dapibus facilisis, tortor elit tristique velit, sed consequat justo nulla euismod nisi. Curabitur aliquet, dolor tincidunt varius ullamcorper, mi tellus venenatis velit, ut cursus lacus purus quis augue. Ut imperdiet quam in lectus aliquet, a pharetra enim pretium. Curabitur eu nisi nec est faucibus placerat quis eget purus. Suspendisse potenti. Nam risus sapien, vulputate sit amet tempor eget, ornare ut metus.

Vestibulum sollicitudin efficitur ex ac faucibus. Sed non viverra dui. Aenean vel libero pellentesque dui feugiat vestibulum. Aenean molestie justo sit amet odio mattis, ac laoreet risus dignissim. Quisque quis diam semper, pretium elit quis, lacinia ipsum. Maecenas mattis nisi lorem, nec egestas lacus tempor ac. Maecenas nec aliquam tortor, ac convallis risus. Fusce sed rhoncus velit. Vestibulum condimentum porta velit. `

const paragrafosSplitado = paragrafos.split(" ");
const numberOfWords = paragrafosSplitado.length;

let count = 0
for (let i = 0; i < paragrafosSplitado.length; i++){
    if (paragrafosSplitado[i] === "et"){
      count++
    }
}
console.log (count)

let frase = "Was it a car or a cat I saw?";
let fraseReversa = '';

frase = frase.toLowerCase();
let fraseSplitado = frase.split("");

for(let i = fraseSplitado.length -1; i >= 0 ; i-- ){
    if(fraseSplitado[i] === " " || fraseSplitado[i] === '!' || fraseSplitado[i] === ',' || fraseSplitado[i] === '?'){
        fraseSplitado.splice(i, 1);
    }
}
frase = fraseSplitado.join("")
fraseReversa = (fraseSplitado.reverse()).join('');

if(frase === fraseReversa){
    console.log('É um palídromo!')
}