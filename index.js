console.log ("<------------------Nomes e Entrada------------------------->")

/*Iteração 1: Nomes e Entrada*/
const hacker1 = "Bruno"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Cardoso"
console.log(`The navigator's name is ${hacker2}`);

const contaHacker1 = hacker1.length;
const contaHacker2 = hacker2.length;


console.log ("<----------------------Condicionais------------------------>")
/*Iteração 2: Condicionais*/
if (contaHacker1 < contaHacker2) {
  console.log(`Yo, navigator got the longest name, it has ${contaHacker2} characters`);
} else if (contaHacker1 > contaHacker2) {
  console.log(`The Driver has the longest name, it has ${contaHacker1} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${contaHacker1} characters!`)
}

console.log ("<--------------------------Loops--------------------------->")
/*Iteração 3: Loops*/
let hacker1Maiusculo = ' ';

for (let i = 0; i < hacker1.length; i += 1) {
  hacker1Maiusculo += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(hacker1Maiusculo);

let hackerInverso = ' ';

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  hackerInverso += hacker2[i];
}
console.log(hackerInverso)


const nomeOrdem = hacker2.localeCompare(hacker1);

if (nomeOrdem == 1) {
  console.log("The driver's name goes first.")
} else if (nomeOrdem == -1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both got the same name?")
}

console.log ("<-------------------------Bônus---------------------------->")
/*Bônus Time!*/
const textoIpsum =
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been, the industry 's standard dummy text ever since et! the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five, centuries but also the leap ET, inetet electronic typesetting, remaining essentially unchanged.`;


const quantPalavras = textoIpsum.split(' ').length;
console.log(quantPalavras);

///pegar todos os "et" do texto, inclusive os que estão contidos em uma palavra.
const letras = 'et';
const ipsumLowerCase = textoIpsum.toLowerCase();

let cont = 0;

for (let i = 0; i < ipsumLowerCase.length; i++) {
  if (ipsumLowerCase.charAt(i) + ipsumLowerCase.charAt(i + 1) === letras) {
    cont++;
  }
}
console.log(cont);

///Pega "et" que são palavras soltas. Está com expressão regular, não sei se poderia usar no exercício.
const abc = textoIpsum.replace(/[\.,!()?-]/g, "").toLowerCase();
let final = abc.match(/ et /g).length;
console.log(final);