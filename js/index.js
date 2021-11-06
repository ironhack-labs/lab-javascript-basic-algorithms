// Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`. */
let hacker1 = "Giovanni";
console.log(`"The driver's name is ${hacker1}."`);


/*
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`. */
let hacker2 = "Oscar";
console.log(`"The navigator's name is ${hacker2}."`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" */
let hacker1Uppercase = "";
for (let i of hacker1){
  hacker1Uppercase += i.toUpperCase() + " ";
}
console.log(hacker1Uppercase);


/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" */
let hacker2Reverse = "";
for ( let i = hacker2.length -1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */
let lexicographic = hacker1.localeCompare(hacker2);

if (lexicographic === -1){
  console.log("The driver's name goes first.");
} else if (lexicographic === 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}




//Bonus 1:
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna erat, ultricies nec mi venenatis, molestie egestas libero. Integer fermentum, velit sit amet tempus pellentesque, ex tellus finibus lectus, non mollis tortor est nec purus. Phasellus eu lectus posuere nisi pretium venenatis nec lacinia odio. Sed orci purus, iaculis a odio at, dapibus sagittis ex. Maecenas et ante maximus, vestibulum nunc et, finibus est. Vestibulum et tellus sed velit blandit vehicula eu quis urna. Ut dignissim, ligula nec porta placerat, risus lorem bibendum purus, ut auctor erat mauris nec dolor.

Etiam mollis dictum velit quis varius. Ut aliquet fringilla erat a posuere. Integer imperdiet consequat tellus nec elementum. Praesent nec ante at eros posuere pretium. Pellentesque vitae rutrum tellus. Pellentesque pharetra convallis congue. Aenean vel molestie ex. Maecenas in mi posuere, eleifend felis quis, tincidunt ex. Etiam tortor mauris, feugiat eu erat id, tempor dapibus massa. Nunc posuere vehicula quam, vitae tincidunt dolor sollicitudin sit amet. Duis ut suscipit neque. Cras rhoncus fringilla elit vitae mollis.

Quisque ut mi mollis, ornare sem vel, tempor justo. Vestibulum volutpat libero id ligula tincidunt ornare. Quisque in arcu id augue facilisis blandit. Aliquam porta neque et diam ultricies condimentum. Fusce tincidunt venenatis mattis. Quisque mattis enim vel varius ultricies. Nunc sagittis ultricies quam, id congue est elementum vitae.`;

//dividimos el string en un array de strings
let textoArray = lorem.split(' ');

let counter = 0;
let counterEt = 0;

for (let i = 0; i < textoArray.length; i++){
  // x cada salto de linea, como que se peguan 2 palabras,  => counter +1
  if (textoArray[i].includes("\n\n")){
    counter ++ ;
  }
  // x cada "et" => counterEt++
  if (textoArray[i]=== "et" || textoArray[i]=== "et," || textoArray[i]=== "et." ){
    counterEt++;
  }
  // x cada palabra  => counter +1
  counter++;
}
console.log(`Las palabras totales son : ${counter}`);
console.log(`Los "et" totales son : ${counterEt}`);



//Bonus 2:

let texto = "No 'x' in Nixon"
let alphabet = "abcdefghijklmnopqrstuvwxyz"

let model = [];
let mirror = [];

// x cada letra del texto, la hago lower case, 
for (let i of texto){
	i = i.toLowerCase();
  // si es una letra, voy añadiendo letras a los 2 arrays, uno por delante, y uno por detras :}
	if (alphabet.includes(i)){
		model.push(i);
		mirror.unshift(i)
	}
}

// hago la comparacion entre los dos arrays 
for (let i = 0; i < model.length;i++){
	if (model[i] === mirror[i]){
		//console.log(i, model[i], mirror[i])
		if (i === model.length-1){
			console.log(`The phrase "${texto}" is palindrome`)
		}		
	}
	else {
		console.log("Not  a palindrome!")
		break
	}
}
