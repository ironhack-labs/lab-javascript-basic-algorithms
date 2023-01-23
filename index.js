// Iteration 1: Names and Input

const hacker1 = "Bruno Mourao";

const hacker2 = "Natalia Nossack";

let message1 = `The driver's name is ${hacker1}.`;
console.log(message1);

let message2 = `The navigator's name is ${hacker2}.`;
console.log(message2);

console.log(hacker1.length);

console.log(hacker2.length);


// Iteration 2: Conditionals

let letras1 = `o driver tem ${hacker1.length} letras.`;
 console.log(letras1);  
let letras2 = `o navigator tem ${hacker2.length} letras.`;
 console.log(letras2);

//const greetingDriver = 'O driver tem';
//const greetingDriver1 = 'caracteres.';
//const greetingNavigator = 'O navigator tem';
//let letras1 = hacker1.length;
//console.log($,{greetingDriver}, $,{letras1}, $,{greetingDriver1});  
//let letras2 = hacker2.length;
//console.log($,{greetingNavigator}, $,{letras2}, $,{greetingDriver1});
 

if (letras1 > letras2) {   
    console.log(`The driver has the longest name, it has ${letras1} characters`); 
} else if (letras1 < letras2) {   
    console.log(`It seems that the navigator has the longest name, it has ${letras2} characters`); 
} else {   console.log(`Wow, you both have equally long names, ${letras1}, ${letras2}, characters!`); 
} 

//if (hacker1.length > hacker2.length) {   
//   console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
//} else if (hacker1.length1 < hacker2.length) {   
//    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`); 
//} else {   console.log(`Wow, you both have equally long names, ${hacker1.length}, ${hacker2.length}, characters!`); 
//} 

// Iteration 3: Loops

let nomeMaiusculo1 = 'Natalia Nossack';
console.log(nomeMaiusculo1.toUpperCase());

let nomeMaiusculo2 = 'Bruno Mourao';
console.log(nomeMaiusculo2.toUpperCase());

console.log(nomeMaiusculo1.split(""));
console.log(nomeMaiusculo2.split(""));

//function reverseString(nomeMaiusculo1){
//    return nomeMaiusculo1;
//}

//console.log(nomeMaiusculo1.slice(-1,0));
//console.log(nomeMaiusculo1); 

//var nomeContrario1 = [nomeMaiusculo1];
//nomeMaiusculo1.reverse();

//console.log(nomeContrario1)

//nomeMaiusculo1.localeCompare(nomeMaiusculo2);
//nomeMaiusculo1 > nomeMaiusculo2 = 1;
//nomeMaiusculo1 < nomeMaiusculo2 = -1;
//nomeMaiusculo1 === nomeMaiusculo2 = 0;
 consolelog(('nomeMaiusculo1').locaoleCompare('nomeMaiusculo2'))


//------Bonus1-----

const longText = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies vestibulum sapien, id tincidunt libero convallis vitae. Nam ut euismod elit. Maecenas ut varius lacus, eu consequat nibh. Suspendisse tincidunt ligula lacus, sit amet sodales ante ultricies in. Suspendisse ac consequat odio. Cras commodo odio non sapien semper cursus. Etiam est felis, pellentesque sed porttitor vel, venenatis sed lectus. In ut augue purus. Aenean tincidunt dui ac quam sodales fermentum. In hac habitasse platea dictumst. Maecenas scelerisque urna vitae mi sollicitudin, vitae vestibulum massa vehicula.

Donec non vehicula arcu. Morbi ornare rhoncus lacus et egestas. Phasellus arcu turpis, ullamcorper at ex eu, egestas ultrices metus. Aliquam posuere nulla ut lectus convallis mattis. Morbi mattis eleifend sollicitudin. Vestibulum vel lacus tempor, dictum neque id, porttitor justo. Proin tempor orci tempor augue cursus, vitae eleifend nunc malesuada. Sed pretium elit enim, sit amet tempor orci semper id. Curabitur faucibus lacus sed eros ullamcorper ornare. Pellentesque finibus, mauris facilisis tempus scelerisque, lectus elit efficitur nisl, et faucibus diam augue rutrum arcu. Donec placerat lorem ac neque efficitur, vitae scelerisque ante mollis. Donec in ante nec ligula porttitor mattis. Etiam aliquet imperdiet dolor, a sagittis felis hendrerit quis. Praesent a massa eu quam egestas ullamcorper vel a nisl. Maecenas vel ligula nisi. Vivamus eu rutrum ante.

Nunc gravida eros lacinia, rutrum turpis quis, molestie diam. Ut sit amet elementum velit. Fusce id dapibus urna, sed scelerisque sapien. Fusce a dolor ac lorem hendrerit feugiat a ac tortor. Vivamus turpis diam, lobortis sit amet tincidunt vitae, porta non lectus. Donec pellentesque lobortis ipsum, sit amet consectetur urna aliquam eget. Curabitur rutrum arcu ante, vitae laoreet leo tincidunt sit amet. Maecenas hendrerit purus non quam vulputate, id semper lacus accumsan. Nam lobortis erat augue, condimentum elementum arcu dapibus efficitur. Aliquam vitae sem leo. Maecenas dictum neque a viverra blandit. Nullam condimentum convallis tellus vel cursus. Donec et metus eros. Mauris magna elit, commodo eget aliquam in, maximus eget tortor. Donec iaculis, lorem ac semper consequat, tellus felis consectetur est, ut suscipit tortor magna rutrum est. Sed interdum rutrum euismod."`;

letrasLongText = (`O texto tem ${longText.length} caracteres`);
console.log(longText.length);

//var palavra = "et";
//var quantidade = 0

//for (var i = 0; i < longText.length; i++) {
//if (palavra[i] === et) {
//   quantidade++
// }
//}

//function palavraEt(longText, letraProcurada) {
//   var qtd = 0;
//    letraProcurada = letraProcurada.normalize('et');
//    for (var letra of frase.normalize('et')) {
//        if (letra === letraProcurada)
//            qtd++;
//    }
//    return qtd;
//}
//document.write(quantidade)