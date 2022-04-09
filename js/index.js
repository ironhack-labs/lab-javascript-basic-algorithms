
console.log("i am fucking ready")

// Iteration 1: Names and Input

let hacker1 = "Baris"  // driver

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Baris"  // navigator

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;


if (lengthHacker1>lengthHacker2){
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
} else if(lengthHacker1<lengthHacker2){
console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${lengthHacker2} characters!`)
}


// Iteration 3: Loops

//3.1

let driver = (hacker1.toUpperCase()).split("");

let resultado =[];

for (i=0;i<driver.length;i++){
  
let texto = "";
  
  if(i <driver.length-1){
  texto = (`${driver[i]}`+ " ")
  resultado.push(texto);}
  
   else {
    resultado.push(driver[i])
  }
}

let resultadoFinal = resultado.join("")
console.log(resultadoFinal);

//3.2

let arrayNavigator = hacker2.split("")
let reverseArrayNavigator = arrayNavigator.reverse("");
let reverseNavigator = reverseArrayNavigator.join("")
console.log(reverseNavigator);

//3.3

if(hacker1 < hacker2){
console.log("The driver's name goes first.")
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")}
    else {
console.log("What?! You both have the same name?")
    }

// Bonus 1

let paragraph1 = "Lorem ipsum dolor et amet, consectetur adipiscing et. Vestibulum euismod scelerisque metus, non consequat libero posuere non. Vestibulum quis elementum sem. Et erat volutpat. Pellentesque a elementum diam. In aliquet erat ut neque euismod et Mauris condimentum congue tellus a semper. Aliquam et ante vitae sem lacinia efficitur et id nisi.";
let para1Words=paragraph1.split(" ");
let words1Length = para1Words.length

let paragraph2 = "Aliquam mollis magna augue, et ullamcorper magna maximus eget. Integer massa nisl, elementum eget mollis vel, tincidunt id orci. Vivamus at turpis ut magna pellentesque porta. Nunc lacinia, sem in vestibulum tincidunt, turpis arcu viverra enim, ac malesuada risus magna non ipsum. Aliquam sed condimentum ex. Aliquam blandit lacus a pulvinar accumsan. Proin ut justo interdum sem ullamcorper condimentum in ut diam. Donec interdum erat in magna luctus, sit amet dignissim nunc suscipit. Fusce ac diam pulvinar, congue neque eu, lobortis justo. Maecenas eget velit ut arcu iaculis dignissim. Aenean magna nisl, sagittis eu erat sit amet, tincidunt auctor erat. Maecenas ac interdum lacus, a pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tortor sem, luctus quis faucibus vel, dapibus ac enim.";
let para2Words=paragraph2.split(" ");
let words2Length =para2Words.length

let paragraph3 = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur tempor dolor quis dapibus viverra. Nullam eleifend et quam a tempor. In hac habitasse platea dictumst. Pellentesque consequat et sapien non egestas. Fusce cursus, odio et vestibulum sodales, eros ipsum lacinia magna, vitae viverra urna velit sed sapien. Nam sit amet justo sodales quam efficitur euismod et. In tristique massa tortor, nec efficitur leo condimentum sed.";
let para3Words=paragraph3.split(" ") // its the array that contains each word in the paragraph
let words3Length =para3Words.length

//para3Words tiene 2 et 

function etCounter (array){
let counter = 0
for (i=0;i<array.length;i++){
    
    if(array[i] === "et" || array[i] == "et."|| array[i] == "Et."|| array[i] == "Et"){
counter += 1
    }

}
return console.log(counter)
}

console.log(para3Words);
let resultBonus1 = etCounter(para3Words);

// Bonus 2

/*

  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?"
  - "No 'x' in Nixon".
*/

let phraseToCheck = "Amor, jamas"
let phraseToArray=(phraseToCheck.toUpperCase()).split("")

function filtro (array){
    let phraseClean = []
for(i=0;i<array.length;i++){
    
if(array[i]=== "," 
|| array[i]=== "!" 
|| array[i]=== " "
|| array[i]=== "'"  
|| array[i]=== "?"  ){
    continue;
} else {
phraseClean.push(array[i]); // phraseClean is the array with only letters.
}
}
return phraseClean}

let phraseClean = filtro(phraseToArray);
let phraseReverse = filtro(phraseToArray).reverse();

console.log(phraseClean);
console.log(phraseReverse);

let counter = 0;

for(i=0;i<phraseClean.length;i++){

if(phraseReverse[i] === phraseClean[i] ){
    counter +=1
} else {
    console.log("Que no es Palindrome, ya te dije.")
    break;
}
}

if (counter == phraseClean.length){
    console.log("Es palindrome, we!")
}

console.log("hola")