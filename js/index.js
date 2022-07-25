//Hola! Sabeis algun editor que permita correr codigo de JS?? 

//EJERCICIO
// Iteration 1: Names and Input
console.log("---------------Print characters name---------------")
let hacker1 = "Berulin";
let hacker2 = "Lola";
console.log(`The driver name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log("---------------Compare both names and print the longest one.---------------")
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//We uppercase the string, then we split it in letters with ""
console.log("---------------Print characters name separated by a space and in capitals---------------")
let hacker1Separated = "";
for(let counter = 0; counter < hacker1.length; counter++){
  hacker1Separated = hacker1Separated + hacker1[counter].toUpperCase() + " ";
  // hacker1Separated += hacker1[counter].toUpperCase() + " "; es lo mismo mas corto
}
console.log(hacker1Separated);

// console.log(hacker1.toUpperCase().split("")); 

//We split the var string, then reverse it letter by letter and then we put them togheter
console.log("---------------Print characters name in reverse---------------")
let letterSelector = hacker2.length - 1;
let reversedName = "";

for(let counter=0; counter < hacker2.length; counter++){
   reversedName += hacker2[letterSelector - counter];
}

console.log(reversedName)

// console.log(hacker2.split("").reverse().join(""));

//Lexicographic order
console.log("---------------LEXICOGRAPHIC ORDER---------------")
if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
} else if((hacker1.localeCompare(hacker2) > 0)){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// BONUS TIME!!!

console.log("---------------BONUS TIME!!---------------")
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis in mi vitae scelerisque. Praesent iaculis hendrerit purus in sagittis. Nullam quis quam eros. Vivamus varius velit vel tortor feugiat mollis. Donec vestibulum commodo rutrum. Nulla vel pharetra felis. Donec ultrices tincidunt vestibulum. Integer volutpat pharetra nunc at hendrerit. Praesent massa nisl, pulvinar non posuere non, lobortis feugiat ante. Nulla sem sapien, dignissim auctor rhoncus vitae, euismod ac ex. Donec gravida massa lacinia lectus varius, sit amet bibendum arcu viverra. Sed nec aliquam augue, id mattis erat. Vivamus in mauris non neque ornare laoreet. Aliquam eget gravida tortor, at cursus arcu. Quisque ac mi ut massa tempus semper ac vitae purus. Etiam auctor nisi a blandit porttitor. Nam suscipit viverra ante, vel facilisis dui feugiat at. Ut sit amet tortor suscipit, viverra erat et, scelerisque arcu. Sed quis cursus nisl. Etiam magna felis, placerat condimentum scelerisque non, ultricies in dolor. Proin condimentum sed nisl quis malesuada. Mauris a sodales mi. Maecenas pulvinar, odio ut pellentesque bibendum, ipsum dolor pretium nisl, eget maximus lorem risus ac nisl. Pellentesque ullamcorper purus non placerat malesuada. Nam tempor felis ipsum, vel condimentum neque mollis eu.Fusce tempus sit amet dolor ut pulvinar. Proin at fringilla orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus turpis, mollis in rhoncus tempus, volutpat eget lacus. Phasellus ultricies laoreet placerat. Donec molestie sem a sagittis efficitur. Fusce dui tellus, tempor eget massa eu, tincidunt viverra lectus. Donec eget placerat lacus, eu tempor velit. Duis tempus accumsan viverra.";
let paragraphToWords = "";
let etCounter = 0;
paragraphToWords = lorem.split(" "); 

console.log(`There are ${paragraphToWords.length} words in the lorem ipsum paragraph.`);

for(let counter = 0; counter < paragraphToWords.length; counter++){
  for(let charDelete = 0; charDelete < paragraphToWords[counter].length; charDelete++){
    if(paragraphToWords[counter][charDelete] == "," || paragraphToWords[counter][charDelete] == "."){
      paragraphToWords[counter] = paragraphToWords[counter].slice(0, -1)
    }
  }
  if(paragraphToWords[counter] === "et"){
    etCounter += 1;
  }
}

console.log(`There are ${etCounter} et words in the lorem ipsum paragraph.`)
