// Iteration 1: Names and Input

let hacker1 = "Jorge"
let hacker2 = "Paula"


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ((hacker2.length>hacker1.length)){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`WOW, you both equally long names, ${hacker1.length} characters!!!`)
}


// Iteration 3: Loops


let hacker1concat =""
for (let i=0; i<hacker1.length; i++) {
  hacker1concat += hacker1.toUpperCase().charAt(i);
  hacker1concat +=" ";
}

console.log(hacker1concat);

let hacker2reverse=""
for (let i=(hacker2.length-1); i>-1; i--) {
  hacker2reverse+=hacker2.charAt(i);
}

console.log(hacker2reverse);



if (hacker1.localeCompare(hacker2)===-1){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)===1){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}




//Bonus 1


let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
console.log(`Número de caracteres: ${lorem.length}`);
let numeroDePalabras = lorem.split(" ");
console.log(`Número de palabras: ${numeroDePalabras.length}`);
let et = 0;
for (let i = 0; i<numeroDePalabras.length;i++) {
  if (numeroDePalabras[i].toLowerCase()=== "et") {
    et++
  }
}
console.log(et);

//Palindromos

let phraseToCheck = "A man, a plan, a canal, Panama!"
let phraseReverse = ""
let phraseClean = phraseToCheck.replace(/[^a-zA-Z]/g, "");

/*for (let i=0; i<phraseToCheck.length; i++) {
  if (phraseToCheck.charAt(i)===",") {
    continue;
  } else if (phraseToCheck.charAt(i)===" ") {
    continue;
  } else {
    phraseClean += phraseToCheck.charAt(i);
  }
}
*/

for (let i=(phraseClean.length-1);i>-1; i--){
phraseReverse += phraseClean.charAt(i)
}

if (phraseClean.toLowerCase() === phraseReverse.toLowerCase()){
console.log(`La frase "${phraseToCheck}" es un palindromo`)
} else {
 console.log(`La frase "${phraseToCheck}" NO es un palindromo`) 
}
