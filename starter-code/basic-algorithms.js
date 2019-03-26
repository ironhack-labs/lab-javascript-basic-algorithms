// Names and Input
let hacker1 = "Victoria"
let hacker2 = prompt("What's the navigator name?");
console.log("The driver's name is " + hacker1)
console.log("The navigator name is " + hacker2)

//Conditionals
function longerName (hacker1, hacker2){
  if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
  }
  }

  longerName(hacker1,hacker2);

var capitalizedName = "";
var reverseName = "";
for (i = 0; i < hacker1.length; i++ ){
  capitalizedName += " "+ hacker1[i].toUpperCase();
}
console.log(capitalizedName);

for (a = hacker2.length; a >= 0; a--){
  reverseName += hacker2.charAt(a);
}
console.log(reverseName);

if (hacker1.charAt(0) < hacker2.charAt(0)){
  console.log("The driver's name goes first")
} else if (hacker1.charAt(0) > hacker2.charAt(0)){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}


function checkPalindrome () {
  let storeString = "";
  let palindromeString = prompt("Write a palindrome word:")
  for (let i = palindromeString.length; i >= 0; i--){
     storeString += palindromeString.charAt(i);
  }
  if (palindromeString === storeString) {
    console.log(`It's a palindrome!: ${palindromeString}`)
  } else {
    console.log("Not a palindrome :(")
  } 
}

checkPalindrome();

// Lorem ipsum generator

let lorem = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui nunc, pharetra sed ante at, ultrices cursus tellus. Donec nec pretium ex, et pellentesque mauris. In quam augue, tempor id orci a, blandit porta leo. Aliquam metus tellus, venenatis condimentum velit eget, tempus aliquet justo. Nam vestibulum, mi ac congue vehicula, lectus leo iaculis felis, ac commodo quam felis semper tortor. Integer eu ornare urna, ut pellentesque dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam id porta velit. Mauris a sapien maximus, finibus ligula vel, fermentum metus. Donec lacinia non risus at blandit. Duis et venenatis nulla, feugiat ultricies enim. Aliquam orci mauris, pellentesque vel volutpat vitae, pharetra a eros. Mauris laoreet maximus tellus vitae sagittis. Nullam vulputate massa id interdum vehicula.

Donec malesuada nibh erat, eget faucibus augue porttitor sit amet. Integer aliquet augue vel justo mattis, a cursus lacus ultrices. Cras euismod, sem eget egestas sagittis, sem felis semper odio, maximus ornare ipsum tellus a lacus. Donec ac dictum mauris, sit amet porta nisl. Nunc tincidunt lectus nunc, tempor posuere velit volutpat a. Mauris augue velit, bibendum ut viverra eget, mattis imperdiet diam. Quisque ut mi et elit ullamcorper tempus. Duis odio ante, hendrerit at pellentesque quis, finibus in ante. Donec fermentum pharetra purus, eget scelerisque purus egestas ac.

Vestibulum mauris ante, dignissim tincidunt faucibus at, venenatis ornare velit. Praesent varius neque non dolor molestie, in laoreet libero dictum. Cras euismod fermentum urna quis congue. Duis sit amet diam faucibus, cursus mi eget, condimentum elit. Nulla lobortis feugiat nibh, nec vestibulum eros scelerisque sed. Proin a tincidunt lorem. Fusce eget tortor sit amet neque egestas fermentum at ut ipsum. Vestibulum eleifend turpis ut finibus maximus. Proin commodo dolor a dolor vulputate consequat. Proin sit amet varius urna. Praesent ut efficitur eros. Sed id nulla at justo pretium eleifend at quis metus. Vestibulum ultrices purus nibh, sit amet sodales purus interdum vitae. Morbi tincidunt odio risus, sed tincidunt dolor porta et. `

console.log(lorem.split(` `).length);
console.log(lorem.split("et").length);
// Funcion para recibir texto random de lorem

function loremText() {
  let loremValue = prompt("Write your Lorem here:")
  let numberOfWords = " ";
  let numberOfLatinWord = " ";
  numberOfWords += loremValue.split(` `).length;
  numberOfLatinWord += loremValue.split("et").length;
    console.log(`The number of words is: ${numberOfWords}.
    The number of "et" is: ${numberOfLatinWord}.`)
}

loremText();