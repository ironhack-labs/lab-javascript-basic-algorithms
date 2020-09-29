//Ejercicio 1

let hacker1 = "Marc";
console.log("The driver  name is " + hacker1);
let hacker2 = "Alberto";
console.log("The navigator's name is " + hacker2);

//Ejercicio 2

if (hacker1.length > hacker2.length) {
    console.log("The driver " + hacker1 + " has the longest name, it has " + hacker1.length + "  characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("The driver " + hacker2 + " has the longest name, it has " + hacker2.length + "  characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "  characters!");
}

//Ejercicio 3.1

let hacker1mayus = hacker1.toUpperCase().split("").join(" ");
let hacker2mayus = hacker2.toUpperCase().split("").join(" ");
console.log("sus nombres en mayúsculas son " + hacker1mayus + " y " + hacker2mayus);

//Ejercicio 3.2

let hacker1reverse = hacker1.split("").reverse().join("");
let hacker2reverse = hacker2.split("").reverse().join("");
console.log("sus nombres al revés son " + hacker1reverse + " y " + hacker2reverse);

// Ejercicio 3.3

let hacker1lexic = hacker1.localeCompare(hacker2);
if (hacker1lexic === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1lexic === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}




// Bonus 1

let texto1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium neque enim, ut aliquam elit sollicitudin eu. Sed rutrum at erat id ultricies. Donec iaculis felis pretium sollicitudin bibendum. Morbi nisi velit, sagittis in velit ac, finibus vulputate diam. Donec consectetur venenatis eros at elementum. Sed at eros sapien. Pellentesque molestie lorem pulvinar fringilla efficitur. Suspendisse congue euismod nunc, vehicula tincidunt mauris. Donec lorem enim, vestibulum vel euismod ut, mollis nec mauris. Pellentesque venenatis ac tellus ac scelerisque. Pellentesque tristique eleifend est, vitae facilisis nisl porta sit amet. Nullam lorem nisi, pulvinar commodo nisi at, ornare dictum eros. Phasellus a sodales turpis. Maecenas eu malesuada ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat.`
let texto2 = `Etiam gravida volutpat dolor, quis hendrerit risus gravida eget. Maecenas fringilla orci magna, sed sagittis lacus vestibulum sed. Aenean imperdiet purus eu velit bibendum, non cursus magna tempor. Nam vehicula eget enim vel tristique. Cras convallis purus volutpat, congue neque non, feugiat sem. Aenean pretium fermentum viverra. Curabitur molestie odio ac purus tincidunt, eu rutrum elit rutrum. Quisque in nunc libero. Donec id est a diam fringilla mollis sed et ipsum. Donec maximus tortor augue. Pellentesque sit amet faucibus turpis, in pulvinar libero. Donec volutpat at odio eu suscipit.`
let texto3 = `Fusce congue rutrum tellus, vel tincidunt urna sodales ut. Phasellus quis mi ac neque accumsan lacinia eget sed odio. Proin luctus at sem non mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mollis vestibulum. Sed at placerat diam. Maecenas tempus, ex non pretium rhoncus, velit leo commodo odio, non mollis lorem purus condimentum nisl. Nulla aliquam sit amet diam quis molestie. Cras accumsan vestibulum quam ut molestie. Cras tempor eros in enim lobortis euismod.`;

let contador1= texto1.split(" ")
console.log("El primer parrafo contiene " + contador1.length + " palabras")
let contador2= texto2.split(" ")
console.log("El segundo parrafo contiene " + contador2.length + " palabras")
let contador3= texto3.split(" ")
console.log("El tercer parrafo contiene " + contador3.length + " palabras")
let suma= contador1.length+contador2.length+contador3.length;
console.log("La suma de los tres parrafos contiene "+ suma + " palabras")


let phraseToCheck1 = texto1.indexOf("et")
let phraseToCheck2 = texto2.indexOf("et")
let phraseToCheck3 = texto3.indexOf("et")
let sumaPhrase= phraseToCheck1+phraseToCheck2+phraseToCheck3;
console.log(sumaPhrase)




//Ejercicio Bonus 2

let phraseToCheck = "amor , roma"
let palindromo = phraseToCheck.toLowerCase().split("").join("")
let palindromoReverse = phraseToCheck.toLowerCase().split("").reverse().join("")
if (palindromo == palindromoReverse){
  console.log("La frase '" + phraseToCheck + "' es un palíndromo")
}
else{
  console.log("No es un palíndromo")
}