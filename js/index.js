//Prueba
console.log(`I'm ready!`);

// Iteration 1: Names and Input
//1.1
const hacker1 = `Michael Schumacher`; 
console.log(`The driver’s name is ${hacker1}.`);
//1.2
const hacker2 = `Marco Polo`
console.log(`The navigator’s name is ${hacker2}.`);

// Iteration 2: Conditionals

/*Aquí quería checar el número de caracteres de c/uno
console.log (`The drivers length is ${hacker1.length}`)
console.log (`The navigator’s length is ${hacker2.length}`)*/

const hacker1L = hacker1.length;
const hacker2L = hacker2.length;

if (hacker1L > hacker2L) {
  console.log(`The driver has the longest name, it has ${hacker1L} characters`);

} else if (hacker1L > hacker2L) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2L} characters`);

} else {
  console.log(`Wow, you both have equally long names, ${hacker1L} characters`);
}

// Iteration 3: Loops

/*Experimento 1, no sirve para los espacios entre letras
const capitals = hacker1.toUpperCase()

for (const value of capitals) {
  console.log(value);
}*/

//3.1
for (let i = 0; i < hacker1L; i++){
  let x
  console.log(hacker1[i].toUpperCase());
  console.log(` `);
}


//3.2
for(let i = hacker2L-1; i >= 0; i--){
  console.log(hacker2[i]);
}

//3.3
if (hacker1.localeCompare ('hacker2') < 0 ){
console.log(`The driver's name goes first`);

} else if (hacker2.localeCompare ('hacker1') > 0 ){
  console.log (`Yo, the navigator goes first definitely`);

} else if (hacker2 === hacker1) {
  console.log (`What?! You both have the same name?`);
}

//Bonus 1

const parr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Enim facilisis gravida neque convallis a cras. Sem integer vitae justo eget magna fermentum iaculis. Morbi tristique senectus et netus et malesuada fames ac. Fringilla ut morbi tincidunt augue. In aliquam sem fringilla ut morbi tincidunt augue interdum. Est velit egestas dui id ornare arcu odio ut. Morbi tristique senectus et netus et malesuada. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. At imperdiet dui accumsan sit amet. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Diam volutpat commodo sed egestas egestas.

Morbi leo urna molestie at. Sit amet mauris commodo quis imperdiet massa tincidunt. Ultrices gravida dictum fusce ut placerat orci nulla. Quam elementum pulvinar etiam non. Habitasse platea dictumst quisque sagittis. Leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque diam. Diam in arcu cursus euismod. Tortor condimentum lacinia quis vel eros. Molestie at elementum eu facilisis sed. Nisl purus in mollis nunc. Ultrices sagittis orci a scelerisque. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.

Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Nisi vitae suscipit tellus mauris a diam maecenas. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Posuere morbi leo urna molestie at. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Ultricies mi eget mauris pharetra et ultrices neque. Ipsum dolor sit amet consectetur. Pretium quam vulputate dignissim suspendisse in. Pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus turpis in eu mi bibendum neque egestas. Integer enim neque volutpat ac tincidunt vitae semper quis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Sed arcu non odio euismod lacinia at quis. Aliquet nec ullamcorper sit amet. Lacinia at quis risus sed vulputate. At quis risus sed vulputate odio ut enim blandit. At tellus at urna condimentum mattis pellentesque. Vitae semper quis lectus nulla at volutpat. Egestas egestas fringilla phasellus faucibus.`;
