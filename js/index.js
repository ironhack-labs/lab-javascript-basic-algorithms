// Iteration 1: Names and Input
//1.1
const hacker1 = "Joaquín";
//1.2
const hacker2 = "Leonardo";
//1.3
console.log("The driver's name is ", hacker1);
//1.4
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
//2.1
if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
const hacker1M = hacker1.toUpperCase();
let nh1 = ''
for(let i = 0; i < hacker1M.length; i++) {
  nh1 = nh1 + hacker1M[i] + ' '
}
console.log(nh1);

//3.2
let nh2 = ''
for(let j = hacker2.length - 1; j >= 0; j--) {
    nh2 = nh2 + hacker2[j]
}
console.log(nh2)

//3.3
const h1 = hacker1.charCodeAt(0);
const h2 = hacker2.charCodeAt(0);
console.log(h1, h2)
if(h1 < h2) {
  console.log(`The driver's name goes first.`)
} else if(h1 > h2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`)
}

//bonus 1
const p1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquam sapien, ac viverra nulla. Suspendisse sagittis efficitur mauris, quis fermentum purus. Integer pulvinar lacinia diam ut venenatis. Curabitur facilisis lectus a justo rhoncus congue. Donec tincidunt urna erat, in vestibulum velit cursus vitae. Nam fermentum, leo non rutrum dapibus, velit urna eleifend leo, rhoncus commodo velit mi et tortor. Aliquam finibus, risus vel lobortis gravida, nulla metus blandit elit, id laoreet orci leo vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id euismod nulla. Cras pretium risus vel sapien vestibulum, a aliquet sem porttitor. Sed sed facilisis purus, eu bibendum arcu. Quisque tempus sem id lacinia tincidunt. Nulla blandit nunc leo, ut placerat nisl accumsan id. Vestibulum tempor pharetra est, sit amet convallis urna gravida eu.

Vestibulum facilisis purus a elementum lobortis. Mauris vel semper quam. Vestibulum lacinia ex ac massa dignissim ullamcorper. Vivamus molestie tellus ut luctus porttitor. Curabitur pharetra malesuada lorem a sollicitudin. Quisque mollis nec nulla a volutpat. Cras lobortis tincidunt sem vitae fermentum. Proin in erat eu nunc consequat semper eget sit amet nisl. Maecenas in enim et libero varius faucibus. Mauris ullamcorper nisl vel quam fermentum, vel viverra est sollicitudin. Donec a dapibus velit. Aenean tristique ipsum facilisis, sodales dolor quis, vestibulum sapien. Aliquam ut magna massa. Aliquam non nibh dolor. Phasellus blandit nisi orci, vel accumsan augue rutrum vel.

Nullam interdum massa at erat ullamcorper luctus eget eget orci. Proin eros massa, commodo ac nisi a, iaculis lacinia leo. Cras sagittis scelerisque risus non maximus. Mauris sem magna, mattis eget augue sed, feugiat bibendum ex. Mauris in eleifend felis, eget imperdiet justo. Pellentesque quam felis, viverra id sem nec, porttitor luctus mauris. Maecenas sed iaculis nisi. Sed nunc nulla, tincidunt sed nibh a, faucibus accumsan ligula. Nulla malesuada nisl mi, sit amet luctus orci maximus vitae. Vivamus placerat odio at tortor pretium cursus. Quisque malesuada commodo justo, at vestibulum metus dignissim ut. Cras nunc est, pellentesque non fermentum vel, fermentum vel erat. Mauris vulputate libero a sollicitudin tempus.`

let palabras = p1.split(" ");
console.log('La cantidad de palabras en el texto son de ', palabras.length);
let contador = 0;
for(let y = 0; y < palabras.length; y++) {
  if(palabras[y] === 'et') {
    contador = contador + 1;
  }
}
console.log('La cantidad de veces que aparece la palabra et son: ', contador);