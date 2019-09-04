let hacker1 = "Renata";
console.log(`O nome do driver é ${hacker1}`);

let hacker2 = "Lucas";
console.log("o nome do navegador é", hacker2);

const contadorLetras1 = hacker1.length;
const contadorLetras2 = hacker2.length;


if (contadorLetras1 > contadorLetras2) {
  console.log(`O Driver tem o nome mais longo, possui ${contadorLetras1} caracteres`);
}
else if (contadorLetras2 > contadorLetras1) {
  console.log(`Sim, o navegador tem o nome mais longo, tem ${contadorLetras2} caracteres`);
}
else {
  console.log (`Uau, vocês dois têm nomes igualmente longos, ${contadorLetras1} caracteres!`);
}

let finalhacker1 = 0;
let x = 0;
let i = contadorLetras1;
let spaceHacker1 = "";

while (x < i){
  spaceHacker1 += hacker1.charAt(x) + " ";
  x = x + 1;
}
console.log(spaceHacker1.toUpperCase());

let contraryHacker2 = "";
for (let y=contadorLetras2; y >= 0; y--) {
contraryHacker2 += hacker2.charAt(y);
 };
 console.log(contraryHacker2);

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log("O nome do driver vem primeiro.")
        break;
    case 1:
        console.log("Oh, o nome do navegador definitivamente vai na frente.")
        break;
    default:
        console.log("Eita!! Driver e navegador tem o mesmo nome.")
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus nisi, varius non est vel, vulputate porta felis. Donec a velit vel felis pharetra suscipit. Donec dapibus neque fermentum, auctor elit quis, viverra ante. Praesent quis eros blandit, ornare est quis, gravida leo. Integer cursus pellentesque ligula, in convallis felis ultricies posuere. Sed molestie augue ut dolor sagittis, non pharetra justo viverra. Praesent tempor congue mi, ac tincidunt turpis vehicula non.\n Aenean in accumsan magna. Suspendisse elementum ligula condimentum luctus ultrices. Quisque porta nibh ut turpis varius, id commodo enim tincidunt. Nullam quis luctus leo. Nulla non lorem sed massa convallis tempor ac sit amet nisl. Vivamus nisl libero, vulputate vel ligula vitae, congue blandit elit. Donec lacinia mauris ante, non ornare diam lacinia sed. Fusce pellentesque nisl eu nunc consectetur porttitor. Quisque dictum elementum sapien eget lobortis.\n Vestibulum metus mi, maximus non metus in, porttitor feugiat arcu. Ut sed ligula cursus, eleifend nunc at, accumsan lacus. In hac habitasse platea dictumst. Vestibulum eu nunc sed lectus pellentesque luctus id ut leo. Ut sit amet semper justo, at facilisis diam. Mauris pretium iaculis lacus vitae pulvinar. Nunc vehicula sollicitudin semper. In hac habitasse platea dictumst. Etiam vel sagittis quam.";

console.log(lorem.split(" ").length);

console.log(lorem.split(" et ").length-1);
